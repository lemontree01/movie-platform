import { fireEvent, screen } from '@testing-library/react';
import { RenderWithTranslations } from 'shared/lib/renderWithTranslations/RenderWithTranslations';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    RenderWithTranslations(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Collapse sidebar', () => {
    RenderWithTranslations(<Sidebar/>);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });
});
