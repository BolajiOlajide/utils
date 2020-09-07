import isString from './is-string';

type SliceValue = string[] | string;


const convertSliceToString = (sliceValue: SliceValue, separator: string = ''): string => {
  return isString(sliceValue) ? <string>sliceValue : (<string[]>sliceValue).join(separator);
};

export default convertSliceToString;
