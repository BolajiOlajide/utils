/**
 * generate a not so unique shortcode
 *
 * @param   {number}     digits -      number of digits shortcode should have
 * @returns {string}     shortcode     not so unique shortcode
 */
const generateShortCode = (digits: number = 5): string =>
  Math.floor(Math.random() * Number('9'.padEnd(digits, '0'))) + Number('1'.padEnd(digits, '0')).toString();

export default generateShortCode;
