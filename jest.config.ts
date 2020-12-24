/* eslint-disable @typescript-eslint/strict-boolean-expressions */
module.exports = {
  roots: ['<rootDir>/src'],
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '.module.ts',
    '<rootDir>/src/presentation/controllers/signup/signup-protocols.ts',
    '<rootDir>/src/presentation/protocols/index.ts',
    '.mock.ts'
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
