module.exports = eleventyConfig => {
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());
  eleventyConfig.addShortcode("calaphon", (lib) => `${lib?.name}@${lib?.version}`);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
