import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import RadioGroup from '../components/RadioGroup';

describe('RadioGroup', () => {
  const label = 'TestLabel';
  it('Renders RadioGroup', () => {
    render(<RadioGroup name="userGender" label={label} options={['female', 'male']} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
});
