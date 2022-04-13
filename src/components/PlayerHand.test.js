import { render, screen, fireEvent } from '@testing-library/react';
import { PlayerHand } from './PlayerHand';

const Button = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

it('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  // render(<PlayerHand />);
  render(<Button onClick={handleClick}>Draw card</Button>)
  fireEvent.click(screen.getByText(/draw card/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
});