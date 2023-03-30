import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import UserForm from '../components/UserForm';

describe('UserForm', () => {
  it('Render UserForm', () => {
    render(<UserForm onFormSubmit={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
