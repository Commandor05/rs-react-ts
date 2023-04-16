import { describe, it } from 'vitest';
import { act, render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { fetchPhotos } from '../redux/features/photos/photosSlice';

export const potosEndpoint = '/photos';

store.dispatch(fetchPhotos({ endpoint: potosEndpoint }));

describe('Home', () => {
  it('Fetch and display photo cards', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
    expect((await screen.findAllByText(/User/i)).length).toEqual(10);
  });

  it('Fetch and display photo cards using search', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
    await waitFor(() => {
      expect(screen.getByRole('searchbox')).toHaveValue('');
    });
    await act(async () => {
      userEvent.type(screen.getByRole('searchbox'), 'test');
    });
    await waitFor(() => {
      fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'test' } });
    });
    await act(async () => {
      screen.getByRole('button').click();
    });
    expect(await screen.findByText('Ben Mullins')).toBeInTheDocument();
  });
});
