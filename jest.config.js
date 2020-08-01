module.exports = {
  coverageDirectory: './coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@server/(.*)': '<rootDir>/apps/server/src/$1',
    '@server': '<rootDir>/apps/server/src',
    '@app/common/(.*)': '<rootDir>/libs/common/src/$1',
    '@app/common': '<rootDir>/libs/common/src',
  },
  rootDir: '.',
  roots: ['<rootDir>/apps/', '<rootDir>/libs/'],
  testEnvironment: 'node',
  testRegex: '^(?!.*integration.spec.ts?$).*.spec.ts?$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
