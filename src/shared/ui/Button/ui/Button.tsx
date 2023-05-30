export enum ButtonTheme {
  CLEAR = "clear",

}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme
  }

export const Button:React.FC<ButtonProps> = ({theme = ButtonTheme.CLEAR, className, children, ...otherProps}) => {
  console.log(theme)
  return <button className={`${className} ${theme}`} {...otherProps}>{children}</button>;
};
