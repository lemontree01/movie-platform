import { Link, type LinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  classNames?: string
}

export const AppLink: React.FC<AppLinkProps> = ({
  children,
  classNames,
  to,
  ...props
}) => {
  return (
    <Link {...{ to, props }} className={`${classNames} ${styles['app-link']}`}>
      {children}
    </Link>
  )
}
