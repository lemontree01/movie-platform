import { Theme } from "../../src/app/types/themeTypes";

export const ThemeDecorator:any = (theme: Theme) => (Story: any) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
