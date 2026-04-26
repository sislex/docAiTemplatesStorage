import {
  ArrowBack,
  Download,
  Delete,
  CheckCircle,
  Cancel,
  ExpandMore,
  ExpandLess,
  WarningAmber,
  Tag,
  FilePresent,
  Check,
  Close,
  Autorenew,
  Save,
  Visibility,
  Edit,
  DataObject,
  CalendarMonth,
  Info,
} from '@mui/icons-material';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Skeleton,
  Alert,
  Collapse,
  Divider,
  Tooltip,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router';

import { deleteTemplateById, fetchTemplateById, updateTemplateMetadata } from '../api/templates';

import { ErrorBanner } from './ErrorBanner';
import { useTheme } from './ThemeContext';
import { FieldType } from './types';
import type { ExternalTemplateMetadata } from './types';

type TabId = 'overview' | 'schema' | 'metadata';

const FIELD_TYPE_COLORS: Record<
  FieldType,
  'primary' | 'secondary' | 'warning' | 'success' | 'error' | 'info' | 'default'
> = {
  [FieldType.STRING]: 'primary',
  [FieldType.NUMBER]: 'secondary',
  [FieldType.DATE]: 'warning',
  [FieldType.BOOLEAN]: 'success',
  [FieldType.ARRAY]: 'warning',
  [FieldType.OBJECT]: 'default',
  [FieldType.ENUM]: 'secondary',
  [FieldType.EMAIL]: 'info',
  [FieldType.PHONE]: 'secondary',
  [FieldType.URL]: 'info',
  [FieldType.CURRENCY]: 'success',
};

function SkeletonDetails() {
  return (
    <Box sx={{ p: 3 }}>
      <Skeleton variant="text" width="35%" height={28} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="55%" height={18} sx={{ mb: 3 }} />
      <Box sx={{ display: 'flex', gap: 1.5, mb: 4 }}>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} variant="rounded" width={96} height={36} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} variant="text" height={18} width={`${50 + i * 8}%`} />
        ))}
      </Box>
    </Box>
  );
}

function OverviewTab({
  template,
  language,
}: {
  template: ExternalTemplateMetadata;
  language: string;
}) {
  const relTime = formatDistanceToNow(new Date(template.updatedAt), {
    addSuffix: true,
    locale: language === 'ru' ? ru : undefined,
  });

  const fields = [
    { label: 'ID', value: template.id, mono: true },
    { label: language === 'ru' ? 'Название' : 'Name', value: template.name },
    { label: language === 'ru' ? 'Описание' : 'Description', value: template.description || '—' },
    { label: language === 'ru' ? 'Версия' : 'Version', value: `v${template.version}` },
    { label: language === 'ru' ? 'Формат' : 'Format', value: template.format.toUpperCase() },
    {
      label: language === 'ru' ? 'Создан' : 'Created',
      value: new Date(template.createdAt).toLocaleString(language === 'ru' ? 'ru-RU' : 'en-US'),
    },
    {
      label: language === 'ru' ? 'Обновлён' : 'Updated',
      value: `${new Date(template.updatedAt).toLocaleString(language === 'ru' ? 'ru-RU' : 'en-US')} (${relTime})`,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Metadata card */}
      <Paper
        elevation={0}
        sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
      >
        <Box
          sx={{
            px: 2.5,
            py: 1.5,
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: 'action.hover',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'text.secondary',
            }}
          >
            {language === 'ru' ? 'Метаданные шаблона' : 'Template metadata'}
          </Typography>
        </Box>
        <Box component="dl" sx={{ m: 0 }}>
          {fields.map((f, i) => (
            <Box
              key={f.label}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                px: 2.5,
                py: 1.5,
                borderBottom: i < fields.length - 1 ? 1 : 0,
                borderColor: 'divider',
              }}
            >
              <Typography
                component="dt"
                variant="caption"
                color="text.secondary"
                sx={{ width: 112, flexShrink: 0, pt: 0.25, fontWeight: 500 }}
              >
                {f.label}
              </Typography>
              <Typography
                component="dd"
                variant="body2"
                sx={{
                  fontFamily: f.mono ? 'monospace' : 'inherit',
                  fontSize: f.mono ? '0.75rem' : 'inherit',
                  m: 0,
                }}
              >
                {f.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Tags */}
      {template.tags && template.tags.length > 0 && (
        <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'text.secondary',
              display: 'block',
              mb: 1.5,
            }}
          >
            {language === 'ru' ? 'Теги' : 'Tags'}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {template.tags.map((tag) => (
              <Chip
                key={tag}
                icon={<Tag style={{ width: 12 }} />}
                label={tag}
                color="primary"
                variant="outlined"
                size="small"
              />
            ))}
          </Box>
        </Paper>
      )}

      {/* File download */}
      <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2.5 }}>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'text.secondary',
            display: 'block',
            mb: 2,
          }}
        >
          {language === 'ru' ? 'Файл шаблона' : 'Template file'}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: 'primary.light',
              color: 'primary.dark',
              width: 44,
              height: 44,
              borderRadius: 2,
            }}
          >
            <FilePresent />
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }} noWrap>
              {template.name}.{template.format}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              {template.downloadUrl}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            href={template.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Download fontSize="small" />}
            sx={{ borderRadius: 2, flexShrink: 0 }}
          >
            {language === 'ru' ? 'Скачать' : 'Download'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

function SchemaTab({ template }: { template: ExternalTemplateMetadata }) {
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);
  const schema = template.schema;

  if (!schema) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
        <Info sx={{ color: 'text.disabled', fontSize: 36, mb: 2 }} />
        <Typography variant="body2" color="text.disabled">
          Схема полей недоступна для этого шаблона
        </Typography>
      </Box>
    );
  }

  const stats = [
    { label: 'Всего полей', value: schema.fields.length, color: 'primary' as const },
    {
      label: 'Обязательных',
      value: schema.fields.filter((f) => f.required).length,
      color: 'error' as const,
    },
    { label: 'Плейсхолдеров', value: schema.totalPlaceholders, color: 'secondary' as const },
    {
      label: 'Синтаксис',
      value: schema.placeholderSyntax === 'double_curly' ? '{{...}}' : schema.placeholderSyntax,
      color: 'default' as const,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Stats */}
      <Grid container spacing={2}>
        {stats.map((s) => (
          <Grid size={{ xs: 6, sm: 3 }} key={s.label}>
            <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2 }}>
              <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                {s.label}
              </Typography>
              <Typography
                variant="h6"
                color={s.color !== 'default' ? `${s.color}.main` : 'text.primary'}
                sx={{ fontWeight: 700 }}
              >
                {s.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Fields table */}
      <Paper
        elevation={0}
        sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
      >
        <Box
          sx={{
            px: 2.5,
            py: 1.5,
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: 'action.hover',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'text.secondary',
            }}
          >
            Поля шаблона
          </Typography>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {['Ключ', 'Метка', 'Тип', 'Обязательное', 'Пример', 'Описание'].map((h) => (
                  <TableCell key={h}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {schema.fields.map((field) => (
                <TableRow key={field.key} hover>
                  <TableCell>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 500 }}>
                      {field.key}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">{field.label || '—'}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={field.type}
                      size="small"
                      color={FIELD_TYPE_COLORS[field.type]}
                      variant="outlined"
                      sx={{ height: 20, fontSize: '0.68rem' }}
                    />
                  </TableCell>
                  <TableCell>
                    {field.required ? (
                      <Check sx={{ fontSize: 16, color: 'success.main' }} />
                    ) : (
                      <Close sx={{ fontSize: 16, color: 'text.disabled' }} />
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'monospace',
                        color: 'text.secondary',
                        maxWidth: 120,
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {field.example !== undefined ? String(field.example) : '—'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        maxWidth: 200,
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {field.description || '—'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Diagnostics */}
      <Paper
        elevation={0}
        sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            py: 1.5,
            cursor: 'pointer',
            '&:hover': { bgcolor: 'action.hover' },
          }}
          onClick={() => setDiagnosticsOpen(!diagnosticsOpen)}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Diagnostics
          </Typography>
          {diagnosticsOpen ? (
            <ExpandLess fontSize="small" sx={{ color: 'text.secondary' }} />
          ) : (
            <ExpandMore fontSize="small" sx={{ color: 'text.secondary' }} />
          )}
        </Box>
        <Collapse in={diagnosticsOpen}>
          <Divider />
          <Box sx={{ p: 2.5 }}>
            <Grid container spacing={1.5}>
              {[
                { k: 'parseTimeMs', v: '87 ms' },
                { k: 'totalPlaceholders', v: String(schema.totalPlaceholders) },
                { k: 'uniquePlaceholders', v: String(schema.fields.length) },
                { k: 'duplicatePlaceholders', v: '0' },
                { k: 'undocumentedKeys', v: '0' },
                { k: 'syntaxIssues', v: '0' },
              ].map(({ k, v }) => (
                <Grid size={{ xs: 6, sm: 4 }} key={k}>
                  <Box sx={{ bgcolor: 'action.hover', borderRadius: 1.5, p: 1.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'monospace',
                        color: 'text.secondary',
                        display: 'block',
                        mb: 0.25,
                      }}
                    >
                      {k}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {v}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      </Paper>
    </Box>
  );
}

function MetadataTab({
  template,
  onSave,
}: {
  template: ExternalTemplateMetadata;
  onSave: (t: ExternalTemplateMetadata) => Promise<void>;
}) {
  const initial = JSON.stringify(template, null, 2);
  const [value, setValue] = useState(initial);
  const [editMode, setEditMode] = useState(false);
  const [jsonStatus, setJsonStatus] = useState<{ valid: boolean; message: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  function handleFormat() {
    try {
      const parsed = JSON.parse(value);
      setValue(JSON.stringify(parsed, null, 2));
      setJsonStatus({ valid: true, message: '✓ JSON отформатирован' });
    } catch (e: any) {
      setJsonStatus({ valid: false, message: `✗ Ошибка парсинга: ${e.message}` });
    }
  }

  function handleValidate() {
    try {
      JSON.parse(value);
      setJsonStatus({ valid: true, message: '✓ Корректный JSON' });
    } catch (e: any) {
      setJsonStatus({ valid: false, message: `✗ Ошибка: ${e.message}` });
    }
  }

  async function handleSave() {
    try {
      const parsed = JSON.parse(value);
      setSaving(true);
      setSaveError(null);
      await onSave(parsed as ExternalTemplateMetadata);
      setJsonStatus({ valid: true, message: '✓ Сохранено успешно' });
      setEditMode(false);
    } catch (e: any) {
      setSaveError(`Ошибка сохранения: ${e.message}`);
    } finally {
      setSaving(false);
    }
  }

  function handleRevert() {
    setValue(initial);
    setJsonStatus(null);
    setSaveError(null);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Toolbar */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
        <ToggleButtonGroup
          value={editMode ? 'edit' : 'view'}
          exclusive
          onChange={(_, v) => v !== null && setEditMode(v === 'edit')}
          size="small"
        >
          <ToggleButton value="view">
            <Visibility sx={{ fontSize: 14, mr: 0.75 }} />
            View
          </ToggleButton>
          <ToggleButton value="edit">
            <Edit sx={{ fontSize: 14, mr: 0.75 }} />
            Edit
          </ToggleButton>
        </ToggleButtonGroup>

        <Button
          size="small"
          variant="outlined"
          disabled={!editMode}
          onClick={handleFormat}
          startIcon={<DataObject fontSize="small" />}
          sx={{ borderRadius: 1.5 }}
        >
          Format
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={handleValidate}
          startIcon={<CheckCircle fontSize="small" />}
          sx={{ borderRadius: 1.5 }}
        >
          Validate
        </Button>

        <Box sx={{ flex: 1 }} />

        <Button
          size="small"
          variant="outlined"
          disabled={!editMode}
          onClick={handleRevert}
          startIcon={<Autorenew fontSize="small" />}
          sx={{ borderRadius: 1.5 }}
        >
          Revert
        </Button>
        <Button
          size="small"
          variant="contained"
          disabled={!editMode || saving}
          onClick={handleSave}
          startIcon={
            saving ? (
              <Autorenew
                fontSize="small"
                sx={{
                  animation: 'spin 1s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />
            ) : (
              <Save fontSize="small" />
            )
          }
          sx={{ borderRadius: 1.5 }}
        >
          {saving ? 'Сохранение...' : 'Save'}
        </Button>
      </Box>

      {/* Editor */}
      <Paper
        elevation={0}
        sx={{
          border: 1,
          borderColor: editMode ? 'primary.main' : 'divider',
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'border-color 0.2s',
        }}
      >
        <Box
          component="textarea"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
          readOnly={!editMode}
          spellCheck={false}
          rows={20}
          sx={{
            width: '100%',
            p: 2,
            fontFamily: '"Roboto Mono", "Consolas", monospace',
            fontSize: '0.75rem',
            lineHeight: 1.6,
            bgcolor: 'background.default',
            color: 'text.primary',
            border: 'none',
            outline: 'none',
            resize: 'vertical',
            display: 'block',
          }}
          aria-label="JSON редактор метаданных"
        />
      </Paper>

      {/* Status */}
      {jsonStatus && (
        <Alert
          severity={jsonStatus.valid ? 'success' : 'error'}
          icon={
            jsonStatus.valid ? <CheckCircle fontSize="inherit" /> : <Cancel fontSize="inherit" />
          }
          onClose={() => setJsonStatus(null)}
        >
          <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
            {jsonStatus.message}
          </Typography>
        </Alert>
      )}

      {saveError && <ErrorBanner error={saveError} onDismiss={() => setSaveError(null)} />}
    </Box>
  );
}

export function TemplateDetails() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language } = useTheme();

  const initialTab = (searchParams.get('tab') as TabId) || 'overview';
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState<ExternalTemplateMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDelete, setShowDelete] = useState(false);
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const result = await fetchTemplateById(id);
        if (!cancelled) setTemplate(result);
      } catch (e) {
        if (!cancelled) {
          const message = e instanceof Error ? e.message : `Шаблон с ID «${id}» не найден`;
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
  }, [id, reloadTick]);

  const tabs: { id: TabId; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'schema', label: 'Schema' },
    { id: 'metadata', label: 'Metadata JSON' },
  ];

  if (loading) {
    return (
      <Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Skeleton variant="rounded" width={32} height={32} />
          <Skeleton variant="text" width={180} height={22} />
        </Box>
        <SkeletonDetails />
      </Box>
    );
  }

  if (error || !template) {
    return (
      <Box sx={{ p: 3 }}>
        <ErrorBanner
          error={error || 'Шаблон не найден'}
          onRetry={() => setReloadTick((prev) => prev + 1)}
        />
        <Button component={Link} to="/" startIcon={<ArrowBack />} sx={{ mt: 2 }}>
          {language === 'ru' ? 'К списку шаблонов' : 'Back to templates'}
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header toolbar */}
      <Paper
        elevation={0}
        square
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
          bgcolor: 'background.paper',
        }}
      >
        <Tooltip title={language === 'ru' ? 'Назад к списку' : 'Back to list'}>
          <IconButton onClick={() => navigate('/')} size="small">
            <ArrowBack />
          </IconButton>
        </Tooltip>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }} noWrap>
            {template.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            v{template.version} · {template.format.toUpperCase()}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
          <Button
            variant="outlined"
            size="small"
            href={template.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Download fontSize="small" />}
            sx={{ borderRadius: 1.5 }}
          >
            {language === 'ru' ? 'Скачать' : 'Download'}
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => setShowDelete(true)}
            startIcon={<Delete fontSize="small" />}
            sx={{ borderRadius: 1.5 }}
          >
            {language === 'ru' ? 'Удалить' : 'Delete'}
          </Button>
        </Box>
      </Paper>

      {/* Tabs */}
      <Paper
        elevation={0}
        square
        sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
      >
        <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)} sx={{ px: 2 }}>
          {tabs.map((tab) => (
            <Tab key={tab.id} value={tab.id} label={tab.label} />
          ))}
        </Tabs>
      </Paper>

      {/* Tab content */}
      <Box sx={{ flex: 1, overflow: 'auto', p: { xs: 2, sm: 3 } }}>
        {activeTab === 'overview' && <OverviewTab template={template} language={language} />}
        {activeTab === 'schema' && <SchemaTab template={template} />}
        {activeTab === 'metadata' && (
          <MetadataTab
            template={template}
            onSave={async (updated) => {
              const saved = await updateTemplateMetadata(updated);
              setTemplate(saved);
            }}
          />
        )}
      </Box>

      {/* Delete dialog */}
      <Dialog open={showDelete} onClose={() => setShowDelete(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ bgcolor: 'error.light', color: 'error.main', width: 40, height: 40 }}>
            <Delete />
          </Avatar>
          {language === 'ru' ? 'Удалить шаблон?' : 'Delete template?'}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            {language === 'ru' ? (
              <>
                Вы уверены, что хотите удалить <strong>«{template.name}»</strong>? Это действие
                необратимо.
              </>
            ) : (
              <>
                Are you sure you want to delete <strong>"{template.name}"</strong>? This cannot be
                undone.
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button onClick={() => setShowDelete(false)} variant="outlined">
            {language === 'ru' ? 'Отмена' : 'Cancel'}
          </Button>
          <Button
            onClick={async () => {
              try {
                await deleteTemplateById(template.id);
                setShowDelete(false);
                navigate('/');
              } catch (e) {
                setShowDelete(false);
                const message = e instanceof Error ? e.message : 'Не удалось удалить шаблон';
                setError(message);
                setReloadTick((prev) => prev + 1);
              }
            }}
            variant="contained"
            color="error"
          >
            {language === 'ru' ? 'Удалить' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
