module.exports = {
  verbose: true,
  roots: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/src[/\\\\](index|setupTests|serviceWorker|react-app-env.d)[.ts*/\\\\]",
  ],
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](node_modules|.next|coverage|mocks)[/\\\\]",
  ],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@mocks/(.*)$": "<rootDir>/mocks/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/testSetupFile.js"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    "./utils/": {
      branches: 0,
    },
  },
};
