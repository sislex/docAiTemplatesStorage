import { Alert, AlertTitle, Button } from '@mui/material';
import { RefreshCw } from 'lucide-react';

import type { ApiErrorResponseDto } from './types';

interface ErrorBannerProps {
  error: ApiErrorResponseDto | string;
  onRetry?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export function ErrorBanner({ error, onRetry, onDismiss, className = '' }: ErrorBannerProps) {
  const isDto = typeof error === 'object';
  const message = isDto ? (error as ApiErrorResponseDto).message : (error as string);
  const retryable = isDto ? (error as ApiErrorResponseDto).retryable : !!onRetry;
  const explain = isDto ? (error as ApiErrorResponseDto).explain : undefined;

  return (
    <Alert
      severity="error"
      onClose={onDismiss}
      className={className}
      action={
        retryable && onRetry ? (
          <Button
            color="inherit"
            size="small"
            onClick={onRetry}
            startIcon={<RefreshCw size={12} />}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Повторить
          </Button>
        ) : undefined
      }
    >
      {explain ? (
        <>
          <AlertTitle>{message}</AlertTitle>
          {explain}
        </>
      ) : (
        message
      )}
    </Alert>
  );
}
