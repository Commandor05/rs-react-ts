const isImageFileValid = (files: FileList) => {
  const fileType = files[0]?.type;
  const result =
    fileType === 'image/jpeg' ||
    fileType === 'image/png' ||
    fileType === 'image/gif' ||
    'File with image is expected';
  return result;
};

export { isImageFileValid };
