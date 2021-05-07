module.exports = {
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-runner-eslint/watch-fix"
  ],
  projects: [
    "<rootDir>/src/calculator/jest.config.js",
    "<rootDir>/src/github/jest.config.js",
    "<rootDir>/jest-eslint.config.js"
  ],
};
