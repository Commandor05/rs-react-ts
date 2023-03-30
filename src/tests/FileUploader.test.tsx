import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FileUploader from '../components/FileUploader';

describe('FileUploader', () => {
  const label = 'test-modal';
  it('Renders FileUploader', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<FileUploader name="DateInput" label={label} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
});
