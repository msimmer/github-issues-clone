const babelConfig = {
  presets: ["@babel/preset-flow", "@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ]
};

const defaultCwd = process.cwd();
const transformer = require("babel-jest").createTransformer(babelConfig);

// Monkey patch around https://github.com/facebook/jest/issues/7868
const oldGetCacheKey = transformer.getCacheKey;
transformer.getCacheKey = (
  fileData,
  filename,
  configString,
  { config, instrument, rootDir }
) =>
  oldGetCacheKey(fileData, filename, configString, {
    config: config || { cwd: defaultCwd },
    instrument,
    rootDir
  });

module.exports = transformer;
