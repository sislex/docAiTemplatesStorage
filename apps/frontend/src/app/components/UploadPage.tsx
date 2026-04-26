import {
  CloudUpload,
  Link as LinkIcon,
  CheckCircle,
  WarningAmber,
  ChevronRight,
  ChevronLeft,
  Autorenew,
  Check,
  Close,
  FileUpload,
  Info,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Alert,
  LinearProgress,
  CircularProgress,
  Collapse,
  Grid,
  Divider,
  IconButton,
} from '@mui/material';
import type { DragEvent, ChangeEvent } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import { extractTemplateKeys, uploadTemplate } from '../api/templates';

import { ErrorBanner } from './ErrorBanner';
import { useTheme } from './ThemeContext';
import type { TemplateAnalysisResponse } from './types';
import { FieldType, PlaceholderSyntax } from './types';

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

const STEPS = [
  { id: 1, label: 'Источник файла', labelEn: 'File source' },
  { id: 2, label: 'Метаданные', labelEn: 'Metadata' },
  { id: 3, label: 'Анализ схемы', labelEn: 'Schema analysis' },
  { id: 4, label: 'Сохранение', labelEn: 'Review & Save' },
];

// Step 1
function Step1({
  onNext,
  language,
}: {
  onNext: (data: { file?: File; url?: string }) => void;
  language: string;
}) {
  const [sourceTab, setSourceTab] = useState<'file' | 'url'>('file');
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.name.endsWith('.docx')) {
      setFile(f);
      setError('');
    } else
      setError(
        language === 'ru' ? 'Пожалуйста, выберите файл .docx' : 'Please select a .docx file',
      );
  }

  function handleFileInput(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      if (!f.name.endsWith('.docx')) {
        setError(
          language === 'ru' ? 'Пожалуйста, выберите файл .docx' : 'Please select a .docx file',
        );
        return;
      }
      setFile(f);
      setError('');
    }
  }

  function handleNext() {
    if (sourceTab === 'file' && !file) {
      setError(language === 'ru' ? 'Выберите файл .docx' : 'Please select a .docx file');
      return;
    }
    if (sourceTab === 'url' && !url.trim()) {
      setError(language === 'ru' ? 'Введите URL файла' : 'Please enter file URL');
      return;
    }
    onNext(sourceTab === 'file' ? { file: file! } : { url: url.trim() });
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Tab switcher */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {(['file', 'url'] as const).map((tab) => (
          <Button
            key={tab}
            variant={sourceTab === tab ? 'contained' : 'outlined'}
            size="small"
            onClick={() => setSourceTab(tab)}
            startIcon={
              tab === 'file' ? <FileUpload fontSize="small" /> : <LinkIcon fontSize="small" />
            }
            sx={{ borderRadius: 2 }}
          >
            {tab === 'file'
              ? language === 'ru'
                ? 'Загрузить файл'
                : 'Upload file'
              : language === 'ru'
                ? 'По URL'
                : 'From URL'}
          </Button>
        ))}
      </Box>

      {sourceTab === 'file' && (
        <Paper
          elevation={0}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 6,
            border: 2,
            borderStyle: 'dashed',
            borderColor: dragging ? 'primary.main' : file ? 'success.main' : 'divider',
            borderRadius: 3,
            cursor: 'pointer',
            bgcolor: dragging ? 'primary.light' : file ? 'success.light' : 'action.hover',
            transition: 'all 0.2s',
            '&:hover': { borderColor: 'primary.main', bgcolor: 'action.selected' },
          }}
          role="button"
          aria-label="Зона загрузки файла"
        >
          <input
            ref={fileRef}
            type="file"
            accept=".docx"
            style={{ display: 'none' }}
            onChange={handleFileInput}
          />
          {file ? (
            <>
              <CheckCircle sx={{ fontSize: 48, color: 'success.main', mb: 1.5 }} />
              <Typography variant="subtitle2">{file.name}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                {(file.size / 1024).toFixed(1)} KB
              </Typography>
              <Button
                size="small"
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                }}
                sx={{ mt: 1.5 }}
              >
                {language === 'ru' ? 'Изменить файл' : 'Change file'}
              </Button>
            </>
          ) : (
            <>
              <CloudUpload sx={{ fontSize: 48, color: 'text.disabled', mb: 1.5 }} />
              <Typography variant="subtitle2" color="text.secondary">
                {language === 'ru'
                  ? 'Перетащите .docx файл или нажмите для выбора'
                  : 'Drag & drop .docx or click to select'}
              </Typography>
              <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5 }}>
                {language === 'ru' ? 'Только файлы .docx' : 'Only .docx files'}
              </Typography>
            </>
          )}
        </Paper>
      )}

      {sourceTab === 'url' && (
        <TextField
          label={`URL шаблона *`}
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError('');
          }}
          placeholder="https://storage.example.com/template.docx"
          helperText={
            language === 'ru' ? 'Прямая ссылка на файл .docx' : 'Direct link to .docx file'
          }
          fullWidth
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
      )}

      {error && (
        <Alert severity="error" icon={<WarningAmber fontSize="inherit" />}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleNext}
          endIcon={<ChevronRight />}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Далее' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}

// Step 2
function Step2({
  onNext,
  onBack,
  language,
}: {
  onNext: (data: { name: string; description: string; version: string; tags: string[] }) => void;
  onBack: () => void;
  language: string;
}) {
  const [form, setForm] = useState({ name: '', description: '', version: '1.0.0' });
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = language === 'ru' ? 'Название обязательно' : 'Name is required';
    if (!form.version.trim())
      e.version = language === 'ru' ? 'Версия обязательна' : 'Version is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function addTag() {
    const t = tagInput.trim().toLowerCase();
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setTagInput('');
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            label={`${language === 'ru' ? 'Название' : 'Name'} *`}
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              setErrors({ ...errors, name: '' });
            }}
            placeholder={language === 'ru' ? 'Счёт на оплату' : 'Invoice template'}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label={language === 'ru' ? 'Описание' : 'Description'}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder={language === 'ru' ? 'Краткое описание шаблона...' : 'Brief description...'}
            multiline
            rows={3}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            label={`${language === 'ru' ? 'Версия' : 'Version'} *`}
            value={form.version}
            onChange={(e) => {
              setForm({ ...form, version: e.target.value });
              setErrors({ ...errors, version: '' });
            }}
            placeholder="1.0.0"
            error={!!errors.version}
            helperText={errors.version}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            label={language === 'ru' ? 'Теги' : 'Tags'}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addTag();
              }
            }}
            placeholder={language === 'ru' ? 'Добавить тег...' : 'Add tag...'}
            helperText={
              language === 'ru'
                ? 'Нажмите Enter или запятую для добавления'
                : 'Press Enter or comma to add'
            }
            InputProps={{
              endAdornment: (
                <IconButton size="small" onClick={addTag} edge="end">
                  <Check fontSize="small" />
                </IconButton>
              ),
            }}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
          {tags.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1 }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  color="primary"
                  variant="outlined"
                  onDelete={() => setTags(tags.filter((t) => t !== tag))}
                />
              ))}
            </Box>
          )}
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ChevronLeft />}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Назад' : 'Back'}
        </Button>
        <Button
          variant="contained"
          onClick={() => validate() && onNext({ ...form, tags })}
          endIcon={<ChevronRight />}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Далее' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}

// Step 3
function Step3({
  sourceData,
  onNext,
  onBack,
  language,
}: {
  sourceData: { file?: File; url?: string };
  onNext: (analysis: TemplateAnalysisResponse) => void;
  onBack: () => void;
  language: string;
}) {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<TemplateAnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);

  async function runAnalysis() {
    setLoading(true);
    setError(null);
    setAnalysis(null);
    try {
      if (!sourceData.file) {
        throw new Error(
          language === 'ru'
            ? 'Для анализа схемы выберите DOCX-файл'
            : 'Please select a DOCX file for schema analysis',
        );
      }

      const keys = await extractTemplateKeys(sourceData.file);
      const fields = keys.map((key) => ({
        key,
        label: key,
        type: FieldType.STRING,
        required: true,
      }));

      const diagnostics = {
        parseTimeMs: 0,
        totalPlaceholders: keys.length,
        uniquePlaceholders: keys.length,
        duplicatePlaceholders: [] as string[],
        undocumentedKeys: [] as string[],
        syntaxIssues: [] as string[],
      };

      setAnalysis({
        schema: {
          templateId: 'analyzed-upload',
          templateName: sourceData.file.name,
          version: '1.0.0',
          placeholderSyntax: PlaceholderSyntax.DOLLAR_CURLY,
          totalPlaceholders: keys.length,
          fields,
        },
        warnings: [],
        diagnostics,
      });
    } catch (e) {
      const msg =
        e instanceof Error
          ? e.message
          : language === 'ru'
            ? 'Ошибка анализа шаблона'
            : 'Analysis failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  if (!analysis && !loading && !error) void runAnalysis();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {loading && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <CircularProgress size={18} color="primary" />
            <Typography variant="body2" color="text.secondary">
              {language === 'ru'
                ? 'Анализируем структуру шаблона...'
                : 'Analyzing template structure...'}
            </Typography>
          </Box>
          <LinearProgress color="primary" />
        </Box>
      )}

      {error && <ErrorBanner error={error} onRetry={runAnalysis} />}

      {analysis && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Alert severity="success" icon={<CheckCircle fontSize="inherit" />}>
            {language === 'ru'
              ? `Найдено ${analysis.schema.fields.length} полей, ${analysis.schema.totalPlaceholders} плейсхолдеров`
              : `Found ${analysis.schema.fields.length} fields, ${analysis.schema.totalPlaceholders} placeholders`}
          </Alert>

          {analysis.warnings.length > 0 &&
            analysis.warnings.map((w, i) => (
              <Alert key={i} severity="warning" icon={<WarningAmber fontSize="inherit" />}>
                <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                  {w.code}
                </Typography>
                <Typography variant="caption">{w.message}</Typography>
              </Alert>
            ))}

          {/* Fields table */}
          <Paper
            elevation={0}
            sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
          >
            <Box sx={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--table-border)' }}>
                    {['Ключ', 'Тип', 'Обяз.', 'Пример'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '8px 16px',
                          textAlign: 'left',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          opacity: 0.7,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {analysis.schema.fields.map((f, i) => (
                    <tr
                      key={f.key}
                      style={{
                        borderBottom:
                          i < analysis.schema.fields.length - 1
                            ? '1px solid rgba(0,0,0,0.05)'
                            : 'none',
                      }}
                    >
                      <td
                        style={{
                          padding: '7px 16px',
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                        }}
                      >
                        {f.key}
                      </td>
                      <td style={{ padding: '7px 16px' }}>
                        <Chip
                          label={f.type}
                          size="small"
                          color={FIELD_TYPE_COLORS[f.type]}
                          variant="outlined"
                          sx={{ height: 20, fontSize: '0.68rem' }}
                        />
                      </td>
                      <td style={{ padding: '7px 16px' }}>
                        {f.required ? (
                          <Check sx={{ fontSize: 15, color: 'green' }} />
                        ) : (
                          <Close sx={{ fontSize: 15, opacity: 0.3 }} />
                        )}
                      </td>
                      <td
                        style={{
                          padding: '7px 16px',
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                          opacity: 0.6,
                        }}
                      >
                        {f.example !== undefined ? String(f.example) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
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
              {diagnosticsOpen ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
            </Box>
            <Collapse in={diagnosticsOpen}>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Grid container spacing={1.5}>
                  {Object.entries(analysis.diagnostics).map(([k, v]) => (
                    <Grid size={{ xs: 6, sm: 4 }} key={k}>
                      <Box sx={{ bgcolor: 'action.hover', borderRadius: 1.5, p: 1.5 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: 'monospace',
                            color: 'text.secondary',
                            display: 'block',
                          }}
                        >
                          {k}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {Array.isArray(v) ? (v.length === 0 ? '[]' : v.join(', ')) : String(v)}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Collapse>
          </Paper>

          <Button
            size="small"
            color="primary"
            startIcon={<Autorenew fontSize="small" />}
            onClick={runAnalysis}
            sx={{ alignSelf: 'flex-start' }}
          >
            {language === 'ru' ? 'Повторить анализ' : 'Re-analyze'}
          </Button>
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ChevronLeft />}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Назад' : 'Back'}
        </Button>
        <Button
          variant="contained"
          disabled={!analysis}
          onClick={() => analysis && onNext(analysis)}
          endIcon={<ChevronRight />}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Далее' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}

// Step 4
function Step4({
  metadata,
  analysis,
  sourceData,
  onBack,
  language,
}: {
  metadata: { name: string; description: string; version: string; tags: string[] };
  analysis: TemplateAnalysisResponse | null;
  sourceData: { file?: File; url?: string };
  onBack: () => void;
  language: string;
}) {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const preview = JSON.stringify(
    {
      name: metadata.name,
      description: metadata.description,
      version: metadata.version,
      format: 'docx',
      tags: metadata.tags,
      ...(sourceData.url ? { templateUrl: sourceData.url } : { file: sourceData.file?.name }),
      schema: analysis?.schema,
    },
    null,
    2,
  );

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      if (!sourceData.file) {
        throw new Error(
          language === 'ru'
            ? 'Загрузка по URL пока не поддерживается backend API'
            : 'Upload by URL is not supported by backend API yet',
        );
      }

      const created = await uploadTemplate(sourceData.file, {
        name: metadata.name,
        description: metadata.description || 'Uploaded from frontend',
        fields: analysis?.schema.fields ?? [],
      });

      navigate(`/templates/${created.id}`);
    } catch {
      setError(
        language === 'ru'
          ? 'Ошибка сохранения. Попробуйте снова.'
          : 'Save failed. Please try again.',
      );
    } finally {
      setSaving(false);
    }
  }

  const summary = [
    { label: language === 'ru' ? 'Название' : 'Name', value: metadata.name },
    { label: language === 'ru' ? 'Версия' : 'Version', value: `v${metadata.version}` },
    { label: language === 'ru' ? 'Теги' : 'Tags', value: metadata.tags.join(', ') || '—' },
    {
      label: language === 'ru' ? 'Полей' : 'Fields',
      value: analysis ? String(analysis.schema.fields.length) : '—',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Alert severity="info" icon={<Info fontSize="inherit" />}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {language === 'ru'
            ? 'Проверьте данные перед сохранением'
            : 'Review your data before saving'}
        </Typography>
      </Alert>

      <Grid container spacing={2}>
        {summary.map((item) => (
          <Grid size={{ xs: 6, sm: 3 }} key={item.label}>
            <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2 }}>
              <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            display: 'block',
            mb: 1,
          }}
        >
          JSON Preview
        </Typography>
        <Paper
          elevation={0}
          sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
        >
          <Box
            component="textarea"
            readOnly
            value={preview}
            rows={12}
            sx={{
              width: '100%',
              p: 2,
              display: 'block',
              fontFamily: '"Roboto Mono", "Consolas", monospace',
              fontSize: '0.75rem',
              lineHeight: 1.6,
              bgcolor: 'background.default',
              color: 'text.secondary',
              border: 'none',
              outline: 'none',
              resize: 'vertical',
            }}
          />
        </Paper>
      </Box>

      {error && <ErrorBanner error={error} onRetry={handleSave} />}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ChevronLeft />}
          sx={{ borderRadius: 2 }}
        >
          {language === 'ru' ? 'Назад' : 'Back'}
        </Button>
        <Button
          variant="contained"
          disabled={saving}
          onClick={handleSave}
          startIcon={
            saving ? (
              <Autorenew
                sx={{
                  animation: 'spin 1s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
                fontSize="small"
              />
            ) : (
              <CheckCircle fontSize="small" />
            )
          }
          sx={{ borderRadius: 2, minWidth: 160 }}
        >
          {saving
            ? language === 'ru'
              ? 'Сохранение...'
              : 'Saving...'
            : language === 'ru'
              ? 'Сохранить шаблон'
              : 'Save template'}
        </Button>
      </Box>
    </Box>
  );
}

export function UploadPage() {
  const [step, setStep] = useState(1);
  const [sourceData, setSourceData] = useState<{ file?: File; url?: string }>({});
  const [metadata, setMetadata] = useState({
    name: '',
    description: '',
    version: '1.0.0',
    tags: [] as string[],
  });
  const [analysis, setAnalysis] = useState<TemplateAnalysisResponse | null>(null);
  const { language } = useTheme();

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 720, mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {language === 'ru' ? 'Загрузить шаблон' : 'Upload Template'}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {language === 'ru'
            ? 'Добавьте новый DOCX-шаблон в библиотеку'
            : 'Add a new DOCX template to the library'}
        </Typography>
      </Box>

      {/* Stepper */}
      <Stepper activeStep={step - 1} sx={{ mb: 4 }}>
        {STEPS.map((s) => (
          <Step key={s.id} completed={step > s.id}>
            <StepLabel>{language === 'ru' ? s.label : s.labelEn}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step content */}
      <Paper
        elevation={0}
        sx={{ border: 1, borderColor: 'divider', borderRadius: 3, p: { xs: 2.5, sm: 3.5 } }}
      >
        {step === 1 && (
          <Step1
            language={language}
            onNext={(data) => {
              setSourceData(data);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <Step2
            language={language}
            onNext={(data) => {
              setMetadata(data);
              setStep(3);
            }}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3
            language={language}
            sourceData={sourceData}
            onNext={(a) => {
              setAnalysis(a);
              setStep(4);
            }}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <Step4
            language={language}
            metadata={metadata}
            analysis={analysis}
            sourceData={sourceData}
            onBack={() => setStep(3)}
          />
        )}
      </Paper>
    </Box>
  );
}
