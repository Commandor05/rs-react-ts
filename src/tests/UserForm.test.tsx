import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import UserForm from '../components/UserForm';
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('UserForm', () => {
  it('Render UserForm', () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
