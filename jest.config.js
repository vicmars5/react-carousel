// jest.config.js
module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
    "^.+\\.scss$": "sass-jest"
  }
}
