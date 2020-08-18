import { generateShortCode } from '../src';


describe('Generate Short Code', (): void => {
  test('returns a short code', (): void => {
    const shortcode: string = generateShortCode();

    expect(typeof shortcode).toEqual('string');
  });
});
