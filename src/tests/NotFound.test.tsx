import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';

import NotFound from '../pages/NotFound';
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('NotFound', () => {
  it('Display NotFound page', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <NotFound />
        </Provider>
      );
    });
    expect(await screen.findByText(/NotFound/i)).toBeInTheDocument();
  });
});
