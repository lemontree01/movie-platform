import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../../../../.storybook/decorators/ThemeDecorator';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button theme={ButtonTheme.CLEAR}>Click</Button>,
  decorators: [ThemeDecorator('light')]
};

export const Clear: Story = {
  render: () => <Button theme={ButtonTheme.CLEAR}>Click</Button>
};
