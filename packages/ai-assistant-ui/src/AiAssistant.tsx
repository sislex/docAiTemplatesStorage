import { Menu as MenuIcon } from '@mui/icons-material';
import { Alert, Box, IconButton, Paper, Typography } from '@mui/material';

import { ChatComposer } from './ChatComposer';
import { ChatHistoryPanel } from './ChatHistoryPanel';
import { ChatThreadView } from './ChatThreadView';
import { DEFAULT_LABELS } from './labels';
import type { AiAssistantProps } from './types';

export function AiAssistant(props: AiAssistantProps) {
  const {
    chats,
    activeChatId,
    isHistoryOpen,
    draft,
    isSubmitting,
    error,
    labels,
    onDraftChange,
    onSendQuestion,
    onStartNewChat,
    onDeleteChat,
    onToggleHistory,
    onSelectChat,
  } = props;

  const uiLabels = { ...DEFAULT_LABELS, ...(labels ?? {}) };
  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const submitDisabled = isSubmitting || draft.trim().length === 0 || activeChatId === null;

  return (
    <Paper sx={{ height: '100%', minHeight: 560, display: 'flex', overflow: 'hidden' }}>
      {isHistoryOpen ? (
        <ChatHistoryPanel
          chats={chats}
          activeChatId={activeChatId}
          noChatsLabel={uiLabels.noChats}
          onStartNewChat={onStartNewChat}
          onDeleteChat={onDeleteChat}
          onSelectChat={onSelectChat}
          newChatLabel={uiLabels.newChat}
          deleteChatLabel={uiLabels.deleteChat}
          historyLabel={uiLabels.history}
        />
      ) : null}

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box
          sx={{
            p: 1.5,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton size="small" onClick={onToggleHistory} aria-label={uiLabels.history}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {uiLabels.title}
          </Typography>
        </Box>

        {error ? (
          <Box sx={{ p: 2, pb: 0 }}>
            <Alert severity="error">{error}</Alert>
          </Box>
        ) : null}

        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <ChatThreadView activeChat={activeChat} noMessagesLabel={uiLabels.noMessages} />
        </Box>

        <ChatComposer
          value={draft}
          placeholder={uiLabels.askPlaceholder}
          sendLabel={uiLabels.send}
          disabled={submitDisabled}
          onChange={onDraftChange}
          onSubmit={() => onSendQuestion(draft)}
        />
      </Box>
    </Paper>
  );
}
