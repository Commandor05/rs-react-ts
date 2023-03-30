import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Forms from '../pages/Forms';

describe('Forms', () => {
  it('Render Forms', () => {
    render(<Forms />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
