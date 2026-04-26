import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

import { useTheme } from './ThemeContext';

export const DRAWER_WIDTH = 240;

export function MuiThemeWrapper({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: '#4f46e5',
            light: '#818cf8',
            dark: '#3730a3',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#14b8a6',
            light: '#5eead4',
            dark: '#0f766e',
            contrastText: '#ffffff',
          },
          error: { main: '#ef4444' },
          warning: { main: '#f59e0b' },
          success: { main: '#10b981' },
          background: {
            default: isDark ? '#030712' : '#f9fafb',
            paper: isDark ? '#111827' : '#ffffff',
          },
          divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          text: {
            primary: isDark ? '#f9fafb' : '#111827',
            secondary: isDark ? '#9ca3af' : '#6b7280',
          },
        },
        shape: { borderRadius: 10 },
        typography: {
          fontFamily: '"Roboto", "Inter", -apple-system, sans-serif',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none' },
                '&:active': { boxShadow: 'none' },
              },
              sizeSmall: { fontSize: '0.75rem', padding: '4px 12px' },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: { borderRadius: 8 },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: { backgroundImage: 'none', boxShadow: 'none' },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: { backgroundImage: 'none' },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: { backgroundImage: 'none' },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                boxShadow: 'none',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                minWidth: 'auto',
                padding: '10px 16px',
                fontSize: '0.875rem',
              },
            },
          },
          MuiTabs: {
            styleOverrides: {
              indicator: { height: 2 },
            },
          },
          MuiToggleButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontSize: '0.75rem',
                padding: '4px 12px',
                borderRadius: 6,
              },
            },
          },
          MuiToggleButtonGroup: {
            styleOverrides: {
              root: { gap: 2 },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: { height: 22, fontSize: '0.7rem', fontWeight: 500 },
              label: { paddingLeft: 8, paddingRight: 8 },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                '&.Mui-selected': {
                  backgroundColor: '#4f46e5',
                  color: '#ffffff',
                  '& .MuiListItemIcon-root': { color: '#ffffff' },
                  '&:hover': { backgroundColor: '#4338ca' },
                },
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: { fontSize: '0.8125rem', padding: '10px 16px' },
              head: { fontWeight: 600, fontSize: '0.75rem' },
            },
          },
          MuiTableRow: {
            styleOverrides: {
              root: {
                '&:last-child td': { borderBottom: 0 },
              },
            },
          },
          MuiStepLabel: {
            styleOverrides: {
              label: { fontSize: '0.75rem' },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: { '& .MuiInputBase-root': { fontSize: '0.875rem' } },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: { borderRadius: 16 },
            },
          },
          MuiAlert: {
            styleOverrides: {
              root: { borderRadius: 10, fontSize: '0.875rem' },
            },
          },
          MuiLinearProgress: {
            styleOverrides: {
              root: { borderRadius: 4, height: 6 },
            },
          },
          MuiSkeleton: {
            styleOverrides: {
              root: { borderRadius: 8 },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: { fontSize: '0.75rem', borderRadius: 6 },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              },
            },
          },
        },
      }),
    [isDark],
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
