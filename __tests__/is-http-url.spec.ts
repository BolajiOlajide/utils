import { isHttpUrl } from '../src';


describe('isUrl', (): void => {
  test('returns "true" if argument is a valid HTTP URL', (): void => {
    const result: boolean = isHttpUrl('https://anniemusic.app');
    expect(result).toBe(true);
  });

  test('returns "false" if argument isn\'t a HTTP url', (): void => {
    const result: boolean = isHttpUrl('spotify:track:1YLJVmuzeM2YSUkCCaTNUB');
    expect(result).toBe(false);
  });

  test('returns "false" if argument is an invalid URL', (): void => {
    const result: boolean = isHttpUrl('https://a');
    expect(result).toBe(false);
  });

  test('returns "false" if argument is a normal string', (): void => {
    const result: boolean = isHttpUrl('proton');
    expect(result).toBe(false);
  });
});
