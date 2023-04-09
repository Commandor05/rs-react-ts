import { describe, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';

describe('Home', () => {
  it('Fetch and display photo cards', async () => {
    const { findByText } = render(<Home />);
    expect(await findByText('a large city with lots of tall buildings')).toBeInTheDocument();
  });

  it('Fetch and display photo cards using search', async () => {
    const { findByText, getByRole } = render(<Home />);

    userEvent.type(getByRole('searchbox'), 'test');

    await waitFor(() => {
      expect(getByRole('searchbox')).toHaveValue('test');
    });

    userEvent.click(getByRole('button'));

    expect(await findByText('Ben Mullins')).toBeInTheDocument();
  });
});
