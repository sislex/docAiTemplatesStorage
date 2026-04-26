import { Box, Paper, Typography } from '@mui/material';

import type { ChatSession } from './types';

interface ChatThreadViewProps {
  activeChat: ChatSession | undefined;
  noMessagesLabel: string;
}

export function ChatThreadView({ activeChat, noMessagesLabel }: ChatThreadViewProps) {
  const messages = activeChat?.messages ?? [];

  if (messages.length === 0) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {noMessagesLabel}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {messages.map((message) => {
        const isUser = message.role === 'user';

        return (
          <Paper
            key={message.id}
            variant="outlined"
            sx={{
              p: 1.5,
              alignSelf: isUser ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              bgcolor: isUser ? 'primary.main' : 'background.paper',
              color: isUser ? 'primary.contrastText' : 'text.primary',
              borderRadius: 2,
            }}
          >
            <Typography variant="body2">{message.text}</Typography>
          </Paper>
        );
      })}
    </Box>
  );
}
