import { Box, Button, TextField } from '@mui/material';

interface ChatComposerProps {
  value: string;
  placeholder: string;
  sendLabel: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function ChatComposer(props: ChatComposerProps) {
  const { value, placeholder, sendLabel, disabled, onChange, onSubmit } = props;

  return (
    <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', gap: 1 }}>
      <TextField
        fullWidth
        size="small"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (!disabled) {
              onSubmit();
            }
          }
        }}
      />
      <Button variant="contained" disabled={disabled} onClick={onSubmit}>
        {sendLabel}
      </Button>
    </Box>
  );
}
