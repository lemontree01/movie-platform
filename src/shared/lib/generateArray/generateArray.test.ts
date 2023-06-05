import { generateArray } from 'shared/lib/generateArray/generateArray';

describe('generateArrays', () => {
  test('empty array', () => {
    expect(generateArray(0)).toStrictEqual([]);
  });

  test('functions calculations', () => {
    expect(generateArray(10, (i: number) => `a ${i}`)).toStrictEqual([
      'a 0',
      'a 1',
      'a 2',
      'a 3',
      'a 4',
      'a 5',
      'a 6',
      'a 7',
      'a 8',
      'a 9'
    ]);
  });

  test('null by default', () => {
    expect(generateArray(5)).toStrictEqual([null, null, null, null, null]);
  });
});
