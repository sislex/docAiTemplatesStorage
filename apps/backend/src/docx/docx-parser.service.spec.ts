import { loadFixture } from '../../../../packages/test-utils/src/loadFixture';
import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';

import { DocxParserService } from './docx-parser.service';

describe('DocxParserService', () => {
  let parser: DocxParserService;

  beforeAll(() => {
    parser = new DocxParserService();
  });

  // 1. valid.docx — 3 valid placeholders
  it('#1 valid.docx — extracts 3 unique keys', () => {
    const buf = loadFixture('valid.docx');
    const result = parser.parse(buf);
    expect(result.keys).toHaveLength(3);
    expect(result.keys).toContain('fullName');
    expect(result.keys).toContain('date');
    expect(result.keys).toContain('amount');
  });

  // 2. mixed-runs.docx — ${fullName} split across 3 w:r runs
  it('#2 mixed-runs.docx — extracts fullName from split runs', () => {
    const buf = loadFixture('mixed-runs.docx');
    const result = parser.parse(buf);
    expect(result.keys).toContain('fullName');
  });

  // 3. with-duplicates.docx — ${date} appears 4 times
  it('#3 with-duplicates.docx — reports 4 occurrences of date', () => {
    const buf = loadFixture('with-duplicates.docx');
    const result = parser.parse(buf);
    expect(result.keys).toEqual(['date']);
    expect(result.occurrences['date']).toBe(4);
  });

  // 4. in-header-footer.docx — placeholders in header and footer
  it('#4 in-header-footer.docx — extracts placeholders from header and footer', () => {
    const buf = loadFixture('in-header-footer.docx');
    const result = parser.parse(buf);
    expect(result.keys).toContain('headerField');
    expect(result.keys).toContain('footerField');
    expect(result.keys).toContain('bodyField');
  });

  // 5. invalid-syntax.docx — only ${ok} passes, ${123bad} and ${with-dash} are ignored
  it('#5 invalid-syntax.docx — keeps only valid placeholder "ok"', () => {
    const buf = loadFixture('invalid-syntax.docx');
    const result = parser.parse(buf);
    expect(result.keys).toContain('ok');
    expect(result.keys).not.toContain('123bad');
    expect(result.keys).not.toContain('with-dash');
  });

  // 6. no-placeholders.docx — no placeholders
  it('#6 no-placeholders.docx — returns empty keys array', () => {
    const buf = loadFixture('no-placeholders.docx');
    const result = parser.parse(buf);
    expect(result.keys).toHaveLength(0);
  });

  // 7. corrupted.docx — invalid zip
  it('#7 corrupted.docx — throws FILE_CORRUPTED', () => {
    const buf = loadFixture('corrupted.docx');
    expect(() => parser.parse(buf)).toThrow(ServiceException);
    expect(() => parser.parse(buf)).toThrow(
      expect.objectContaining({ code: ErrorCode.FILE_CORRUPTED }),
    );
  });

  // 8. not-docx.txt — not a zip
  it('#8 not-docx.txt — throws FILE_CORRUPTED', () => {
    const buf = loadFixture('not-docx.txt');
    expect(() => parser.parse(buf)).toThrow(ServiceException);
    expect(() => parser.parse(buf)).toThrow(
      expect.objectContaining({ code: ErrorCode.FILE_CORRUPTED }),
    );
  });

  // 9. empty.docx — valid DOCX, no text
  it('#9 empty.docx — returns empty keys without throwing', () => {
    const buf = loadFixture('empty.docx');
    expect(() => parser.parse(buf)).not.toThrow();
    const result = parser.parse(buf);
    expect(result.keys).toHaveLength(0);
  });

  // 10. nested-braces.docx — ${a${b}c} — inner ${b} should be extracted as 'b'
  it('#10 nested-braces.docx — extracts "b" from nested brace pattern', () => {
    const buf = loadFixture('nested-braces.docx');
    const result = parser.parse(buf);
    expect(result.keys).toContain('b');
  });
});
