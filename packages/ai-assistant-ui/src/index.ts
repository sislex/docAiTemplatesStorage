export { AiAssistant } from './AiAssistant';
export {
  chatReducer,
  createInitialChatState,
  createNewChat,
  createUserMessage,
} from './reducer/chatReducer';
export type { ChatAction, ChatState } from './reducer/chatReducer';
export type {
  AiAssistantProps,
  AiAssistantLabels,
  ChatSession,
  ChatMessage,
  MessageAttachment,
  MessageRole,
  MessageStatus,
} from './types';
