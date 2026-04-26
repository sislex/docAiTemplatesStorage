import type { Meta, StoryObj } from '@storybook/angular';

import { KeyEditorComponent } from './key-editor.component';

const meta: Meta<KeyEditorComponent> = {
  title: 'Components/KeyEditor',
  component: KeyEditorComponent,
  tags: ['autodocs'],
  argTypes: { keysChange: { action: 'keysChange' } },
};
export default meta;
type Story = StoryObj<KeyEditorComponent>;

export const Empty: Story = { args: { keys: [] } };

export const WithKeys: Story = {
  args: {
    keys: [
      { name: 'fullName', type: 'string', label: 'Полное имя', required: true },
      { name: 'date', type: 'date', label: 'Дата', required: true },
      { name: 'amount', type: 'number', label: 'Сумма', required: false },
    ],
  },
};
