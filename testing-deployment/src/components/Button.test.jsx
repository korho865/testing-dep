import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with correct label', () => {
  render(<Button>Click me</Button>);
  const btn = screen.getByText('Click me');
  expect(btn).toBeInTheDocument();
});
