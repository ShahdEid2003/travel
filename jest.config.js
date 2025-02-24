module.exports = {
    testTimeout: 30000,
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json'],
    testEnvironment: 'jsdom', 
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    }
  };
  