import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'AppLink',
  component: AppLink,
  args: { to: '/' }

};

export default meta;
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  // @ts-expect-error passed arg
  render: () => <AppLink>Hello</AppLink>,
  decorators: []
};
