module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy({
        "./public/": "/"
    });

    return {
        dir: {
            input: "_src",
            includes: "../_includes",
            data: "../_data",
            output: "_site"
        }
    }
}