import capitalize from './capitalize';

const sentencize = (word: string, separator: string = ' '): string => {
  return word.split(separator).map(capitalize).join(' ');
};

export default sentencize;
