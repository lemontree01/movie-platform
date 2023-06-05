import i18n from 'shared/config/i18n/i18n';

export const LanguageSwitcher: React.FC<
React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((e) => {
      console.log(e);
    });
  };
  return (
    <button {...props} onClick={handleClick}>
      click
    </button>
  );
};
