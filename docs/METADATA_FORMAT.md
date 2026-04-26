# Формат метаданных шаблонов

Каждый шаблон в `storage/templates/{id}/` должен содержать файл `metadata.json`.

## Обязательные поля

```json
{
  "id": "unique-template-id",
  "name": "Название шаблона",
  "description": "Краткое описание назначения шаблона.",
  "placeholders": ["name", "date", "project"],
  "createdAt": "2026-04-17T00:00:00.000Z",
  "updatedAt": "2026-04-17T00:00:00.000Z"
}
```

| Поле           | Тип        | Описание                                           |
| -------------- | ---------- | -------------------------------------------------- |
| `id`           | `string`   | Уникальный идентификатор, совпадает с именем папки |
| `name`         | `string`   | Человекочитаемое название (русский)                |
| `description`  | `string`   | Описание назначения шаблона                        |
| `placeholders` | `string[]` | Список плейсхолдеров в формате `${name}`           |
| `createdAt`    | `string`   | ISO 8601, дата создания                            |
| `updatedAt`    | `string`   | ISO 8601, дата последнего обновления               |

## Правила валидации

- `id` — строка `[a-zA-Z0-9_-]+`, уникальная в пределах `storage/templates/`.
- `placeholders` — каждый элемент соответствует `^[a-zA-Z_][a-zA-Z0-9_]*$`.
- `createdAt` и `updatedAt` — строгий ISO 8601.

## Пример

```json
{
  "id": "offer-letter",
  "name": "Оффер-письмо",
  "description": "Шаблон письма с предложением о работе.",
  "placeholders": ["candidate_name", "position", "salary", "start_date"],
  "createdAt": "2026-04-17T10:00:00.000Z",
  "updatedAt": "2026-04-17T10:00:00.000Z"
}
```
