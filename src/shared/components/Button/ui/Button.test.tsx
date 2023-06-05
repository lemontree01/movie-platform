import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/components/Button';

describe('Button', () => {
  test('Simple render', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  test('Render with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
    screen.debug();
  });
});
