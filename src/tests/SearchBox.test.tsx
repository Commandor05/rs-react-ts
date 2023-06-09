import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchBox from '../components/SearchBox';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('SearchBox', () => {
  it('Renders SearchBox button', () => {
    render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Renders SearchBox input', () => {
    render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
