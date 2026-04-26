import type { Meta, StoryObj } from '@storybook/react';

import { AiAssistant } from './AiAssistant';
import type { ChatSession } from './types';

const baseChats: ChatSession[] = [
  {
    id: 'chat-1',
    title: 'Загрузка шаблона',
    createdAt: '2026-04-26T10:00:00.000Z',
    updatedAt: '2026-04-26T10:02:00.000Z',
    messages: [
      {
        id: 'm-1',
        role: 'user',
        text: 'Как валидировать DOCX?',
        createdAt: '2026-04-26T10:01:00.000Z',
        status: 'sent',
        kind: 'text',
      },
      {
        id: 'm-2',
        role: 'assistant',
        text: 'Загрузите файл и отправьте metadata в /api/templates/validate.',
        createdAt: '2026-04-26T10:01:10.000Z',
        status: 'sent',
        kind: 'text',
      },
    ],
  },
];

const meta: Meta<typeof AiAssistant> = {
  title: 'AI Assistant/AiAssistant',
  component: AiAssistant,
  args: {
    chats: baseChats,
    activeChatId: 'chat-1',
    isHistoryOpen: true,
    draft: '',
    isSubmitting: false,
    error: null,
    onDraftChange: () => undefined,
    onSendQuestion: () => undefined,
    onStartNewChat: () => undefined,
    onDeleteChat: () => undefined,
    onToggleHistory: () => undefined,
    onSelectChat: () => undefined,
  },
};

export default meta;

type Story = StoryObj<typeof AiAssistant>;

export const Default: Story = {};

export const HistoryCollapsed: Story = {
  args: {
    isHistoryOpen: false,
  },
};

export const EmptyState: Story = {
  args: {
    chats: [],
    activeChatId: null,
  },
};

export const WithError: Story = {
  args: {
    error: 'Не удалось отправить вопрос',
    draft: 'Повторить запрос',
  },
};
