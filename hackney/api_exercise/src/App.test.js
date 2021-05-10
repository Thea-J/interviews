import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the form', () => {
  render(<App />);
  const formElement = document.createElement('form');
  expect(formElement).toBeInTheDocument();
})