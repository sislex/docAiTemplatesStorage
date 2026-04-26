import { HttpException, HttpStatus } from '@nestjs/common';
import type { ApiErrorAction } from '@templateStorage/shared-types';

import { ErrorCode } from '../constants/error-codes';

export interface ServiceExceptionOptions {
  field?: string;
  retryable: boolean;
  action: ApiErrorAction;
  explain?: string;
  httpStatus?: HttpStatus;
}

/** Default HTTP status mapping per error code. */
const DEFAULT_STATUS: Record<ErrorCode, HttpStatus> = {
  [ErrorCode.TEMPLATE_NOT_FOUND]: HttpStatus.NOT_FOUND,
  [ErrorCode.TEMPLATE_ALREADY_EXISTS]: HttpStatus.CONFLICT,
  [ErrorCode.INVALID_FILE_TYPE]: HttpStatus.BAD_REQUEST,
  [ErrorCode.FILE_TOO_LARGE]: HttpStatus.PAYLOAD_TOO_LARGE,
  [ErrorCode.FILE_CORRUPTED]: HttpStatus.UNPROCESSABLE_ENTITY,
  [ErrorCode.INVALID_PLACEHOLDER_SYNTAX]: HttpStatus.UNPROCESSABLE_ENTITY,
  [ErrorCode.STORAGE_WRITE_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
  [ErrorCode.STORAGE_READ_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
  [ErrorCode.STORAGE_DELETE_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
  [ErrorCode.MISSING_REQUIRED_FIELD]: HttpStatus.BAD_REQUEST,
  [ErrorCode.GENERATE_FAILED]: HttpStatus.INTERNAL_SERVER_ERROR,
  [ErrorCode.VALIDATION_ERROR]: HttpStatus.BAD_REQUEST,
  [ErrorCode.UNKNOWN_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
};

/**
 * Application-level exception carrying a structured error code and metadata.
 * Caught by HttpExceptionFilter and serialized into the unified ApiError format.
 */
export class ServiceException extends HttpException {
  public readonly code: ErrorCode;
  public readonly field: string | undefined;
  public readonly retryable: boolean;
  public readonly action: ApiErrorAction;
  public readonly explain: string | undefined;

  constructor(code: ErrorCode, options: ServiceExceptionOptions) {
    const status = options.httpStatus ?? DEFAULT_STATUS[code] ?? HttpStatus.INTERNAL_SERVER_ERROR;
    super(code, status);
    this.code = code;
    this.field = options.field ?? undefined;
    this.retryable = options.retryable;
    this.action = options.action;
    this.explain = options.explain ?? undefined;
  }
}
