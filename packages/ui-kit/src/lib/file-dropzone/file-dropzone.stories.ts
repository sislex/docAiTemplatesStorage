import type { Meta, StoryObj } from '@storybook/angular';

import { FileDropzoneComponent } from './file-dropzone.component';

const meta: Meta<FileDropzoneComponent> = {
  title: 'Components/FileDropzone',
  component: FileDropzoneComponent,
  tags: ['autodocs'],
  argTypes: {
    filesSelected: { action: 'filesSelected' },
    filesRejected: { action: 'filesRejected' },
  },
};
export default meta;
type Story = StoryObj<FileDropzoneComponent>;

export const Default: Story = {
  args: { accept: '.docx', maxSize: 20 * 1024 * 1024, placeholder: 'Перетащите DOCX сюда' },
};

export const Multiple: Story = {
  args: { accept: '.docx', multiple: true, placeholder: 'Можно несколько файлов' },
};
