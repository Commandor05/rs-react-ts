import { describe, it } from 'vitest';
import { act, render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';

describe('Home', () => {
  it('Fetch and display photo cards', async () => {
    await act(async () => {
      render(<Home />);
    });
    expect(await screen.findByText('a large city with lots of tall buildings')).toBeInTheDocument();
  });

  it('Fetch and display photo cards using search', async () => {
    await act(async () => {
      render(<Home />);
    });
    await waitFor(() => {
      expect(screen.getByRole('searchbox')).toHaveValue('');
    });
    await act(async () => {
      userEvent.type(screen.getByRole('searchbox'), 'test');
    });
    await waitFor(() => {
      expect(screen.getByRole('searchbox')).toHaveValue('test');
    });
    await act(async () => {
      userEvent.click(screen.getByRole('button'));
    });
    expect(await screen.findByText('Ben Mullins')).toBeInTheDocument();
  });
});
