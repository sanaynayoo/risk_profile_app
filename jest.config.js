module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@react-native-community|@react-native-gesture-handler|react-native-reanimated|react-native-screens|react-native-safe-area-context|@react-native-picker/picker)/',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
};