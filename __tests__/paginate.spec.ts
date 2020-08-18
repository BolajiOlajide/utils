import { paginate } from '../src';


describe('Paginate', (): void => {
  const sampleData: string[] = [
    'James', 'John', 'Melissa', 'Rachel', 'Susan', 'Jaime', 'Daniel'
  ];

  test('returns paginated data', (): void => {
    const paginatedSampleDate: string[] = paginate(2, 2, sampleData);

    expect(paginatedSampleDate).toEqual([
      'Melissa',
      'Rachel'
    ]);
  });

  test('returns an empty array when data is above limit', (): void => {
    const paginatedSampleDate: string[] = paginate(2, 2, []);

    expect(paginatedSampleDate).toEqual([]);
  });
});
