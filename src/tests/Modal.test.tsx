import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import jest from 'jest-mock';

import Modal from '../components/Modal';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  const testId = 'test-modal';

  it('Renders Modal', async () => {
    render(
      <Modal show={true} onClose={() => {}}>
        <div>Test</div>
      </Modal>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  it('Modal onClose callback is fired', async () => {
    const handleClose = jest.fn();
    render(
      <Modal show={true} onClose={handleClose}>
        <div>Test</div>
      </Modal>
    );
    const user = userEvent.setup();
    await user.click(screen.getByTestId(testId));
    expect(handleClose).toBeCalledTimes(1);
  });
});
