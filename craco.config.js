const path = require("path");
const cracoAlias = require("craco-alias");

module.exports = {
  alias: {
    "@src": path.join(__dirname, "src"),
    "@components": path.join(__dirname, "src/components"),
    "@base-components": path.join(__dirname, "src/base-components"),
    "@utils": path.join(__dirname, "src/utils"),
  },
  plugins: [{ plugin: cracoAlias, options: { source: "jsconfig" } }],
};
