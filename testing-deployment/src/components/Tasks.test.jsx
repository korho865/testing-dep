import { render, screen } from '@testing-library/react';
import Tasks from './Tasks';

test('renders a list of tasks', async () => {
  const tasks = [
    { id: 't1', text: 'Task One' },
    { id: 't2', text: 'Task Two' },
  ];

  render(<Tasks tasks={tasks} />);
  const items = await screen.findAllByRole('listitem');
  expect(items).toHaveLength(2);
});
