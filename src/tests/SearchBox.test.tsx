import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchBox from '../components/SearchBox';

describe('SearchBox', () => {
  it('Renders SearchBox button', () => {
    render(<SearchBox handleSearch={() => {}} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Renders SearchBox input', () => {
    render(<SearchBox handleSearch={() => {}} />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
