import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import DetailsCard from '../components/DetailsCard';
import photosData from '../data/photos';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('Details Card', () => {
  it('Render Details Card from title', async () => {
    render(
      <Provider store={store}>
        <DetailsCard id={photosData[0].id} handleClose={() => {}} />
      </Provider>
    );

    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });
});
