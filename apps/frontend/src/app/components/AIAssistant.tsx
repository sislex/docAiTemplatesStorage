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

import { useTheme } from './ThemeContext';

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

  function handleSendQuestion(question: string) {
    const text = question.trim();
    if (!text || !state.activeChatId) {
      return;
    }

    const now = new Date().toISOString();
    const activeChatId = state.activeChatId;
    dispatch({
      type: 'SEND_QUESTION',
      payload: {
        message: createUserMessage({ id: `user-${Date.now()}`, text, createdAt: now }),
      },
    });

    // Frontend-only prototype: assistant response is mocked until model integration.
    setTimeout(() => {
      dispatch({
        type: 'RECEIVE_ASSISTANT_MESSAGE',
        payload: {
          chatId: activeChatId,
          message: {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            text:
              language === 'ru'
                ? `Принял вопрос: "${text}". На этом этапе UI работает без подключения моделей.`
                : `Received your question: "${text}". This UI currently runs without model integration.`,
            createdAt: new Date().toISOString(),
            status: 'sent',
            kind: 'text',
            meta: { source: 'mock' },
          },
        },
      });
    }, 350);
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
