import { isString } from '../src';


describe('isString', (): void => {
  test('returns "true" if argument is a string', (): void => {
    const result: boolean = isString('Bolaji');
    expect(result).toBe(true);
  });

  test('returns "false" if argument isn\'t a string', (): void => {
    const result: boolean = isString(235);
    expect(result).toBe(false);
  });
});
