function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");

    eleventyConfig.addPassthroughCopy("antropos.ttf");

    eleventyConfig.addFilter("sortByOrder", sortByOrder);
};
