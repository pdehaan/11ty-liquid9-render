const eleventy = require("@11ty/eleventy/package.json");
const liquidjs = require("liquidjs/package.json");

module.exports = {
  eleventy: {
    name: eleventy.name,
    version: eleventy.version,
  },
  liquidjs: {
    name: liquidjs.name,
    version: liquidjs.version,
  },
};
