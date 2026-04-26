import {
  chatReducer,
  createInitialChatState,
  createNewChat,
  createUserMessage,
  type ChatState,
} from './chatReducer';

describe('chatReducer', () => {
  it('starts a new chat and sets it active', () => {
    const start = createInitialChatState();
    const chat = createNewChat('chat-1', '2026-04-26T10:00:00.000Z');

    const next = chatReducer(start, { type: 'START_NEW_CHAT', payload: { chat } });

    expect(next.chats).toHaveLength(1);
    expect(next.activeChatId).toBe('chat-1');
    expect(next.chats[0]?.title).toBe('Новый чат');
  });

  it('toggles history visibility', () => {
    const start = createInitialChatState();

    const next = chatReducer(start, { type: 'TOGGLE_HISTORY' });

    expect(next.isHistoryOpen).toBe(false);
  });

  it('appends user message to active chat and clears draft', () => {
    const chat = createNewChat('chat-1', '2026-04-26T10:00:00.000Z');
    const start: ChatState = {
      chats: [chat],
      activeChatId: 'chat-1',
      isHistoryOpen: true,
      draft: 'Как заполнить шаблон?',
      isSubmitting: false,
      error: null,
    };

    const message = createUserMessage({
      id: 'msg-1',
      text: 'Как заполнить шаблон?',
      createdAt: '2026-04-26T10:00:01.000Z',
    });

    const next = chatReducer(start, { type: 'SEND_QUESTION', payload: { message } });

    expect(next.chats[0]?.messages).toHaveLength(1);
    expect(next.chats[0]?.messages[0]?.text).toBe('Как заполнить шаблон?');
    expect(next.draft).toBe('');
    expect(next.error).toBeNull();
  });

  it('sets active chat from history', () => {
    const first = createNewChat('chat-1', '2026-04-26T10:00:00.000Z');
    const second = createNewChat('chat-2', '2026-04-26T10:01:00.000Z');
    const start: ChatState = {
      chats: [first, second],
      activeChatId: 'chat-1',
      isHistoryOpen: true,
      draft: '',
      isSubmitting: false,
      error: null,
    };

    const next = chatReducer(start, { type: 'SELECT_CHAT', payload: { chatId: 'chat-2' } });

    expect(next.activeChatId).toBe('chat-2');
  });

  it('deletes non-active chat and keeps current active chat', () => {
    const first = createNewChat('chat-1', '2026-04-26T10:00:00.000Z');
    const second = createNewChat('chat-2', '2026-04-26T10:01:00.000Z');
    const start: ChatState = {
      chats: [first, second],
      activeChatId: 'chat-1',
      isHistoryOpen: true,
      draft: '',
      isSubmitting: false,
      error: null,
    };

    const next = chatReducer(start, { type: 'DELETE_CHAT', payload: { chatId: 'chat-2' } });

    expect(next.chats).toHaveLength(1);
    expect(next.chats[0]?.id).toBe('chat-1');
    expect(next.activeChatId).toBe('chat-1');
  });

  it('deletes active chat and switches active chat to first remaining one', () => {
    const first = createNewChat('chat-1', '2026-04-26T10:00:00.000Z');
    const second = createNewChat('chat-2', '2026-04-26T10:01:00.000Z');
    const start: ChatState = {
      chats: [first, second],
      activeChatId: 'chat-1',
      isHistoryOpen: true,
      draft: '',
      isSubmitting: false,
      error: null,
    };

    const next = chatReducer(start, { type: 'DELETE_CHAT', payload: { chatId: 'chat-1' } });

    expect(next.chats).toHaveLength(1);
    expect(next.chats[0]?.id).toBe('chat-2');
    expect(next.activeChatId).toBe('chat-2');
  });

  it('deletes the last chat and resets activeChatId to null', () => {
    const only = createNewChat('chat-1', '2026-04-26T10:00:00.000Z');
    const start: ChatState = {
      chats: [only],
      activeChatId: 'chat-1',
      isHistoryOpen: true,
      draft: '',
      isSubmitting: false,
      error: null,
    };

    const next = chatReducer(start, { type: 'DELETE_CHAT', payload: { chatId: 'chat-1' } });

    expect(next.chats).toHaveLength(0);
    expect(next.activeChatId).toBeNull();
  });
});
