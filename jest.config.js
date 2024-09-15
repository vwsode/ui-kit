export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss|woff|woff2)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',

    "^@/(.*)$": "<rootDir>/src/$1",
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@icons(.*)$': '<rootDir>/src/icons$1',
    '^@localization(.*)$': '<rootDir>/src/localization$1',
    '^@themes(.*)$': '<rootDir>/src/themes$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};