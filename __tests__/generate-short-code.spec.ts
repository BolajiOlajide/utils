import { generateShortCode } from '../src';


describe('Generate Short Code', () => {
  test('returns a short code', () => {
    const shortcode = generateShortCode();

    expect(typeof shortcode).toEqual('string');
  });
});
