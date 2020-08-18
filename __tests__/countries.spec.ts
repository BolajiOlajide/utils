import { countries } from '../src';


describe('Countries', (): void => {
  test('returns a list of countries', (): void => {
    expect(countries).toEqual(expect.arrayContaining([
      'Nigeria',
      'Afghanistan',
      'Albania',
      'Paraguay',
      'Spain'
    ]));
  });
});
