module.exports = {
    watchPlugins: ['jest-watch-select-projects'],
    projects: [
        '<rootDir>/src/calculator/jest.config.js',
        '<rootDir>/src/github/jest.config.js'
    ]
};
