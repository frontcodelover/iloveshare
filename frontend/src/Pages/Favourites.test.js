import { render, screen } from '@testing-library/react';
import Favourites from './Favourites';

test('renders favourites text', () => {
  render(<Favourites />);
  const textFavourites = screen.getByText('Favoris');
  expect(textFavourites).toBeInTheDocument();
});
