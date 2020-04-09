module.exports = {
  roots: ['<rootDir>/__tests__'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'js'],
};
