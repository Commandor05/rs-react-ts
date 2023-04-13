import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardsList, { NO_DATA_MESSAGE } from '../components/CardsList';

import photosData from '../data/photos';

describe('CardsList', () => {
  it('Render Not found data message for empty items input', () => {
    render(<CardsList items={[]} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(NO_DATA_MESSAGE);
  });

  it('Render Card from list', () => {
    render(<CardsList items={[photosData[0]]} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      photosData[0].alt_description as string
    );
  });

  it('Render all Cards from list', () => {
    render(<CardsList items={photosData} />);
    expect(screen.getAllByRole('heading', { level: 3 }).length).toEqual(photosData.length);
  });
});
