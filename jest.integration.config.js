module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@server': '<rootDir>/libs/my-library/src',
    '@server/(.*)': '<rootDir>/apps/server/src/$1',
    '@app/my-library': '<rootDir>/libs/my-library/src',
    '@app/my-library/(.*)': '<rootDir>/libs/my-library/src/$1',
  },
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.integration.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
