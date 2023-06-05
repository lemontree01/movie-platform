import { StyleDecorator } from './decorators/StyleDecorator';
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from './decorators/ThemeDecorator';
import { RouterDecorator } from './decorators/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator('dark'), RouterDecorator]
};

export default preview;
