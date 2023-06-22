import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export const RenderTestingComponent = (component: ReactNode) => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
