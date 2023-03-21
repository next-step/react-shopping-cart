module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx|css)$/,
    use: [
      {
        loader: require.resolve("ts-loader"),
      },
      "style-loader",
      "css-loader",
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx", ".css");
  return config;
};
