module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
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
