import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Home from '../pages/Home';

describe('Home', () => {
  it('Fetch and display photo cards', async () => {
    const { findByText } = render(<Home />);
    expect(await findByText('a large city with lots of tall buildings')).toBeInTheDocument();
  });
});
