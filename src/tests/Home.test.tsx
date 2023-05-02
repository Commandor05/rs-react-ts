import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';

import Home from '../pages/Home';
import setupStore from '../redux/store';
import { Provider } from 'react-redux';
import { photoSlice } from '../redux/features/photo/photoSlice';

export const potosEndpoint = '/photos';
const store = setupStore({});
store.dispatch(photoSlice.endpoints.fetchPhotos.initiate(potosEndpoint));
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
});
