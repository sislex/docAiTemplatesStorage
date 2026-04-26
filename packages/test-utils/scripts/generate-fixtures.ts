import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import AdmZip from 'adm-zip';

const OUT_DIR = join(__dirname, '..', 'fixtures', 'docx');
mkdirSync(OUT_DIR, { recursive: true });

// --- XML building blocks ---

function contentTypes(extras = ''): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>${extras}
</Types>`;
}

const DOT_RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
    Target="word/document.xml"/>
</Relationships>`;

function docRels(extras = ''): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${extras}
</Relationships>`;
}

function documentXml(bodyXml: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>${bodyXml}</w:body>
</w:document>`;
}

/** Wraps text in a single paragraph with one run. */
function para(text: string): string {
  return `<w:p><w:r><w:t xml:space="preserve">${text}</w:t></w:r></w:p>`;
}

interface MakeDocxOptions {
  contentTypesExtra?: string;
  docRelsExtra?: string;
  extraFiles?: Record<string, string>;
}

/** Creates a minimal valid DOCX Buffer using adm-zip. */
function makeDocx(bodyXml: string, opts: MakeDocxOptions = {}): Buffer {
  const zip = new AdmZip();
  zip.addFile(
    '[Content_Types].xml',
    Buffer.from(contentTypes(opts.contentTypesExtra ?? ''), 'utf-8'),
  );
  zip.addFile('_rels/.rels', Buffer.from(DOT_RELS, 'utf-8'));
  zip.addFile('word/document.xml', Buffer.from(documentXml(bodyXml), 'utf-8'));
  zip.addFile(
    'word/_rels/document.xml.rels',
    Buffer.from(docRels(opts.docRelsExtra ?? ''), 'utf-8'),
  );
  for (const [name, content] of Object.entries(opts.extraFiles ?? {})) {
    zip.addFile(name, Buffer.from(content, 'utf-8'));
  }
  return zip.toBuffer();
}

function save(name: string, buf: Buffer): void {
  writeFileSync(join(OUT_DIR, name), buf);
  console.log(`✓ ${name}`);
}

// --- Generate fixtures ---

// 1. valid.docx — three valid placeholders
save('valid.docx', makeDocx(para('${fullName}') + para('${date}') + para('${amount}')));

// 2. mixed-runs.docx — ${fullName} split across 3 w:r runs (simulates Word internal fragmentation)
save(
  'mixed-runs.docx',
  makeDocx(
    `<w:p>` +
      `<w:r><w:t xml:space="preserve">\${full</w:t></w:r>` +
      `<w:r><w:rPr><w:b/></w:rPr><w:t xml:space="preserve">Na</w:t></w:r>` +
      `<w:r><w:t>me}</w:t></w:r>` +
      `</w:p>`,
  ),
);

// 3. with-duplicates.docx — ${date} appears 4 times
save('with-duplicates.docx', makeDocx([1, 2, 3, 4].map(() => para('${date}')).join('')));

// 4. in-header-footer.docx — placeholders in header and footer XML parts
const headerXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  ${para('${headerField}')}
</w:hdr>`;
const footerXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  ${para('${footerField}')}
</w:ftr>`;
save(
  'in-header-footer.docx',
  makeDocx(para('${bodyField}'), {
    contentTypesExtra: `
  <Override PartName="/word/header1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>
  <Override PartName="/word/footer1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>`,
    docRelsExtra: `
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header"
    Target="header1.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer"
    Target="footer1.xml"/>`,
    extraFiles: {
      'word/header1.xml': headerXml,
      'word/footer1.xml': footerXml,
    },
  }),
);

// 5. invalid-syntax.docx — placeholders violating the ^[a-zA-Z_][a-zA-Z0-9_]*$ rule, plus one valid
save('invalid-syntax.docx', makeDocx(para('${123bad}') + para('${with-dash}') + para('${ok}')));

// 6. no-placeholders.docx — plain text, no placeholders
save('no-placeholders.docx', makeDocx(para('This document has no placeholders.')));

// 7. corrupted.docx — raw bytes, not a valid zip
save('corrupted.docx', Buffer.from([0xde, 0xad, 0xbe, 0xef, 0x00, 0xff, 0x42, 0x13]));

// 8. not-docx.txt — plain text file disguised as a fixture
writeFileSync(join(OUT_DIR, 'not-docx.txt'), 'This is not a DOCX file.\n', 'utf-8');
console.log('✓ not-docx.txt');

// 9. empty.docx — valid DOCX structure, empty body
save('empty.docx', makeDocx(''));

// 10. nested-braces.docx — nested brace pattern that must NOT be parsed as a placeholder
save('nested-braces.docx', makeDocx(para('${a${b}c}')));

console.log('\nAll 10 fixtures generated successfully →', OUT_DIR);
