import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Modal from '../components/Modal';

describe('Modal', () => {
  const testId = 'test-modal';
  it('Renders Modal', () => {
    render(<Modal show={true} onClose={() => {}} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
