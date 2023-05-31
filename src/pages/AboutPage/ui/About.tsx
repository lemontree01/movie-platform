import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
  const { t } = useTranslation('about')
  return <div>{t('title')}</div>
}

export default About
