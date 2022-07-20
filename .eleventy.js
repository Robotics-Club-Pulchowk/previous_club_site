module.exports = function (eleventyConfig) {
  // assets we want to passthrough

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/assets");

  return {
    dir: {
      input: "src",
      layouts: "_includes/layouts",
      pathPrefix: "/www/"
    },
  };
};
