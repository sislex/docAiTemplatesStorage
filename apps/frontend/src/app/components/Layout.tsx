import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from '@mui/material';
import {
  FileText,
  Upload,
  Bot,
  BookOpen,
  Settings,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Monitor,
  Globe,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';

import { DRAWER_WIDTH } from './MuiThemeWrapper';
import { useTheme } from './ThemeContext';

const NAV_ITEMS = [
  { to: '/', label: 'Шаблоны', labelEn: 'Templates', icon: FileText, exact: true },
  { to: '/upload', label: 'Загрузка', labelEn: 'Upload', icon: Upload },
  { to: '/ai-assistant', label: 'AI-Ассистент', labelEn: 'AI Assistant', icon: Bot, badge: 'Beta' },
  { to: '/api-docs', label: 'API Docs', labelEn: 'API Docs', icon: BookOpen },
  { to: '/settings', label: 'Настройки', labelEn: 'Settings', icon: Settings },
];

function HealthIndicator() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: 'secondary.main',
          boxShadow: '0 0 0 3px rgba(20,184,166,0.2)',
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
        }}
      />
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Backend онлайн
      </Typography>
    </Box>
  );
}

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { theme, setTheme, language, setLanguage } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const themeIcons: Record<string, React.ReactNode> = {
    light: <Sun size={16} />,
    dark: <Moon size={16} />,
    auto: <Monitor size={16} />,
  };

  const themeLabels: Record<string, string> = {
    light: 'Светлая',
    dark: 'Тёмная',
    auto: 'Авто',
  };

  function cycleTheme() {
    const order = ['auto', 'light', 'dark'] as const;
    const idx = order.indexOf(theme as 'auto' | 'light' | 'dark');
    setTheme(order[(idx + 1) % order.length]);
  }

  function handleSearch() {
    if (search.trim()) {
      navigate(`/?q=${encodeURIComponent(search.trim())}`);
      setSidebarOpen(false);
    }
  }

  function isActive(to: string, exact?: boolean): boolean {
    if (exact) return location.pathname === to;
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  }

  const SidebarContent = () => (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: 'background.paper' }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2.5,
          py: 2.5,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: 2,
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <FileText size={17} color="white" />
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            DocAI
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ lineHeight: 1.2, fontSize: '0.65rem' }}
          >
            Templates Library
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        <IconButton
          size="small"
          sx={{ display: { lg: 'none' } }}
          onClick={() => setSidebarOpen(false)}
        >
          <X size={18} />
        </IconButton>
      </Box>

      {/* Nav */}
      <List sx={{ flex: 1, px: 1, py: 1.5, gap: 0.5, display: 'flex', flexDirection: 'column' }}>
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.to, item.exact);
          return (
            <ListItem key={item.to} disablePadding>
              <ListItemButton
                selected={active}
                onClick={() => {
                  navigate(item.to);
                  setSidebarOpen(false);
                }}
                sx={{ borderRadius: 2, py: 1.125 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: active ? 'inherit' : 'text.secondary',
                  }}
                >
                  <item.icon size={18} />
                </ListItemIcon>
                <ListItemText
                  primary={language === 'ru' ? item.label : item.labelEn}
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontWeight: active ? 600 : 400,
                  }}
                />
                {item.badge && (
                  <Chip
                    label={item.badge}
                    color="secondary"
                    size="small"
                    sx={{ height: 18, fontSize: '0.6rem', ml: 1 }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* User */}
      <Divider />
      <Box sx={{ px: 2.5, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              bgcolor: 'primary.light',
              color: 'primary.dark',
              fontSize: '0.7rem',
            }}
          >
            <User size={14} />
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="caption" sx={{ display: 'block', fontWeight: 600 }} noWrap>
              Аналитик
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: '0.65rem' }}
              noWrap
            >
              analyst@company.ru
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {/* Desktop Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'flex' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            borderRight: 1,
            borderColor: 'divider',
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Mobile Temporary Drawer */}
      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { lg: 'none' },
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Main Column */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        {/* Top AppBar */}
        <AppBar
          position="static"
          color="inherit"
          elevation={0}
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
          }}
        >
          <Toolbar
            sx={{
              gap: 1.5,
              minHeight: '56px !important',
              px: { xs: 1.5, sm: 2 },
            }}
          >
            <IconButton
              edge="start"
              size="small"
              sx={{ display: { lg: 'none' } }}
              onClick={() => setSidebarOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu size={20} />
            </IconButton>

            {/* Desktop Search */}
            <TextField
              size="small"
              placeholder={language === 'ru' ? 'Поиск шаблонов...' : 'Search templates...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={14} />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: 280,
                display: { xs: 'none', md: 'block' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  bgcolor: 'action.hover',
                  '& fieldset': { borderColor: 'divider' },
                },
              }}
            />

            <Box sx={{ flex: 1 }} />

            <HealthIndicator />

            {/* Language toggle */}
            <ToggleButtonGroup
              value={language}
              exclusive
              onChange={(_, v) => v && setLanguage(v as 'ru' | 'en')}
              size="small"
              sx={{ height: 32 }}
            >
              <ToggleButton value="ru">
                <Globe size={12} style={{ marginRight: 4 }} />
                RU
              </ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>

            {/* Theme toggle */}
            <Tooltip title={`Тема: ${themeLabels[theme]}`}>
              <IconButton
                size="small"
                onClick={cycleTheme}
                aria-label={`Тема: ${theme}`}
                sx={{ width: 32, height: 32 }}
              >
                {themeIcons[theme]}
              </IconButton>
            </Tooltip>

            {/* User avatar */}
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'primary.main',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              А
            </Avatar>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box component="main" sx={{ flexGrow: 1, overflow: 'auto', bgcolor: 'background.default' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
