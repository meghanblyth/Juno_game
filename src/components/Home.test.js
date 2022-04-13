import { render, screen } from '@testing-library/react';
import { Home } from './Home';

it('should render the page title', () => {
  render(<Home />);
  const h1Element = screen.getByText(/home/i);
  expect(h1Element).toBeInTheDocument();
});

it('should render the rules button', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/rules/i);
  expect(buttonElement).toBeInTheDocument();
});

it('should render the play button', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/play!/i);
  expect(buttonElement).toBeInTheDocument();
});