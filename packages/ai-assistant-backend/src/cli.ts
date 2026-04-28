import { askAssistant } from './chatService.js';
import { loadCopilotConfig } from './config.js';
import { CopilotClient } from './copilotClient.js';

interface CliArgs {
  model?: string;
  message: string;
}

function parseArgs(argv: string[]): CliArgs {
  let model: string | undefined;
  let message: string | undefined;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--model') {
      model = argv[index + 1];
      index += 1;
      continue;
    }

    if (arg === '--message') {
      message = argv[index + 1];
      index += 1;
    }
  }

  if (!message?.trim()) {
    throw new Error(
      'Usage: npm run chat --workspace=@templateStorage/ai-assistant-backend -- --message "..." [--model gpt-4o-mini]',
    );
  }

  if (model) {
    return { message, model };
  }

  return { message };
}

export async function runCli(argv: string[] = process.argv.slice(2)): Promise<void> {
  const args = parseArgs(argv);
  const config = loadCopilotConfig(process.env);
  const client = new CopilotClient();
  const input = args.model
    ? { message: args.message, model: args.model }
    : { message: args.message };
  const result = await askAssistant(input, { config, client });
  process.stdout.write(`${result.answer}\n`);
}

void runCli();
