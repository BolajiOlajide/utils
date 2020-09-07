import { isDict } from '../src';


describe('isDict', (): void => {
  test('returns "true" if argument is a dictionary', (): void => {
    const result: boolean = isDict({ name: 'Bolaji' });
    expect(result).toBe(true);
  });

  test('returns "false" if argument isn\'t a dictionary', (): void => {
    const result: boolean = isDict(['Bolaji']);
    expect(result).toBe(false);
  });
});
