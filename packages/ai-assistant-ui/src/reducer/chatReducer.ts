import type { ChatMessage, ChatSession } from '../types';

export interface ChatState {
  chats: ChatSession[];
  activeChatId: string | null;
  isHistoryOpen: boolean;
  draft: string;
  isSubmitting: boolean;
  error: string | null;
}

export type ChatAction =
  | { type: 'SET_DRAFT'; payload: { draft: string } }
  | { type: 'START_NEW_CHAT'; payload: { chat: ChatSession } }
  | { type: 'SELECT_CHAT'; payload: { chatId: string } }
  | { type: 'DELETE_CHAT'; payload: { chatId: string } }
  | { type: 'TOGGLE_HISTORY' }
  | { type: 'SEND_QUESTION'; payload: { message: ChatMessage } }
  | { type: 'SET_SUBMITTING'; payload: { value: boolean } }
  | { type: 'SET_ERROR'; payload: { error: string | null } }
  | { type: 'RECEIVE_ASSISTANT_MESSAGE'; payload: { chatId: string; message: ChatMessage } };

export function createInitialChatState(): ChatState {
  return {
    chats: [],
    activeChatId: null,
    isHistoryOpen: true,
    draft: '',
    isSubmitting: false,
    error: null,
  };
}

export function createNewChat(chatId: string, nowIso: string): ChatSession {
  return {
    id: chatId,
    title: 'Новый чат',
    createdAt: nowIso,
    updatedAt: nowIso,
    messages: [],
  };
}

export function createUserMessage(input: {
  id: string;
  text: string;
  createdAt: string;
}): ChatMessage {
  return {
    id: input.id,
    role: 'user',
    text: input.text,
    createdAt: input.createdAt,
    status: 'sent',
    kind: 'text',
  };
}

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'SET_DRAFT':
      return { ...state, draft: action.payload.draft };

    case 'START_NEW_CHAT':
      return {
        ...state,
        chats: [action.payload.chat, ...state.chats],
        activeChatId: action.payload.chat.id,
        error: null,
      };

    case 'SELECT_CHAT':
      return { ...state, activeChatId: action.payload.chatId };

    case 'DELETE_CHAT': {
      const chats = state.chats.filter((chat) => chat.id !== action.payload.chatId);
      const activeChatId =
        state.activeChatId === action.payload.chatId ? (chats[0]?.id ?? null) : state.activeChatId;

      return {
        ...state,
        chats,
        activeChatId,
      };
    }

    case 'TOGGLE_HISTORY':
      return { ...state, isHistoryOpen: !state.isHistoryOpen };

    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.payload.value };

    case 'SET_ERROR':
      return { ...state, error: action.payload.error };

    case 'SEND_QUESTION': {
      if (!state.activeChatId) {
        return state;
      }

      const chats = state.chats.map((chat) => {
        if (chat.id !== state.activeChatId) {
          return chat;
        }

        return {
          ...chat,
          updatedAt: action.payload.message.createdAt,
          title: resolveChatTitle(chat.title, action.payload.message.text),
          messages: [...chat.messages, action.payload.message],
        };
      });

      return {
        ...state,
        chats,
        draft: '',
        error: null,
      };
    }

    case 'RECEIVE_ASSISTANT_MESSAGE': {
      const chats = state.chats.map((chat) => {
        if (chat.id !== action.payload.chatId) {
          return chat;
        }

        return {
          ...chat,
          updatedAt: action.payload.message.createdAt,
          messages: [...chat.messages, action.payload.message],
        };
      });

      return { ...state, chats };
    }

    default:
      return state;
  }
}

function resolveChatTitle(currentTitle: string, question: string): string {
  if (currentTitle !== 'Новый чат') {
    return currentTitle;
  }

  const trimmed = question.trim();
  if (!trimmed) {
    return currentTitle;
  }

  const max = 32;
  return trimmed.length <= max ? trimmed : `${trimmed.slice(0, max)}...`;
}
