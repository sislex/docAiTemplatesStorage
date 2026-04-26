# AGENTS.md — Инструкции для AI-агентов

Этот файл описывает правила взаимодействия AI-агентов с монорепо `templateStorage`.

## Общие правила

1. Не изменять файлы вне своей зоны ответственности без явного указания.
2. Коммиты — только в формате Conventional Commits: `feat:`, `fix:`, `test:`, `docs:`, `chore:`.
3. Сначала писать тест (`*.spec.ts`), затем реализацию — TDD обязателен.
4. Комментарии в коде — на **английском**; документация и UI-тексты — на **русском**.
5. Пакетный менеджер — только **npm**. Никаких pnpm/yarn/turbo.

## Синтаксис плейсхолдеров

В DOCX-шаблонах используется только формат `${name}`, где `name` соответствует `^[a-zA-Z_][a-zA-Z0-9_]*$`.

Подробнее: [docs/PLACEHOLDERS.md](./docs/PLACEHOLDERS.md).

## Хранилище шаблонов

Каждый шаблон хранится по пути:

```
storage/templates/{id}/template.docx
storage/templates/{id}/metadata.json
```

Подробнее: [docs/STORAGE.md](./docs/STORAGE.md) и [docs/METADATA_FORMAT.md](./docs/METADATA_FORMAT.md).

## Ограничения

- Максимальный размер файла: 20 МБ (env `MAX_FILE_SIZE`).
- БД (PostgreSQL, Prisma, TypeORM) — **запрещены**.
- Redis, очереди, auth, версионирование, индексация при старте — **не используются**.
- Пагинация/сортировка — только на клиенте (ag-Grid Community).

## API

> TODO: заполнить после реализации backend REST API.

## Единый формат ошибок

```typescript
ServiceException(code, { field?, retryable, action, explain? })
```

Все ошибки обрабатываются глобальным `HttpExceptionFilter`.
