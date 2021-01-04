import { sentencize } from '../src';


describe('sentencize', (): void => {
  test('capitalizes all words separated by the separator', (): void => {
    const result: string = sentencize('apple_music', '_');
    expect(result).toEqual('Apple Music');
  });

  // eslint-disable-next-line max-len
  test('returns a capitalize string with the first letter in caps even when it\'s all caps', (): void => {
    const result: string = sentencize('SPOTIFY');
    expect(result).toEqual('Spotify');
  });

  // eslint-disable-next-line max-len
  test('returns a capitalize string with the first letter in caps even when it\'s not all caps', (): void => {
    const result: string = sentencize('deezer');
    expect(result).toEqual('Deezer');
  });
});
