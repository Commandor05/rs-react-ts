import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import DetailsCard from '../components/DetailsCard';

import photosData from '../data/photos';

describe('Details Card', () => {
  it('Render Details Card from title', () => {
    render(<DetailsCard item={photosData[0]} handleClose={() => {}} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      photosData[0].alt_description as string
    );
  });
});
