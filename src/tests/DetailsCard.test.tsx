import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import jest from 'jest-mock';
import DetailsCard from '../components/DetailsCard';
import photosData from '../data/photos';
import { Provider } from 'react-redux';
import setupStore from '../redux/store';

const store = setupStore({});

describe('Details Card', () => {
  it('Render Details Card from title', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <DetailsCard id={photosData[0].id} handleClose={() => {}} />
        </Provider>
      );
    });
    const user = userEvent.setup();
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
    await user.click(screen.getByText(/Close/i));
    expect(await screen.getByText(photosData[0].user.name)).toBeInTheDocument();
  });

  it('Details Card onClose callback is fired', async () => {
    const handleClose = jest.fn();
    await act(async () => {
      render(
        <Provider store={store}>
          <DetailsCard id={photosData[0].id} handleClose={handleClose} />
        </Provider>
      );
    });
    const user = userEvent.setup();
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
    await user.click(screen.getByText(/Close/i));
    expect(handleClose).toBeCalledTimes(1);
  });
});
