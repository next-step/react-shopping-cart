// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  babel: {
    plugins: ["babel-plugin-styled-components"],
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
};
