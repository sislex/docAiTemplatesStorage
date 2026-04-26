import {
  Search,
  GridView,
  FormatListBulleted,
  Add,
  Visibility,
  Edit,
  Download,
  Delete,
  FolderOpen,
  MoreVert,
  AccessTime,
  ArrowUpward,
  ArrowDownward,
  SwapVert,
  FilterList,
} from '@mui/icons-material';
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  CardActions,
  Chip,
  Divider,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  Skeleton,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  ListItemIcon,
  Fade,
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router';

import { deleteTemplateById, fetchTemplates } from '../api/templates';

import { ErrorBanner } from './ErrorBanner';
import { useTheme } from './ThemeContext';
import type { ExternalTemplateMetadata } from './types';

type ViewMode = 'cards' | 'table';
type SortField = 'name' | 'version' | 'updatedAt' | 'createdAt';
type SortDir = 'asc' | 'desc';

const TAG_COLORS: Record<
  string,
  'success' | 'secondary' | 'primary' | 'warning' | 'error' | 'default'
> = {
  finance: 'success',
  legal: 'secondary',
  hr: 'primary',
  invoice: 'warning',
  contract: 'error',
  b2b: 'secondary',
  юрлица: 'primary',
  gdpr: 'warning',
  privacy: 'default',
  nda: 'error',
  confidential: 'default',
  act: 'success',
  completion: 'success',
  offer: 'primary',
  employment: 'primary',
};

function TagChip({ tag }: { tag: string }) {
  return (
    <Chip
      label={tag}
      size="small"
      color={TAG_COLORS[tag] || 'default'}
      variant="outlined"
      sx={{ height: 20, fontSize: '0.68rem' }}
    />
  );
}

function SkeletonCard() {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Skeleton variant="text" width="65%" height={22} sx={{ mb: 0.5 }} />
        <Skeleton variant="text" width="40%" height={16} sx={{ mb: 1.5 }} />
        <Skeleton variant="text" width="90%" height={14} />
        <Skeleton variant="text" width="75%" height={14} sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Skeleton variant="rounded" width={48} height={20} sx={{ borderRadius: 10 }} />
          <Skeleton variant="rounded" width={40} height={20} sx={{ borderRadius: 10 }} />
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
        <Skeleton variant="text" width={80} height={16} />
        <Skeleton variant="rounded" width={56} height={28} />
      </CardActions>
    </Card>
  );
}

function TemplateCard({
  template,
  onDelete,
  language,
}: {
  template: ExternalTemplateMetadata;
  onDelete: (id: string) => void;
  language: string;
}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const relTime = formatDistanceToNow(new Date(template.updatedAt), {
    addSuffix: true,
    locale: language === 'ru' ? ru : undefined,
  });

  const menuItems = [
    {
      icon: <Visibility fontSize="small" />,
      label: language === 'ru' ? 'Просмотр' : 'View',
      action: () => navigate(`/templates/${template.id}`),
      danger: false,
    },
    {
      icon: <Edit fontSize="small" />,
      label: language === 'ru' ? 'Редактировать' : 'Edit metadata',
      action: () => navigate(`/templates/${template.id}?tab=metadata`),
      danger: false,
    },
    {
      icon: <Download fontSize="small" />,
      label: language === 'ru' ? 'Скачать' : 'Download',
      action: () => window.open(template.downloadUrl, '_blank'),
      danger: false,
    },
    {
      icon: <Delete fontSize="small" />,
      label: language === 'ru' ? 'Удалить' : 'Delete',
      action: () => {
        setAnchorEl(null);
        onDelete(template.id);
      },
      danger: true,
    },
  ];

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'box-shadow 0.15s, border-color 0.15s',
        '&:hover': {
          boxShadow: 3,
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent sx={{ flex: 1, pb: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 0.5,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              flex: 1,
              mr: 1,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.4,
            }}
          >
            {template.name}
          </Typography>
          <IconButton
            size="small"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            sx={{ mt: -0.5, mr: -1, flexShrink: 0 }}
          >
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>

        <Typography variant="caption" color="primary.main" display="block" sx={{ mb: 1 }}>
          v{template.version} · {template.format.toUpperCase()}
          {template.schema && (
            <Typography component="span" variant="caption" color="text.secondary">
              {' '}
              · {template.schema.totalPlaceholders} {language === 'ru' ? 'полей' : 'fields'}
            </Typography>
          )}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: '0.775rem',
            lineHeight: 1.5,
          }}
        >
          {template.description || (language === 'ru' ? 'Нет описания' : 'No description')}
        </Typography>

        {template.tags && template.tags.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {template.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </Box>
        )}
      </CardContent>

      <Divider />

      <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <AccessTime sx={{ fontSize: 13 }} />
          {relTime}
        </Typography>
        <Button size="small" color="primary" onClick={() => navigate(`/templates/${template.id}`)}>
          {language === 'ru' ? 'Открыть' : 'Open'}
        </Button>
      </CardActions>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        TransitionComponent={Fade}
        PaperProps={{ sx: { minWidth: 176, borderRadius: 2, border: 1, borderColor: 'divider' } }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => {
              setAnchorEl(null);
              item.action();
            }}
            sx={{
              color: item.danger ? 'error.main' : 'text.primary',
              fontSize: '0.875rem',
              gap: 1.5,
              py: 1,
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 'auto' }}>{item.icon}</ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Card>
  );
}

export function TemplatesList() {
  const [searchParams] = useSearchParams();
  const [templates, setTemplates] = useState<ExternalTemplateMetadata[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTick, setRefreshTick] = useState(0);
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<ExternalTemplateMetadata | null>(null);
  const [sortField, setSortField] = useState<SortField>('updatedAt');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const { language } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setSearch(searchParams.get('q') || '');
  }, [searchParams]);

  const allTags = useMemo(
    () => Array.from(new Set(templates.flatMap((t) => t.tags || []))),
    [templates],
  );

  useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTemplates(search.trim() || undefined);
        if (!cancelled) setTemplates(data);
      } catch (e) {
        if (!cancelled) {
          const message = e instanceof Error ? e.message : 'Failed to load templates';
          setError(message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [search, refreshTick]);

  const filtered = useMemo(() => {
    let list = templates.filter((t) => {
      const q = search.toLowerCase();
      if (q && !t.name.toLowerCase().includes(q) && !(t.tags || []).some((tag) => tag.includes(q)))
        return false;
      if (selectedTags.length > 0 && !selectedTags.every((tag) => (t.tags || []).includes(tag)))
        return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      const av = a[sortField as keyof ExternalTemplateMetadata] as string;
      const bv = b[sortField as keyof ExternalTemplateMetadata] as string;
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return list;
  }, [templates, search, selectedTags, sortField, sortDir]);

  function handleDelete(id: string) {
    const tpl = templates.find((t) => t.id === id);
    if (tpl) setDeleteTarget(tpl);
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    try {
      await deleteTemplateById(deleteTarget.id);
      setTemplates((prev) => prev.filter((t) => t.id !== deleteTarget.id));
      setDeleteTarget(null);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Delete failed';
      setError(message);
    }
  }

  function handleSort(field: SortField) {
    if (sortField === field) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortField(field);
      setSortDir('asc');
    }
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field)
      return <SwapVert sx={{ fontSize: 14, color: 'text.disabled', ml: 0.5 }} />;
    return sortDir === 'asc' ? (
      <ArrowUpward sx={{ fontSize: 14, color: 'primary.main', ml: 0.5 }} />
    ) : (
      <ArrowDownward sx={{ fontSize: 14, color: 'primary.main', ml: 0.5 }} />
    );
  }

  function handleRetry() {
    setRefreshTick((prev) => prev + 1);
  }

  const tableColumns = [
    { field: 'name' as SortField, label: language === 'ru' ? 'Название' : 'Name' },
    { field: 'version' as SortField, label: language === 'ru' ? 'Версия' : 'Version' },
    { field: null, label: language === 'ru' ? 'Теги' : 'Tags' },
    { field: 'createdAt' as SortField, label: language === 'ru' ? 'Создан' : 'Created' },
    { field: 'updatedAt' as SortField, label: language === 'ru' ? 'Обновлён' : 'Updated' },
    { field: null, label: language === 'ru' ? 'Действия' : 'Actions' },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* Page Header */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {language === 'ru' ? 'Шаблоны' : 'Templates'}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {templates.length}{' '}
            {language === 'ru' ? 'шаблонов в библиотеке' : 'templates in library'}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => navigate('/upload')}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Загрузить шаблон' : 'Upload template'}
        </Button>
      </Box>

      {/* Filters */}
      <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
          <TextField
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              language === 'ru' ? 'Поиск по названию или тегу...' : 'Search by name or tag...'
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: 1,
              minWidth: 200,
              '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: 'background.paper' },
            }}
          />

          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={(_, v) => v && setViewMode(v)}
            size="small"
            sx={{ height: 40 }}
          >
            <ToggleButton value="cards">
              <GridView fontSize="small" sx={{ mr: 0.75 }} />
              {language === 'ru' ? 'Карточки' : 'Cards'}
            </ToggleButton>
            <ToggleButton value="table">
              <FormatListBulleted fontSize="small" sx={{ mr: 0.75 }} />
              {language === 'ru' ? 'Таблица' : 'Table'}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {allTags.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.75 }}>
            <FilterList sx={{ fontSize: 16, color: 'text.disabled' }} />
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                onClick={() =>
                  setSelectedTags((prev) =>
                    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
                  )
                }
                color={selectedTags.includes(tag) ? 'primary' : 'default'}
                variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
                sx={{ cursor: 'pointer', height: 24 }}
              />
            ))}
            {selectedTags.length > 0 && (
              <Button
                size="small"
                color="primary"
                onClick={() => setSelectedTags([])}
                sx={{ fontSize: '0.75rem', minWidth: 'auto', px: 1 }}
              >
                {language === 'ru' ? 'Сбросить' : 'Clear'}
              </Button>
            )}
          </Box>
        )}
      </Box>

      {error && (
        <Box sx={{ mb: 2 }}>
          <ErrorBanner error={error} onRetry={handleRetry} onDismiss={() => setError(null)} />
        </Box>
      )}

      {loading && <LinearProgress color="primary" sx={{ mb: 2, borderRadius: 1 }} />}

      {/* Cards View */}
      {viewMode === 'cards' && (
        <>
          {loading ? (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2,1fr)',
                  lg: 'repeat(3,1fr)',
                  xl: 'repeat(4,1fr)',
                },
                gap: 2,
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </Box>
          ) : filtered.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 12,
              }}
            >
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: 'action.hover',
                  color: 'text.disabled',
                  mb: 2,
                }}
              >
                <FolderOpen />
              </Avatar>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {search || selectedTags.length > 0
                  ? language === 'ru'
                    ? 'Шаблоны не найдены'
                    : 'No templates found'
                  : language === 'ru'
                    ? 'Нет загруженных шаблонов'
                    : 'No templates yet'}
              </Typography>
              <Typography
                variant="body2"
                color="text.disabled"
                sx={{ mb: 3, textAlign: 'center', maxWidth: 300 }}
              >
                {search || selectedTags.length > 0
                  ? language === 'ru'
                    ? 'Попробуйте изменить параметры поиска'
                    : 'Try changing your search criteria'
                  : language === 'ru'
                    ? 'Загрузите первый шаблон, чтобы начать работу'
                    : 'Upload your first template to get started'}
              </Typography>
              {!search && selectedTags.length === 0 && (
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => navigate('/upload')}
                  sx={{ borderRadius: 2 }}
                >
                  {language === 'ru' ? 'Загрузить первый шаблон' : 'Upload first template'}
                </Button>
              )}
            </Box>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2,1fr)',
                  lg: 'repeat(3,1fr)',
                  xl: 'repeat(4,1fr)',
                },
                gap: 2,
              }}
            >
              {filtered.map((tpl) => (
                <TemplateCard
                  key={tpl.id}
                  template={tpl}
                  onDelete={handleDelete}
                  language={language}
                />
              ))}
            </Box>
          )}
        </>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
        >
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'action.hover' }}>
                {tableColumns.map((col, i) => (
                  <TableCell
                    key={i}
                    onClick={col.field ? () => handleSort(col.field as SortField) : undefined}
                    sx={{
                      cursor: col.field ? 'pointer' : 'default',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {col.label}
                      {col.field && <SortIcon field={col.field as SortField} />}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    {Array.from({ length: 6 }).map((_, j) => (
                      <TableCell key={j}>
                        <Skeleton variant="text" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} sx={{ textAlign: 'center', py: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <FolderOpen sx={{ color: 'text.disabled', fontSize: 28 }} />
                      <Typography variant="body2" color="text.disabled">
                        {language === 'ru' ? 'Шаблоны не найдены' : 'No templates found'}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((tpl) => (
                  <TableRow key={tpl.id} hover>
                    <TableCell>
                      <Typography
                        component={Link}
                        to={`/templates/${tpl.id}`}
                        variant="body2"
                        color="primary"
                        sx={{
                          textDecoration: 'none',
                          fontWeight: 500,
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        {tpl.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={`v${tpl.version}`}
                        size="small"
                        variant="outlined"
                        sx={{ height: 20, fontFamily: 'monospace', fontSize: '0.7rem' }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {(tpl.tags || []).map((tag) => (
                          <TagChip key={tag} tag={tag} />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>
                      {new Date(tpl.createdAt).toLocaleDateString(
                        language === 'ru' ? 'ru-RU' : 'en-US',
                      )}
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>
                      {formatDistanceToNow(new Date(tpl.updatedAt), {
                        addSuffix: true,
                        locale: language === 'ru' ? ru : undefined,
                      })}
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <Tooltip title={language === 'ru' ? 'Просмотр' : 'View'}>
                          <IconButton size="small" onClick={() => navigate(`/templates/${tpl.id}`)}>
                            <Visibility fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={language === 'ru' ? 'Редактировать' : 'Edit'}>
                          <IconButton
                            size="small"
                            onClick={() => navigate(`/templates/${tpl.id}?tab=metadata`)}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={language === 'ru' ? 'Скачать' : 'Download'}>
                          <IconButton
                            size="small"
                            onClick={() => window.open(tpl.downloadUrl, '_blank')}
                          >
                            <Download fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={language === 'ru' ? 'Удалить' : 'Delete'}>
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleDelete(tpl.id)}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {filtered.length > 0 && !loading && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5,
                borderTop: 1,
                borderColor: 'divider',
                bgcolor: 'action.hover',
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {language === 'ru'
                  ? `Показано ${filtered.length} из ${templates.length}`
                  : `Showing ${filtered.length} of ${templates.length}`}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                <Typography variant="caption" color="text.secondary">
                  {language === 'ru' ? 'На странице:' : 'Per page:'}
                </Typography>
                {[25, 50, 100].map((n) => (
                  <Button
                    key={n}
                    size="small"
                    variant="text"
                    sx={{ minWidth: 32, px: 1, py: 0.25 }}
                  >
                    {n}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
        </TableContainer>
      )}

      {/* Delete Dialog */}
      <Dialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ bgcolor: 'error.light', color: 'error.main', width: 40, height: 40 }}>
            <Delete />
          </Avatar>
          {language === 'ru' ? 'Удалить шаблон' : 'Delete template'}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            {language === 'ru' ? (
              <>
                Вы уверены, что хотите удалить <strong>«{deleteTarget?.name}»</strong>? Это действие
                необратимо.
              </>
            ) : (
              <>
                Are you sure you want to delete <strong>"{deleteTarget?.name}"</strong>? This cannot
                be undone.
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button onClick={() => setDeleteTarget(null)} variant="outlined">
            {language === 'ru' ? 'Отмена' : 'Cancel'}
          </Button>
          <Button onClick={confirmDelete} variant="contained" color="error">
            {language === 'ru' ? 'Удалить' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
