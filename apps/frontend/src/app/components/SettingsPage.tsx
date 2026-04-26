import {
  LightMode,
  DarkMode,
  BrightnessAuto,
  Language,
  Info,
  OpenInNew,
  Palette,
  Storage,
} from '@mui/icons-material';
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
  List,
  ListItem,
  ListItemText,
  Link,
  Chip,
} from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

import { API_BASE_URL, API_DOCS_URL } from '../api/config';

import { useTheme } from './ThemeContext';
import type { Theme, Language as LanguageType } from './types';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

function Section({ title, icon, children }: SectionProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 3,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 3,
          py: 2,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'action.hover',
        }}
      >
        <Box sx={{ color: 'primary.main', display: 'flex' }}>{icon}</Box>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'text.secondary',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ px: 3, py: 3 }}>{children}</Box>
    </Paper>
  );
}

export function SettingsPage() {
  const { theme, setTheme, language, setLanguage } = useTheme();

  const themeOptions: {
    value: Theme;
    label: string;
    icon: ReactNode;
    desc: string;
  }[] = [
    {
      value: 'auto',
      label: 'Auto',
      icon: <BrightnessAuto fontSize="small" />,
      desc: language === 'ru' ? 'Системные настройки' : 'System preferences',
    },
    {
      value: 'light',
      label: 'Light',
      icon: <LightMode fontSize="small" />,
      desc: language === 'ru' ? 'Всегда светлая' : 'Always light',
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <DarkMode fontSize="small" />,
      desc: language === 'ru' ? 'Всегда тёмная' : 'Always dark',
    },
  ];

  const paletteColors = [
    {
      name: 'Primary',
      hex: '#4f46e5',
      label: 'Indigo 600',
      desc: 'Primary',
    },
    {
      name: 'Primary Light',
      hex: '#818cf8',
      label: 'Indigo 400',
      desc: 'Hover/accent',
    },
    {
      name: 'Secondary',
      hex: '#14b8a6',
      label: 'Teal 500',
      desc: 'Secondary',
    },
    {
      name: 'Secondary Light',
      hex: '#5eead4',
      label: 'Teal 300',
      desc: 'Accent',
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 640 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {language === 'ru' ? 'Настройки' : 'Settings'}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {language === 'ru'
            ? 'Персональные настройки интерфейса'
            : 'Personal interface preferences'}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        {/* Appearance */}
        <Section
          title={language === 'ru' ? 'Оформление' : 'Appearance'}
          icon={<Palette fontSize="small" />}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {/* Theme */}
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1.5 }}>
                {language === 'ru' ? 'Тема' : 'Theme'}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  flexWrap: 'wrap',
                }}
              >
                {themeOptions.map((opt) => (
                  <Paper
                    key={opt.value}
                    elevation={0}
                    onClick={() => setTheme(opt.value)}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                      px: 2.5,
                      py: 2,
                      border: 2,
                      borderColor: theme === opt.value ? 'primary.main' : 'divider',
                      borderRadius: 2.5,
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, background-color 0.2s',
                      bgcolor: theme === opt.value ? 'primary.light' : 'transparent',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'action.hover',
                      },
                      minWidth: 90,
                    }}
                    aria-pressed={theme === opt.value}
                  >
                    <Box
                      sx={{
                        color: theme === opt.value ? 'primary.main' : 'text.secondary',
                      }}
                    >
                      {opt.icon}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: theme === opt.value ? 700 : 500,
                        color: theme === opt.value ? 'primary.main' : 'text.primary',
                      }}
                    >
                      {opt.label}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontSize: '0.65rem',
                        textAlign: 'center',
                      }}
                    >
                      {opt.desc}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>

            <Divider />

            {/* Color palette */}
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
                {language === 'ru' ? 'Цветовая палитра' : 'Color palette'}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                {paletteColors.map((c) => (
                  <Box
                    key={c.name}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 1.5,
                        bgcolor: c.hex,
                        flexShrink: 0,
                        boxShadow: 1,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {c.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: '0.65rem' }}
                      >
                        {c.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Section>

        {/* Language */}
        <Section
          title={language === 'ru' ? 'Язык' : 'Language'}
          icon={<Language fontSize="small" />}
        >
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
              {language === 'ru' ? 'Язык интерфейса' : 'Interface language'}
            </Typography>
            <ToggleButtonGroup
              value={language}
              exclusive
              onChange={(_, v) => v && setLanguage(v as LanguageType)}
              size="small"
            >
              <ToggleButton value="ru" sx={{ gap: 1, px: 2 }}>
                <span>🇷🇺</span> Русский
              </ToggleButton>
              <ToggleButton value="en" sx={{ gap: 1, px: 2 }}>
                <span>🇬🇧</span> English
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Section>

        {/* About */}
        <Section
          title={language === 'ru' ? 'О приложении' : 'About'}
          icon={<Info fontSize="small" />}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  bgcolor: 'primary.light',
                  color: 'primary.dark',
                  borderRadius: 2,
                }}
              >
                <Info />
              </Avatar>
              <Box>
                <Typography variant="subtitle2">DocAI Templates Library</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  {language === 'ru'
                    ? 'Централизованное хранилище DOCX-шаблонов с автоматическим извлечением схемы'
                    : 'Centralized DOCX template library with automatic schema extraction'}
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box
              component="dl"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '8px 24px',
                m: 0,
              }}
            >
              {[
                {
                  label: language === 'ru' ? 'Версия' : 'Version',
                  value: '1.0.0',
                },
                {
                  label: 'Backend API',
                  value: API_BASE_URL,
                },
                {
                  label: language === 'ru' ? 'Стек' : 'Stack',
                  value: 'React + TypeScript + MUI',
                },
              ].map(({ label, value }) => (
                <React.Fragment key={label}>
                  <Typography component="dt" variant="caption" color="text.secondary">
                    {label}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="caption"
                    sx={{
                      m: 0,
                      fontWeight: 500,
                      fontFamily:
                        label === 'Backend API' || label === 'Version' || label === 'Версия'
                          ? 'monospace'
                          : 'inherit',
                    }}
                  >
                    {value}
                  </Typography>
                </React.Fragment>
              ))}
            </Box>

            <Link
              href={API_DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: '0.8125rem',
                color: 'primary.main',
              }}
            >
              <OpenInNew sx={{ fontSize: 14 }} />
              {language === 'ru' ? 'Открыть API документацию' : 'Open API documentation'}
            </Link>
          </Box>
        </Section>

        {/* Storage */}
        <Section
          title={language === 'ru' ? 'Хранение данных' : 'Data storage'}
          icon={<Storage fontSize="small" />}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
            {language === 'ru'
              ? 'Настройки темы и языка сохраняются в localStorage вашего браузера.'
              : "Theme and language preferences are stored in your browser's localStorage."}
          </Typography>
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={() => {
              localStorage.removeItem('docai-theme');
              localStorage.removeItem('docai-language');
              window.location.reload();
            }}
            sx={{ borderRadius: 2 }}
          >
            {language === 'ru' ? 'Сбросить все настройки' : 'Reset all settings'}
          </Button>
        </Section>
      </Box>
    </Box>
  );
}
