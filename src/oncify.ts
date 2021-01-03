/**
 * Returns a function that runs only once
 *
 * @param {Function}  fn    the function to be made to run only once
 *
 * @returns {Function}      the function that runs only once
 */
const oncify = function (fn: Function): Function {
  if (typeof fn !== "function") {
    throw TypeError(
      `Argument of type ${typeof fn} is not assignable to parameter of type 'Function'`
    );
  }
  let hasRun = false;
  return (...args: any) => {
    if (hasRun === false) {
      hasRun = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

export default oncify;
