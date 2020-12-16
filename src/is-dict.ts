/**
 * checks if a literal is a dictionary
 *
 * @param   {any}         content -      item to be checked
 * @returns {boolean}     result         variable that shows if the content is a dictionary
 */
const isDict = (content: any): boolean => content.constructor === Object;

export default isDict;
