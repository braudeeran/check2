import { render, screen } from '@testing-library/react';
import Main from './App';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  screen.debug();
  expect(linkElement).toBeInTheDocument();
});
