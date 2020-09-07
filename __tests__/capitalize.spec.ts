import { capitalize } from '../src';


describe('capitalize', (): void => {
  test('returns a capitalize string with the first letter in caps', (): void => {
    const result: string = capitalize('bolaji');
    expect(result).toEqual('Bolaji');
  });
});
