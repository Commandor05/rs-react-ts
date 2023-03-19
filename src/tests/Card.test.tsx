import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '../components/Card';

import productsData from '../data/products';

describe('Card', () => {
  it('Render Card from title', () => {
    render(<Card item={productsData[0]} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(productsData[0].title);
  });

  it('Render Cards from description', () => {
    render(<Card item={productsData[0]} />);
    expect(screen.getByAltText(`${productsData[0].title} image`)).toBeInTheDocument();
  });
});
