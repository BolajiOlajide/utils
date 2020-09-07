const UPPER_BOUND: string = '9';
const LOWER_BOUND: string = '1';
/**
 * generate a not so unique shortcode
 *
 * @returns {string}     shortcode     not so unique shortcode
 */
const generateShortCode = (): string =>
  Math.floor(Math.random() * Number(UPPER_BOUND.padEnd(5, '0'))) + Number(LOWER_BOUND.padEnd(5, '0')).toString();

export default generateShortCode;
