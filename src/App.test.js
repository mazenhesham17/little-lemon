import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter } from 'react-router-dom';

test('renders Hero section', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const linkElement = screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Specials section', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const linkElement = screen.getByText(/Specials/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Testimonials section', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const linkElement = screen.getByText(/Testimonials/i);
  expect(linkElement).toBeInTheDocument();
});