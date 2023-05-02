import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Forms from '../pages/Forms';
import { Provider } from 'react-redux';
import setupStore from '../redux/store';

const store = setupStore({});

describe('Forms', () => {
  it('Render Forms', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
