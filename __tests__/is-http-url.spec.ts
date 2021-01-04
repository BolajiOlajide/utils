import { isUrl } from '../src';


describe('isUrl', (): void => {
  test('returns "true" if argument is a valid HTTP URL', (): void => {
    const result: boolean = isUrl('https://anniemusic.app');
    expect(result).toBe(true);
  });

  test('returns "false" if argument isn\'t a HTTP url', (): void => {
    const result: boolean = isUrl('spotify:track:1YLJVmuzeM2YSUkCCaTNUB');
    expect(result).toBe(false);
  });

  test('returns "false" if argument is an invalid URL', (): void => {
    const result: boolean = isUrl('https://a');
    expect(result).toBe(false);
  });

  test('returns "false" if argument is a normal string', (): void => {
    const result: boolean = isUrl('proton');
    expect(result).toBe(false);
  });
});
