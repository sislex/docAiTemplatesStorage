export type MessageRole = 'user' | 'assistant' | 'system';

export type MessageStatus = 'pending' | 'sent' | 'error' | 'streaming';

export interface MessageAttachment {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  url?: string;
  previewUrl?: string;
  meta?: Record<string, unknown>;
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  createdAt: string;
  status: MessageStatus;
  kind: string;
  meta?: Record<string, unknown>;
  attachments?: MessageAttachment[];
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: ChatMessage[];
  meta?: Record<string, unknown>;
}

export interface AiAssistantLabels {
  title: string;
  newChat: string;
  deleteChat: string;
  history: string;
  askPlaceholder: string;
  send: string;
  noChats: string;
  noMessages: string;
}

export interface AiAssistantProps {
  chats: ChatSession[];
  activeChatId: string | null;
  isHistoryOpen: boolean;
  draft: string;
  isSubmitting: boolean;
  error?: string | null;
  labels?: Partial<AiAssistantLabels>;
  onDraftChange: (value: string) => void;
  onSendQuestion: (question: string) => void;
  onStartNewChat: () => void;
  onDeleteChat: (chatId: string) => void;
  onToggleHistory: () => void;
  onSelectChat: (chatId: string) => void;
}
