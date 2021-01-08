const { Liquid } = require("liquidjs");

module.exports = (eleventyConfig) => {
  eleventyConfig.setLibrary(
    "liquid",
    new Liquid({
      dynamicPartials: true,
      strictFilters: true,
    })
  );

  eleventyConfig.addShortcode("year", () => new Date().getFullYear());
  eleventyConfig.addShortcode("calaphon", ({ name, version }) => `${name}@${version}`);

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
