# @templateStorage/ai-assistant-backend

Backend script package for AI assistant experiments in workspace.

## What it does

- Sends a user message to a Copilot-compatible chat completions endpoint.
- Validates model selection with a small allow-list.
- Returns assistant answer in CLI output.

## Security

API key is loaded from environment variable `COPILOT_API_KEY`.
Hardcoding secrets in source code is intentionally not supported.

## Run tests

```bash
npm run test --workspace=@templateStorage/ai-assistant-backend
```

## Build

```bash
npm run build --workspace=@templateStorage/ai-assistant-backend
```

## CLI usage

```bash
COPILOT_API_KEY=your_token npm run build --workspace=@templateStorage/ai-assistant-backend
COPILOT_API_KEY=your_token npm run chat --workspace=@templateStorage/ai-assistant-backend -- --message "Привет" --model gpt-4o-mini
```

## Environment variables

- `COPILOT_API_KEY` (required)
- `COPILOT_BASE_URL` (optional, default: `https://models.inference.ai.azure.com/chat/completions`)
- `COPILOT_DEFAULT_MODEL` (optional, default: `gpt-4o-mini`)
