import { generateRandomColor } from '../src';


describe('Generate random Code', () => {
  let randomColor;

  beforeAll(() => {
    randomColor = generateRandomColor();
  });

  test('returns a random code', () => {
    expect(randomColor.length).toEqual(6);
  });
});
