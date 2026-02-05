import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tekmedia', () => {
  render(<App />);
  expect(screen.getByText(/tekmedia/i)).toBeInTheDocument();
});
