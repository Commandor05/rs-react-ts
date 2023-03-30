import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';
import { NOT_FOUND_MESSAGE } from '../pages/NotFound';
import { ABOUT_TITLE } from '../pages/About';

describe('App', () => {
  it('Render Not found page for invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/fake-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(NOT_FOUND_MESSAGE);
  });

  it('Render About Us page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(ABOUT_TITLE);
  });

  it('Render Home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-page-content')).toBeInTheDocument();
  });
});
