import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { TemplateCardComponent } from './template-card.component';

const meta: Meta<TemplateCardComponent> = {
  title: 'Components/TemplateCard',
  component: TemplateCardComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [NoopAnimationsModule] })],
  argTypes: { open: { action: 'open' }, download: { action: 'download' } },
};
export default meta;
type Story = StoryObj<TemplateCardComponent>;

export const Default: Story = {
  args: {
    name: 'Договор аренды',
    category: 'Legal',
    description: 'Стандартный договор',
    keysCount: 7,
  },
};

export const NoCategory: Story = {
  args: { name: 'Простой документ', keysCount: 2 },
};
