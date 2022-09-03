module.exports = function (eleventyConfig) {
  // assets we want to passthrough
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src/pages",
      layouts: "../_includes/layouts",
      pathPrefix: "/www/",
    },
  };
};
