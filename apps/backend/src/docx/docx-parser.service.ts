import { Injectable } from '@nestjs/common';
import AdmZip from 'adm-zip';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';

export interface ParseResult {
  keys: string[];
  occurrences: Record<string, number>;
}

/** Regex matching valid placeholder names inside ${...}. */
const PLACEHOLDER_RE = /\$\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;

@Injectable()
export class DocxParserService {
  /**
   * Parses a DOCX buffer and extracts all unique placeholder names.
   * Handles split runs (mixed-runs), headers, footers and deduplication.
   */
  parse(buffer: Buffer): ParseResult {
    let zip: AdmZip;
    try {
      zip = new AdmZip(buffer);
    } catch {
      throw new ServiceException(ErrorCode.FILE_CORRUPTED, {
        retryable: false,
        action: 'fix_input',
        explain: 'Cannot open file as a zip archive. File may be corrupted or not a DOCX.',
      });
    }

    // Collect relevant XML parts: document + all headers/footers
    const parts: string[] = [];

    const docEntry = zip.getEntry('word/document.xml');
    if (!docEntry) {
      throw new ServiceException(ErrorCode.FILE_CORRUPTED, {
        retryable: false,
        action: 'fix_input',
        explain: 'Missing word/document.xml — not a valid DOCX file.',
      });
    }
    parts.push(docEntry.getData().toString('utf-8'));

    // Add all header and footer XML parts
    for (const entry of zip.getEntries()) {
      const name = entry.entryName;
      if (
        (name.startsWith('word/header') || name.startsWith('word/footer')) &&
        name.endsWith('.xml')
      ) {
        parts.push(entry.getData().toString('utf-8'));
      }
    }

    const occurrences: Record<string, number> = {};

    for (const xml of parts) {
      this.extractFromXml(xml, occurrences);
    }

    const keys = Object.keys(occurrences);
    return { keys, occurrences };
  }

  /**
   * Extracts placeholders from an XML string by first reassembling
   * paragraph text (joining all w:t content within each w:p) and then
   * applying the placeholder regex. This resolves mixed-runs fragmentation.
   */
  private extractFromXml(xml: string, occurrences: Record<string, number>): void {
    // Split into paragraphs and reassemble text within each paragraph
    const paragraphs = xml.split(/<\/w:p>/);
    for (const para of paragraphs) {
      const text = this.extractParagraphText(para);
      this.applyRegex(text, occurrences);
    }
  }

  /** Concatenates all w:t content within a paragraph fragment. */
  private extractParagraphText(paraFragment: string): string {
    const wtRe = /<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g;
    const parts: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = wtRe.exec(paraFragment)) !== null) {
      if (m[1] !== undefined) parts.push(m[1]);
    }
    return parts.join('');
  }

  /** Applies the placeholder regex and accumulates occurrences. */
  private applyRegex(text: string, occurrences: Record<string, number>): void {
    PLACEHOLDER_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = PLACEHOLDER_RE.exec(text)) !== null) {
      const key = m[1] as string;
      occurrences[key] = (occurrences[key] ?? 0) + 1;
    }
  }
}
