import { Box, Typography, Button } from '@mui/material';
import { createBrowserRouter } from 'react-router';

import { AIAssistant } from './components/AIAssistant';
import { ApiDocsPage } from './components/ApiDocsPage';
import { Layout } from './components/Layout';
import { SettingsPage } from './components/SettingsPage';
import { TemplateDetails } from './components/TemplateDetails';
import { TemplatesList } from './components/TemplatesList';
import { UploadPage } from './components/UploadPage';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: 400,
        p: 4,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '5rem', fontWeight: 800, color: 'divider', mb: 1 }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Страница не найдена
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Запрашиваемая страница не существует.
      </Typography>
      <Button variant="contained" href="/" sx={{ borderRadius: 2 }}>
        ← На главную
      </Button>
    </Box>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: TemplatesList },
      { path: 'templates/:id', Component: TemplateDetails },
      { path: 'upload', Component: UploadPage },
      { path: 'ai-assistant', Component: AIAssistant },
      { path: 'api-docs', Component: ApiDocsPage },
      { path: 'settings', Component: SettingsPage },
      { path: '*', Component: NotFound },
    ],
  },
]);
