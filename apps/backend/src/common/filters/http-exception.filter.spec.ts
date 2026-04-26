import { HttpStatus, HttpException } from '@nestjs/common';

import { ErrorCode } from '../constants/error-codes';
import { ServiceException } from '../exceptions/service.exception';

import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExceptionFilter', () => {
  let filter: HttpExceptionFilter;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;
  let mockGetResponse: jest.Mock;
  let mockGetRequest: jest.Mock;

  beforeEach(() => {
    filter = new HttpExceptionFilter();
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    mockGetResponse = jest.fn().mockReturnValue({ status: mockStatus });
    mockGetRequest = jest.fn().mockReturnValue({ url: '/test', method: 'GET' });
  });

  function createHost() {
    return {
      switchToHttp: () => ({
        getResponse: mockGetResponse,
        getRequest: mockGetRequest,
      }),
    } as any;
  }

  it('serializes ServiceException into unified ApiError format', () => {
    const exception = new ServiceException(ErrorCode.TEMPLATE_NOT_FOUND, {
      retryable: false,
      action: 'fix_input',
      field: 'id',
      explain: 'Template ID does not exist',
    });

    filter.catch(exception, createHost());

    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.NOT_FOUND);
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'TEMPLATE_NOT_FOUND',
        message: 'TEMPLATE_NOT_FOUND',
        field: 'id',
        retryable: false,
        action: 'fix_input',
        explain: 'Template ID does not exist',
      }),
    );
  });

  it('maps generic HttpException to unified format', () => {
    const exception = new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    filter.catch(exception, createHost());

    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.FORBIDDEN);
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNKNOWN_ERROR',
        message: 'Forbidden',
        retryable: false,
        action: 'fatal',
      }),
    );
  });

  it('maps unknown non-HttpException errors', () => {
    const exception = new Error('Something broke');

    filter.catch(exception, createHost());

    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNKNOWN_ERROR',
        message: 'Internal server error',
        retryable: false,
        action: 'fatal',
      }),
    );
  });

  it('preserves httpStatus override in ServiceException', () => {
    const exception = new ServiceException(ErrorCode.VALIDATION_ERROR, {
      retryable: false,
      action: 'fix_input',
      httpStatus: HttpStatus.UNPROCESSABLE_ENTITY,
    });

    filter.catch(exception, createHost());

    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.UNPROCESSABLE_ENTITY);
  });
});
