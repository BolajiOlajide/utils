/**
 * Returns a function that runs only once
 *
 * @param {Function}  fn    the function to be made to run only once
 *
 * @returns {Function}      the function that runs only once
 */
const runOnce = function (fn: Function): Function | undefined {
  let hasRun = false;

  return (...args: any): any => {
    if (hasRun) {
      return undefined;
    }

    hasRun = true;
    return fn(...args);
  };
};

export default runOnce;
