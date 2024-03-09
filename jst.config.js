// jest.config.js
module.exports = {
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    },
};
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};
