import { convertSliceToString } from '../src';


describe('convertSliceToString', (): void => {
  const sampleString: string = 'iindsiuds902330432';
  const sampleString2: string = 'ds9023';

  test('returns the argument if a string is passed to the function', (): void => {
    const result: string = convertSliceToString(sampleString);
    expect(result).toEqual(sampleString);
  });

  test('returns a combination of the string slice if an array is passed as an argument', (): void => {
    const result: string = convertSliceToString([sampleString, sampleString2]);
    expect(result).toEqual(`${sampleString}${sampleString2}`);
  });

  test('returns a combination of the string slice if an array is passed as an argument with a custom separator', (): void => {
    const result: string = convertSliceToString([sampleString, sampleString2], '***');
    expect(result).toEqual(`${sampleString}***${sampleString2}`);
  });
});
