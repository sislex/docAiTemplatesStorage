# TDD — Руководство по разработке через тестирование

## Обзор

`templateStorage` — монорепо для хранения DOCX-шаблонов с метаданными.
Правило проекта: **сначала тест (Red), потом реализация (Green), потом рефакторинг**.

## Стек тестирования

| Слой     | Фреймворк        |
| -------- | ---------------- |
| Backend  | Jest + Supertest |
| Frontend | Jasmine / Karma  |
| Portal   | Jest             |
| E2E      | Cypress          |
| Shared   | Jest             |

## Запуск тестов

### Все воркспейсы

```bash
npm test
```

### Конкретный воркспейс

```bash
npm test -w apps/backend
npm test -w apps/portal
npm test -w packages/shared-types
```

### Coverage-отчёты

После запуска `npm test -w <workspace>` отчёт доступен в:

```
<workspace>/coverage/lcov-report/index.html
```

Требование: **backend coverage ≥ 85%**.

## Соглашения

- Файл спецификации создаётся **до** файла реализации.
- Имя: `*.spec.ts` (рядом с реализацией) или `*.e2e-spec.ts` (для e2e).
- Моки размещаются в `__mocks__/` или используют `jest.mock(...)`.
- Каждый тест — независим, не зависит от порядка выполнения.

## Структура coverage-отчётов

```
apps/backend/coverage/
apps/portal/coverage/
packages/shared-types/coverage/
```

## Связанные документы

- [Формат метаданных](./METADATA_FORMAT.md)
- [Плейсхолдеры](./PLACEHOLDERS.md)
- [Хранилище](./STORAGE.md)
