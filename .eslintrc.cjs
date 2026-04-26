'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'import/no-duplicates': 'error',
  },
  overrides: [
    {
      files: ['apps/backend/src/**/*.controller.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
      },
    },
    {
      files: ['apps/frontend/vite.config.ts'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
    {
      files: ['apps/frontend/src/app/**/*.ts', 'packages/ui-kit/**/*.ts'],
      rules: {
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['apps/frontend/src/app/components/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '*.js',
    '*.cjs',
    'apps/frontend/.storybook/**',
    'packages/ui-kit/.storybook/**',
  ],
};
