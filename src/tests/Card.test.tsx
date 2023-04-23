import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import jest from 'jest-mock';

import Card from '../components/Card';

import photosData from '../data/photos';
import userEvent from '@testing-library/user-event';

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

  it('Details Card callback is fired', async () => {
    const handleCardDetails = jest.fn();
    await act(async () => {
      render(
        <Card item={photosData[0]} handleCardDetails={() => handleCardDetails(photosData[0])} />
      );
    });
    const user = userEvent.setup();
    expect(screen.getByTestId('get-details')).toBeInTheDocument();
    await user.click(screen.getByTestId('get-details'));
    expect(handleCardDetails).toBeCalledTimes(1);
  });
});
