import { generateCSV } from '../src';
import type { csvRecords } from '../src';


describe('Generate CSV', (): void => {
  test('returns a CSV string', (): void => {
    const sampleData: csvRecords = [
      {
        title: 'Mr.',
        name: 'Folorunsho',
        gender: 'Male'
      },
      {
        title: 'Miss',
        name: 'Williams',
        gender: 'Female'
      },
      {
        title: 'Mrs.',
        name: 'Davids',
        gender: 'Female'
      },
      {
        title: 'Miss',
        name: 'Oladipupo',
        gender: 'Female'
      }
    ];
    const expected: string = `title,name,gender
Mr.,Folorunsho,Male
Miss,Williams,Female
Mrs.,Davids,Female
Miss,Oladipupo,Female
`;

    expect(generateCSV(sampleData)).toEqual(expected);
  });
});
