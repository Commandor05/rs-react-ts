import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardsList, { NO_DATA_MESSAGE } from '../components/CardsList';

import productsData from '../data/products';

describe('CardsList', () => {
  it('Render Not found data message for empty items input', () => {
    render(<CardsList items={[]} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(NO_DATA_MESSAGE);
  });

  it('Render Card from list', () => {
    render(<CardsList items={[productsData[0]]} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(productsData[0].title);
  });

  it('Render all Cards from list', () => {
    render(<CardsList items={productsData} />);
    expect(screen.getAllByRole('heading', { level: 3 }).length).toEqual(productsData.length);
  });
});
