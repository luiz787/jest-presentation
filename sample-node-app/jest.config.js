module.exports = {
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  projects: [
    "<rootDir>/src/calculator/jest.config.js",
    "<rootDir>/src/github/jest.config.js",
  ],
};
