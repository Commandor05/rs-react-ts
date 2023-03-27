import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Checkbox from '../components/Checkbox';

describe('Checkbox', () => {
  const label = 'TestLabel';
  it('Renders Checkbox', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<Checkbox name="userTerms" label={label} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
});
