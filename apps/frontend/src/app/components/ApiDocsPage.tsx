import { OpenInNew, MenuBook, ErrorOutline } from '@mui/icons-material';
import { Box, Typography, Button, Paper, Skeleton, Avatar } from '@mui/material';
import { useState } from 'react';

import { API_BASE_URL, API_DOCS_URL } from '../api/config';

import { useTheme } from './ThemeContext';

export function ApiDocsPage() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { language } = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 56px)' }}>
      {/* Header */}
      <Paper
        elevation={0}
        square
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 3,
          py: 1.5,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          flexShrink: 0,
        }}
      >
        <Avatar
          sx={{
            width: 34,
            height: 34,
            bgcolor: 'primary.light',
            color: 'primary.dark',
            borderRadius: 1.5,
          }}
        >
          <MenuBook sx={{ fontSize: 18 }} />
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" sx={{ lineHeight: 1.3 }}>
            API Documentation
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {API_DOCS_URL}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          href={API_DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNew fontSize="small" />}
          sx={{ borderRadius: 2, flexShrink: 0 }}
        >
          {language === 'ru' ? 'Открыть в новой вкладке' : 'Open in new tab'}
        </Button>
      </Paper>

      {/* Loading skeleton */}
      {!loaded && !error && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            top: 'calc(56px + 58px)',
            zIndex: 10,
            bgcolor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 640, px: 3 }}>
            <Skeleton variant="text" width="35%" height={36} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="60%" height={20} sx={{ mb: 3 }} />
            <Skeleton variant="rounded" width="100%" height={1} sx={{ mb: 3 }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Skeleton variant="rounded" width={64} height={32} sx={{ flexShrink: 0 }} />
                <Box sx={{ flex: 1 }}>
                  <Skeleton variant="text" width="70%" height={18} />
                  <Skeleton variant="text" width="45%" height={14} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Error state */}
      {error && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            p: 4,
          }}
        >
          <Avatar
            sx={{
              width: 64,
              height: 64,
              bgcolor: 'error.light',
              color: 'error.main',
              mb: 2,
            }}
          >
            <ErrorOutline sx={{ fontSize: 32 }} />
          </Avatar>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            {language === 'ru' ? 'API Docs недоступны' : 'API Docs unavailable'}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, textAlign: 'center', maxWidth: 340 }}
          >
            {language === 'ru'
              ? `Не удалось загрузить Swagger UI. Убедитесь, что backend запущен на ${API_BASE_URL}.`
              : `Could not load Swagger UI. Make sure the backend is running on ${API_BASE_URL}.`}
          </Typography>
          <Button
            variant="contained"
            href={API_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew fontSize="small" />}
            sx={{ borderRadius: 2 }}
          >
            {language === 'ru' ? 'Открыть в новой вкладке' : 'Open in new tab'}
          </Button>
        </Box>
      )}

      {/* iFrame */}
      <Box
        component="iframe"
        src={API_DOCS_URL}
        title="Swagger API Documentation"
        sx={{
          flex: 1,
          width: '100%',
          border: 'none',
          display: error ? 'none' : 'block',
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </Box>
  );
}
