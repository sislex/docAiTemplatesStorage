/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@angular/core/testing$': '<rootDir>/../../node_modules/@angular/core/fesm2022/testing.mjs',
    '^@ngrx/effects/testing$':
      '<rootDir>/../../node_modules/@ngrx/effects/fesm2022/ngrx-effects-testing.mjs',
    '^@templateStorage/(.*)$': '<rootDir>/../../packages/$1/src',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
  },
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
