import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import DayIcon from 'shared/assets/icons/day-icon.svg';
import NightIcon from 'shared/assets/icons/night-icon.svg';
import { Button, ButtonTheme } from 'shared/components/Button';

export const ThemeSwitcher: React.FC<
React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...otherProps }) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={`${className} ${styles.toggle}`}
      theme={ButtonTheme.CLEAR}
      {...otherProps}
    >
      {children} {theme === 'dark' ? <NightIcon width={100} height={100}/> : <DayIcon width={100} height={100}/>}
    </Button>
  );
};
