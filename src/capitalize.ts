/**
 * change a string to `capitalized`
 *
 * @param   {string}     value -     string to be capitalized
 * @returns {string}     result      capitalized string
 */
const capitalize = (value: string): string => { // eslint-disable-line arrow-body-style
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
};

export default capitalize;
