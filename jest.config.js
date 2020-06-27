module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
}
