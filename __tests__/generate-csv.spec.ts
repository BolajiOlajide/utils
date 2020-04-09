import { generateCSV } from '../src';


describe('Generate CSV', () => {
  test('returns a CSV string', () => {
    const sampleData = [
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
    const expected = `title,name,gender
Mr.,Folorunsho,Male
Miss,Williams,Female
Mrs.,Davids,Female
Miss,Oladipupo,Female
`;
    expect(generateCSV(sampleData)).toEqual(expected);
  });
});
