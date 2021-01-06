import { runOnce } from "../src";

describe('runOnce', (): void => {
  test('returns a function', (): void => {
    const result = runOnce(()=> console.log('runOnce'))
    expect(typeof result).toEqual('function')
  });

  test('returns a function that runs only once', (): void => {
    const addTogether = function(num1:number, num2:number):number{
      return num1+num2
    }
    const addTogetherOnce = runOnce(addTogether)
    let firstResult = addTogetherOnce(0,1)
    let secondResult = addTogetherOnce(0,1)
    expect(firstResult).toEqual(1)
    expect(secondResult).toBe(undefined)
  });
});
