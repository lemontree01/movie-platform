import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '../../../../../.storybook/decorators/ThemeDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar
};

export default meta;
type Story = StoryObj<typeof Sidebar>

export const Primary: Story = {
  render: () => <Sidebar />,
  decorators: [ThemeDecorator('light')]
};
