import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/Router/ui/AppRouter';
import { NavBar } from 'widgets/NavBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Suspense, useState } from 'react';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/components/Modal/ui/Modal';

export const App = () => {
  const [theme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>loading...</div>}>
        <LanguageSwitcher/>
        <ThemeSwitcher />
        <NavBar />
        <Sidebar />
        <AppRouter />
        <button onClick={() => { setIsOpen(!isOpen); }}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => { setIsOpen(false); }}>hrrlo</Modal>
      </Suspense>
    </div>
  );
};
