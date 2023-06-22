import { fireEvent, screen } from '@testing-library/react';
import { RenderTestingComponent } from 'shared/lib/RenderTestingComponent/RenderTestingComponent';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    RenderTestingComponent(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Collapse sidebar', () => {
    RenderTestingComponent(<Sidebar/>);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });
});
