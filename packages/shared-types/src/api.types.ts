export type ApiErrorAction = 'retry' | 'fix_input' | 'ask_user' | 'fatal';

export interface ApiError {
  code: string;
  message: string;
  field?: string;
  retryable: boolean;
  action: ApiErrorAction;
  explain?: string;
}

export interface ApiWarning {
  code: string;
  message: string;
}
