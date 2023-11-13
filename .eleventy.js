function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("content/style.css");

    eleventyConfig.addPassthroughCopy("content/antropos.ttf");

    eleventyConfig.addFilter("sortByOrder", sortByOrder);

    return {
        dir: {
            input: "content",          // default: "."
            includes: "../_includes",  // default: "_includes"
            output: "_site"
        }
    }
};
