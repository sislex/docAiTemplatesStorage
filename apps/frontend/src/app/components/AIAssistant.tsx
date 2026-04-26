import { AutoAwesome, SmartToy } from '@mui/icons-material';
import { Box, Typography, Paper, Button, Chip, Avatar } from '@mui/material';

import { useTheme } from './ThemeContext';

const FEATURES = {
  ru: [
    'Генерация документов по шаблону',
    'Автоматическое заполнение полей',
    'Интеллектуальный анализ структуры',
  ],
  en: [
    'Generate documents from templates',
    'Auto-fill template fields',
    'Intelligent structure analysis',
  ],
};

export function AIAssistant() {
  const { language } = useTheme();
  const features = FEATURES[language as 'ru' | 'en'] || FEATURES.ru;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 56px)',
        p: 4,
      }}
    >
      <Box sx={{ maxWidth: 400, textAlign: 'center', width: '100%' }}>
        {/* Icon */}
        <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
          <Paper
            elevation={0}
            sx={{
              width: 88,
              height: 88,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(20,184,166,0.12) 100%)',
              border: '1px solid',
              borderColor: 'divider',
              mx: 'auto',
            }}
          >
            <SmartToy sx={{ fontSize: 44, color: 'primary.main' }} />
          </Paper>
          <Chip
            label="Beta"
            color="secondary"
            size="small"
            sx={{
              position: 'absolute',
              top: -8,
              right: -8,
              height: 20,
              fontSize: '0.65rem',
              fontWeight: 700,
            }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          AI Assistant
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
          {language === 'ru'
            ? 'AI-ассистент для работы с шаблонами документов скоро будет доступен. Следите за обновлениями.'
            : 'AI assistant for document template management is coming soon. Stay tuned for updates.'}
        </Typography>

        {/* Features */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
          {features.map((feat, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 1.75,
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                opacity: 0.5,
                textAlign: 'left',
              }}
            >
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  bgcolor: 'primary.light',
                  color: 'primary.dark',
                  flexShrink: 0,
                }}
              >
                <AutoAwesome sx={{ fontSize: 14 }} />
              </Avatar>
              <Typography variant="body2">{feat}</Typography>
            </Paper>
          ))}
        </Box>

        {/* CTA */}
        <Button
          variant="outlined"
          disabled
          startIcon={<SmartToy fontSize="small" />}
          sx={{ borderRadius: 2, opacity: 0.5 }}
        >
          {language === 'ru' ? 'Скоро доступно' : 'Coming soon'}
        </Button>
      </Box>
    </Box>
  );
}
