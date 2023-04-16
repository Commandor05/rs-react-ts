import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';

import About from '../pages/About';
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('About', () => {
  it('Display About page', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <About />
        </Provider>
      );
    });
    expect(await screen.findByText(/About us/i)).toBeInTheDocument();
  });
});
