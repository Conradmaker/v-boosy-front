module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  }
}
