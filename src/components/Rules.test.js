import { render, screen } from '@testing-library/react';
import { Rules } from './Rules';

it('should render the page title', () => {
  render(<Rules />);
  const h1Element = screen.getByText(/juno rules/i);
  expect(h1Element).toBeInTheDocument();
});

it('should render the page title', () => {
  render(<Rules />);
  const h1Element = screen.getByText(/set up/i);
  expect(h1Element).toBeInTheDocument();
});

it('should render the page title', () => {
  render(<Rules />);
  const h1Element = screen.getByText(/game play/i);
  expect(h1Element).toBeInTheDocument();
});