import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import type { ChatSession } from './types';

interface ChatHistoryPanelProps {
  chats: ChatSession[];
  activeChatId: string | null;
  noChatsLabel: string;
  onStartNewChat: () => void;
  onDeleteChat: (chatId: string) => void;
  onSelectChat: (chatId: string) => void;
  newChatLabel: string;
  deleteChatLabel: string;
  historyLabel: string;
}

export function ChatHistoryPanel(props: ChatHistoryPanelProps) {
  const {
    chats,
    activeChatId,
    noChatsLabel,
    onStartNewChat,
    onDeleteChat,
    onSelectChat,
    newChatLabel,
    deleteChatLabel,
    historyLabel,
  } = props;

  return (
    <Box
      sx={{
        width: 280,
        borderRight: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {historyLabel}
        </Typography>
        <Button variant="contained" onClick={onStartNewChat}>
          {newChatLabel}
        </Button>
      </Box>
      <Divider />
      <List sx={{ overflowY: 'auto', flex: 1 }}>
        {chats.length === 0 ? (
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {noChatsLabel}
            </Typography>
          </Box>
        ) : (
          chats.map((chat) => (
            <ListItemButton
              key={chat.id}
              selected={chat.id === activeChatId}
              onClick={() => onSelectChat(chat.id)}
            >
              <ListItemText
                primary={chat.title}
                secondary={new Date(chat.updatedAt).toLocaleString()}
                primaryTypographyProps={{ noWrap: true }}
              />
              <IconButton
                size="small"
                edge="end"
                aria-label={`${deleteChatLabel}: ${chat.title}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onDeleteChat(chat.id);
                }}
              >
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </ListItemButton>
          ))
        )}
      </List>
    </Box>
  );
}
