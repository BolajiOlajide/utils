type SliceValue = string[] | string;


const convertSliceToString = (sliceValue: SliceValue, separator: string = ''): string => {
  return typeof sliceValue === 'string' ? sliceValue : sliceValue.join(separator);
};

export default convertSliceToString;
