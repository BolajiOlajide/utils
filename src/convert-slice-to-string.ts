type SliceValue = string[] | string;


// eslint-disable-next-line arrow-body-style
const convertSliceToString = (sliceValue: SliceValue, separator: string = ''): string => {
  return typeof sliceValue === 'string' ? sliceValue : sliceValue.join(separator);
};

export default convertSliceToString;
