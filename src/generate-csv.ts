type csvRecord = {
  [key: string]: string | number
}

type csvRecords = csvRecord[]

/**
 * generate a CSV based on an array of records
 *
 * @param   {Array}     records -     record to be converted to CSV
 * @returns {string}    result         CSV string
 */
const generateCSV = (records: csvRecords): null | string => {
  let result: string, ctr: number;

  if (records === null || !records.length) {
    return null;
  }

  const columnDelimiter = ',';
  const lineDelimiter = '\n';

  // this should be the headers to be used for the CSV
  const keys = Object.keys(records[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  records.forEach((item: csvRecord) => {
    ctr = 0;
    keys.forEach((key: string) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr += 1
    });
    result += lineDelimiter;
  });

  return result;
}

export default generateCSV;
