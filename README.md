# templateStorage

Сервис для хранения DOCX-шаблонов с метаданными. Монорепо на TypeScript + npm workspaces.

## Архитектура

```
templateStorage/
├── apps/
│   ├── backend/    # NestJS 10 — REST API, хранение шаблонов на файловой системе
│   ├── frontend/   # Angular 21 (standalone) — SPA для управления шаблонами
│   └── portal/     # Next.js 14 — публичный портал
├── packages/
│   ├── shared-types/  # Общие TypeScript-типы и DTO
│   ├── i18n/          # Переводы (ru/en)
│   ├── ui-kit/        # Компоненты Angular Material + Storybook
│   └── test-utils/    # Утилиты для тестов
├── storage/
│   └── templates/     # Файловое хранилище: {id}/template.docx + {id}/metadata.json
└── docs/              # Документация
```

**Источник истины — файловая система.** БД не используется.

## Стек

| Слой     | Технология                                                                              |
| -------- | --------------------------------------------------------------------------------------- |
| Backend  | NestJS 10, Multer memoryStorage, adm-zip, async-mutex, class-validator, @nestjs/swagger |
| Frontend | Angular 21 (standalone), Angular Material 21, ag-Grid Community, NgRx 21, Storybook 9   |
| Portal   | Next.js 14                                                                              |
| Тесты    | Jest + Supertest, Jasmine/Karma, Cypress                                                |
| Язык     | TypeScript ~5.9                                                                         |
| Пакеты   | npm workspaces (Node.js ≥ 20)                                                           |

## ✅ / 🔲 Функциональность

> TODO: заполнить после реализации backend

## Quick Start

### Docker

```bash
docker compose up -d
# Backend: http://localhost:3000
# Frontend: http://localhost:4200
# Portal: http://localhost:3001
```

### Локально

```bash
# Установка зависимостей
npm install

# Backend
npm run dev:backend

# Frontend (отдельный терминал)
npm run dev:frontend

# Portal (отдельный терминал)
npm run dev:portal
```

## API

> TODO: заполнить после реализации backend

## Коды ошибок

> TODO: заполнить после реализации ServiceException

## TDD

Подробно в [docs/TDD.md](./docs/TDD.md).

Правило: **сначала тест (Red) → реализация (Green) → рефакторинг**. Coverage backend ≥ 85%.

## CI/CD

> TODO: заполнить после настройки `.github/workflows/ci.yml`

## Лицензия

MIT
