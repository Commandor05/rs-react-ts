import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import DateInput from '../components/DateInput';

describe('DateInput', () => {
  const label = 'TestLabel';
  it('Renders DateInput', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<DateInput name="DateInput" label={label} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
});
