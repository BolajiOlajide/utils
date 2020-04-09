import { paginate } from '../src';


describe('Paginate', () => {
  const sampleData: string[] = [
    'James', 'John', 'Melissa', 'Rachel', 'Susan', 'Jaime', 'Daniel'
  ];

  test('returns paginated data', () => {
    const paginatedSampleDate = paginate(2, 2, sampleData);

    expect(paginatedSampleDate).toEqual([
      'Melissa',
      'Rachel'
    ]);
  });

  test('returns an empty array when data is above limit', () => {
    const paginatedSampleDate = paginate(2, 2, []);

    expect(paginatedSampleDate).toEqual([]);
  });
});
