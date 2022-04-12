import { render, screen } from '@testing-library/react';
import { Home } from './Home';

it('should render the page title', () => {
  render(<Home />);
  const h1Element = screen.getByText(/home/i);
  expect(h1Element).toBeInTheDocument();
});