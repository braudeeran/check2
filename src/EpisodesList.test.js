import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';
import EpisodesList from './EpisodesList';
import Main from './Main';


test('renders learn react link', () => {

  render(<Episodes />);
//   const linkElement = screen.getByText(/learn react/i);
  screen.debug();
});