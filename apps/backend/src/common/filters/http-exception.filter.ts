import type { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Catch, HttpException, HttpStatus } from '@nestjs/common';
import type { ApiError } from '@templateStorage/shared-types';
import type { Response } from 'express';

import { ServiceException } from '../exceptions/service.exception';

/** Global filter that converts every exception into the unified ApiError JSON shape. */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const body: ApiError = this.buildBody(exception);
    const status = this.resolveStatus(exception);

    response.status(status).json(body);
  }

  private buildBody(exception: unknown): ApiError {
    if (exception instanceof ServiceException) {
      const body: ApiError = {
        code: exception.code,
        message: exception.code,
        retryable: exception.retryable,
        action: exception.action,
      };
      if (exception.field !== undefined) body.field = exception.field;
      if (exception.explain !== undefined) body.explain = exception.explain;
      return body;
    }

    if (exception instanceof HttpException) {
      const msg =
        typeof exception.getResponse() === 'string'
          ? (exception.getResponse() as string)
          : ((exception.getResponse() as Record<string, unknown>)['message'] ?? exception.message);
      return {
        code: 'UNKNOWN_ERROR',
        message: typeof msg === 'string' ? msg : String(msg),
        retryable: false,
        action: 'fatal',
      };
    }

    return {
      code: 'UNKNOWN_ERROR',
      message: 'Internal server error',
      retryable: false,
      action: 'fatal',
    };
  }

  private resolveStatus(exception: unknown): number {
    if (exception instanceof HttpException) {
      return exception.getStatus();
    }
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
