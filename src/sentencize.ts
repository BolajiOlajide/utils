import capitalize from './capitalize';

// eslint-disable-next-line arrow-body-style
const sentencize = (word: string, separator: string = ' '): string => {
  return word.split(separator).map(capitalize).join(' ');
};

export default sentencize;
