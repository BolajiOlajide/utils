import { countries } from '../src';


describe('Countries', () => {
  test('returns a list of countries', () => {
    expect(countries).toEqual(expect.arrayContaining([
      'Nigeria',
      'Afghanistan',
      'Albania',
      'Paraguay',
      'Spain'
    ]));
  });
});
