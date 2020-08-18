import { generateRandomColor } from '../src';


describe('Generate random Code', (): void => {
  let randomColor: string;

  beforeAll((): void => {
    randomColor = generateRandomColor();
  });

  test('returns a random code', (): void => {
    expect(randomColor.length).toEqual(6);
  });
});
