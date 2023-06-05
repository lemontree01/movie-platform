import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';

export const PageError = () => {
  const { t } = useTranslation('');
  return (
    <div>
      <p>{t('page-error-header')}</p>
      <Button onClick={location.reload.bind(location)}>{t('page-error-button')}</Button>
    </div>
  );
};
