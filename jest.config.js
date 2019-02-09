module.exports = {
  setupTestFrameworkScriptFile: "./setupTests.js",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "@actions(.*)$": "<rootDir>/src/client/actions$1",
    "@components(.*)$": "<rootDir>/src/client/components$1",
    "@containers(.*)$": "<rootDir>/src/client/containers$1",
    "@modules(.*)$": "<rootDir>/src/client/modules$1",
    "@reducers(.*)$": "<rootDir>/src/client/reducers$1",
    "@selectors(.*)$": "<rootDir>/src/client/selectors$1",
    "@types(.*)$": "<rootDir>/src/client/types$1",
    "@constants$": "<rootDir>/src/client/constants.js"
  }
};
