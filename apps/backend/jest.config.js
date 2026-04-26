/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^@templateStorage/shared-types$': '<rootDir>/../../packages/shared-types/src/index.ts',
    '^@templateStorage/i18n$': '<rootDir>/../../packages/i18n/src/index.ts',
    '^@templateStorage/test-utils$': '<rootDir>/../../packages/test-utils/src/index.ts',
  },
  transformIgnorePatterns: ['node_modules/(?!(uuid|async-mutex)/)'],
  collectCoverageFrom: ['src/**/*.ts', '!src/main.ts', '!src/**/*.module.ts', '!src/**/*.spec.ts'],
  coverageThreshold: {
    global: { lines: 85 },
  },
};
