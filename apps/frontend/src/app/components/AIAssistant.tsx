import { Box } from '@mui/material';
import { useReducer } from 'react';

import {
  AiAssistant as AiAssistantUi,
  chatReducer,
  createInitialChatState,
  createNewChat,
  createUserMessage,
  type ChatAction,
  type ChatState,
  type ChatSession,
} from '../../../../../packages/ai-assistant-ui/src';
import { askAssistant } from '../api/assistant';
import type { AssistantHistoryItem } from '../api/assistant';

import { useTheme } from './ThemeContext';
import type { ApiErrorResponseDto } from './types';

type AssistantAction = ChatAction;

function reducer(state: ChatState, action: AssistantAction): ChatState {
  return chatReducer(state, action);
}

function seedState(language: 'ru' | 'en'): ChatState {
  const now = new Date().toISOString();
  const chat: ChatSession = {
    ...createNewChat('chat-welcome', now),
    title: language === 'ru' ? 'Приветствие' : 'Welcome',
    messages: [
      {
        id: 'assistant-welcome',
        role: 'assistant',
        text:
          language === 'ru'
            ? 'Привет! Задайте вопрос по шаблонам документов, и я помогу разобрать следующий шаг.'
            : 'Hi! Ask a question about document templates and I will help with the next step.',
        createdAt: now,
        status: 'sent',
        kind: 'text',
      },
    ],
  };

  return {
    ...createInitialChatState(),
    chats: [chat],
    activeChatId: chat.id,
  };
}

function resolveAssistantError(error: unknown, language: 'ru' | 'en'): string {
  if (typeof error === 'string') {
    return error;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    const typed = error as ApiErrorResponseDto;
    return typed.explain ?? typed.message;
  }

  return language === 'ru' ? 'Не удалось получить ответ ассистента.' : 'Assistant request failed.';
}

function buildHistoryMessages(chat: ChatSession | undefined): AssistantHistoryItem[] {
  if (!chat) {
    return [];
  }

  return chat.messages
    .filter(
      (message) =>
        (message.role === 'user' || message.role === 'assistant') && message.text.trim().length > 0,
    )
    .map((message) => ({ role: message.role, content: message.text.trim() }));
}

export function AIAssistant() {
  const { language } = useTheme();
  const [state, dispatch] = useReducer(reducer, language as 'ru' | 'en', seedState);

  function handleStartNewChat() {
    const now = new Date().toISOString();
    const chatId = `chat-${Date.now()}`;
    dispatch({
      type: 'START_NEW_CHAT',
      payload: {
        chat: createNewChat(chatId, now),
      },
    });
  }

  async function handleSendQuestion(question: string) {
    const text = question.trim();
    if (!text || !state.activeChatId) {
      return;
    }

    const now = new Date().toISOString();
    const activeChatId = state.activeChatId;
    const activeChat = state.chats.find((chat) => chat.id === activeChatId);
    const history = buildHistoryMessages(activeChat);
    const skill = 'template_storage_app_support';

    dispatch({
      type: 'SEND_QUESTION',
      payload: {
        message: createUserMessage({ id: `user-${Date.now()}`, text, createdAt: now }),
      },
    });

    dispatch({ type: 'SET_SUBMITTING', payload: { value: true } });
    dispatch({ type: 'SET_ERROR', payload: { error: null } });

    try {
      const result = await askAssistant({ message: text, history, skill });
      dispatch({
        type: 'RECEIVE_ASSISTANT_MESSAGE',
        payload: {
          chatId: activeChatId,
          message: {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            text: result.answer,
            createdAt: new Date().toISOString(),
            status: 'sent',
            kind: 'text',
            meta: { source: 'backend', model: result.model },
          },
        },
      });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: { error: resolveAssistantError(error, language as 'ru' | 'en') },
      });
    } finally {
      dispatch({ type: 'SET_SUBMITTING', payload: { value: false } });
    }
  }

  const labels =
    language === 'ru'
      ? {
          title: 'AI Ассистент',
          newChat: 'Новый чат',
          deleteChat: 'Удалить чат',
          history: 'История чатов',
          askPlaceholder: 'Введите вопрос...',
          send: 'Отправить',
          noChats: 'Чатов пока нет',
          noMessages: 'Начните диалог с ассистентом',
        }
      : {
          title: 'AI Assistant',
          newChat: 'New chat',
          deleteChat: 'Delete chat',
          history: 'Chat history',
          askPlaceholder: 'Type your question...',
          send: 'Send',
          noChats: 'No chats yet',
          noMessages: 'Start the conversation',
        };

  return (
    <Box sx={{ p: 3, height: 'calc(100vh - 56px)' }}>
      <AiAssistantUi
        chats={state.chats}
        activeChatId={state.activeChatId}
        isHistoryOpen={state.isHistoryOpen}
        draft={state.draft}
        isSubmitting={state.isSubmitting}
        error={state.error}
        labels={labels}
        onDraftChange={(value) => dispatch({ type: 'SET_DRAFT', payload: { draft: value } })}
        onSendQuestion={handleSendQuestion}
        onStartNewChat={handleStartNewChat}
        onDeleteChat={(chatId) => dispatch({ type: 'DELETE_CHAT', payload: { chatId } })}
        onToggleHistory={() => dispatch({ type: 'TOGGLE_HISTORY' })}
        onSelectChat={(chatId) => dispatch({ type: 'SELECT_CHAT', payload: { chatId } })}
      />
    </Box>
  );
}
