module.exports = {
  preset: 'react-native',
  /**
   * Testing setup
   */
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/ (?! (react-native|react-native-cookies)/)',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
};
