/**
 * An attempt at manual pagination
 *
 * @param {number}  limit   the max amount of items in the slice
 * @param {number}  page    the page to retrieve
 * @param {Array}   data    the list of records to be paginated
 *
 * @returns {Array}        a slice of the array containing fewer records
 */
const paginate = <T>(limit: number, page: number, data: T[]): T[] => {
  const offset = (page - 1) * limit;
  const newLimit = offset + limit;
  return data.slice(offset, newLimit);
};

export default paginate;
