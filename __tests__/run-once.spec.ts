import { runOnce } from '../src';

describe('runOnce', (): void => {
  test('returns a function', (): void => {
    // eslint-disable-next-line no-console
    const result = runOnce(() => console.log('runOnce'));

    expect(typeof result).toEqual('function');
  });

  test('returns a function that runs only once', (): void => {
    const addTogether = function (num1: number, num2: number): number {
      return num1 + num2;
    };

    const addTogetherOnce = runOnce(addTogether);

    const firstResult = addTogetherOnce(0, 1);
    const secondResult = addTogetherOnce(0, 1);

    expect(firstResult).toEqual(1);
    expect(secondResult).toBe(undefined);
  });
});
