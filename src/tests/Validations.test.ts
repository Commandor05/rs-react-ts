import { describe, it } from 'vitest';
import avatar from '../assets/ava.png';

import { isImageFileValid } from '../utils/Validations';

const getFileList = (file: File) => {
  const fileList: FileList = {
    0: file,
    length: 1,
    item: (index: number) => file,
    [Symbol.iterator]: function (): IterableIterator<File> {
      throw new Error('Function not implemented.');
    },
  };
  return fileList;
};

describe('Validations', () => {
  it('JSON file shuld return validation message', () => {
    const blob = new Blob(['']);
    const file = new File([blob], 'text.html', {
      type: 'text/html',
    });
    const fileList = getFileList(file);
    const test = isImageFileValid(fileList);
    expect(test).toContain('File with image is expected');
  });

  it('Image file shuld be valid', () => {
    const blob = new Blob([avatar]);
    const file = new File([blob], 'picture.pmg', {
      type: 'image/jpeg',
    });
    const fileList = getFileList(file);
    const test = isImageFileValid(fileList);
    expect(test).toBeTruthy();
  });
});
