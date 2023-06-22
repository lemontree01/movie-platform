import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = ({ theme = ButtonTheme.CLEAR, className, children, ...props }) => {
  return <button className={`${className} ${theme} ${styles.button}`} {...props}>{children}</button>;
};
