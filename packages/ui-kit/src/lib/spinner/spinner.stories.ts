import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [NoopAnimationsModule] })],
};
export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Default: Story = { args: { diameter: 40 } };
export const WithLabel: Story = { args: { diameter: 50, label: 'Загрузка…' } };
export const Overlay: Story = { args: { overlay: true, label: 'Подождите…' } };
