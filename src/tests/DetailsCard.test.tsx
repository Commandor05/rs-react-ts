import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import DetailsCard from '../components/DetailsCard';

import photosData from '../data/photos';

describe('Details Card', () => {
  it('Render Details Card from title', async () => {
    await act(async () => {
      render(<DetailsCard id={photosData[0].id} handleClose={() => {}} />);
    });
    expect(await screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      photosData[0].alt_description as string
    );
  });
});
