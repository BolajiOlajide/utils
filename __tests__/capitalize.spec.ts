import { capitalize } from '../src';


describe('capitalize', (): void => {
  test('returns a capitalize string with the first letter in caps', (): void => {
    const result: string = capitalize('bolaji');
    expect(result).toEqual('Bolaji');
  });

  // eslint-disable-next-line max-len
  test('returns a capitalize string with the first letter in caps even when it\'s all caps', (): void => {
    const result: string = capitalize('SPOTIFY');
    expect(result).toEqual('Spotify');
  });

  // eslint-disable-next-line max-len
  test('returns a capitalize string with the first letter in caps even when it\'s not all caps', (): void => {
    const result: string = capitalize('dEEZER');
    expect(result).toEqual('Deezer');
  });
});
