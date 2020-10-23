module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
  ignorePatterns: [
    'dist',
    'coverage',
    'node_modules',
    'jest.config.js',
    'jest.integration.config.js',
    '.eslintrc.js',
    '.eslintrc.js',
    'apps/web.next/next.config.js',
  ],
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
  root: true,
  rules: {
    // Use our .prettierrc file as source
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'key-spacing': ['error', { mode: 'strict' }],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'prefer-destructuring': ['error', { object: true, array: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
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
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/test/utils/*.ts', '**/*spec.ts'] },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './apps/server/tsconfig.json', './apps/web/tsconfig.json'],
      },
    },
    react: {
      // Automatically detect the react version
      version: 'detect',
    },
  },
};
