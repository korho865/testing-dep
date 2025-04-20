import { render, screen } from '@testing-library/react';
import NewProject from './NewProject';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

test('renders title input field', () => {
  render(<NewProject onAdd={() => {}} onCancel={() => {}} />);
  const input = screen.getByLabelText(/title/i);
  expect(input).toBeInTheDocument();
});
