import { Theme } from "../../src/app/types/themeTypes";

export const ThemeDecorator = (theme: Theme) => (Story: any) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
