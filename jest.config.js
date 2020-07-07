module.exports = {
  coverageDirectory: './coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@app/my-library': '<rootDir>/libs/my-library/src',
    '@app/my-library/(.*)': '<rootDir>/libs/my-library/src/$1',
  },
  rootDir: '.',
  roots: ['<rootDir>/apps/', '<rootDir>/libs/'],
  testEnvironment: 'node',
  testRegex: '^(?!.*integration.spec.ts?$).*.spec.ts?$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
