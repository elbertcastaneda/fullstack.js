module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@server/(.*)': '<rootDir>/apps/server/src/$1',
    '@server': '<rootDir>/apps/server/src',
    '@app/common/(.*)': '<rootDir>/libs/common/src/$1',
    '@app/common': '<rootDir>/libs/common/src',
  },
  roots: ['<rootDir>/apps/server/src', 'node_modules', '<rootDir>/apps/'],
  rootDir: './',
  testEnvironment: 'node',
  testRegex: '.integration.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
