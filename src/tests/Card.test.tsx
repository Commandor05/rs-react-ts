import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '../components/Card';

import photosData from '../data/photos';

describe('Card', () => {
  it('Render Card from title', () => {
    render(<Card item={photosData[0]} handleCardDetails={() => {}} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      photosData[0].alt_description as string
    );
  });

  it('Render Cards from description', () => {
    render(<Card item={photosData[0]} handleCardDetails={() => {}} />);
    expect(screen.getByAltText(`${photosData[0].alt_description}`)).toBeInTheDocument();
  });
});
