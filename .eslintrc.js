const rules = {
  // '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  // '@typescript-eslint/no-explicit-any': 'off',
  'key-spacing': ['error', { mode: 'strict' }],
  'max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    },
  ],
  'newline-after-var': ['error', 'always'],
  'newline-before-return': 'error',
  'no-trailing-spaces': 'error',
  'no-multi-spaces': 'error',
  'prefer-destructuring': ['error', { object: true, array: true }],
  quotes: ['error', 'single'],
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      shorthandFirst: false,
      shorthandLast: true,
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  semi: 'error',
  'import/order': ['error', { groups: ['builtin', 'external', 'sibling', 'parent', 'index'] }],
  'import/newline-after-import': ['error', { count: 1 }],
  'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
  'space-infix-ops': 'error',
  'unicorn/prevent-abbreviations': ['error', { whitelist: { props: true } }],
};

const base = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint/eslint-plugin',
    'jsx-a11y',
    'import',
    'jest',
    'prettier',
    'react',
    'unicorn',
  ],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
};

module.exports = {
  ignorePatterns: [
    'dist',
    'coverage',
    'node_modules',
    'ssr.config.js',
    'jest.config.js',
    'jest.integration.config.js',
    '.eslintrc.js',
  ],
  ...base,
  rules,
  root: true,
  env: {
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['apps/server/**/*.ts'],
      ...base,
      parserOptions: {
        project: 'apps/server/tsconfig.server.json',
        sourceType: 'module',
      },
      rules,
    },
    {
      files: ['apps/views/**/*.tsx', 'apps/views/**/*.ts'],
      ...base,
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      rules,
    },
    {
      files: ['apps/web/**/*.tsx', 'apps/web/**/*.ts'],
      ...base,
      parserOptions: {
        project: 'apps/web/tsconfig.json',
        sourceType: 'module',
      },
      rules,
    },
    {
      files: ['apps/next.views/**/*.tsx', 'apps/next.views/**/*.ts'],
      ...base,
      parserOptions: {
        project: 'apps/next.views/tsconfig.json',
        sourceType: 'module',
      },
      rules,
    },
    {
      files: ['apps/**/*.spec.ts'],
      ...base,
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      rules,
    },
  ],
  settings: {
    'import/resolver': {
      // use an array
      typescript: {
        directory: ['./tsconfig.json', './apps/server/tsconfig.server.json'],
      },
    },
  },
};
