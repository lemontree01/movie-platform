import styles from './NavBar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface NavBarProps {
  classNames?: string
}

export const NavBar: React.FC<NavBarProps> = ({ classNames }) => {
  return (
    <div className={`${classNames} ${styles.navbar}`}>
      <AppLink to="/about">About</AppLink>
      <AppLink to="/">Main</AppLink>
    </div>
  )
}
