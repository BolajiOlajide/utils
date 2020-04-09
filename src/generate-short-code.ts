/**
 * generate a not so unique shortcode
 *
 * @returns {string}     shortcode     not so unique shortcode
 */
const generateShortCode = (): string =>
  Math.floor(Math.random() * Number('9'.padEnd(5, '0'))) + Number('1'.padEnd(5, '0')).toString();

export default generateShortCode;
