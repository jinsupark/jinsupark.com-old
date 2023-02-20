module.exports = function (eleventyConfig) {
  let pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
  let fs = require('fs');

  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          let content_404 = fs.readFileSync('_site/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
          });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('*.png');
  eleventyConfig.addPassthroughCopy('*.svg');
  eleventyConfig.addPassthroughCopy('*.webmanifest');
  eleventyConfig.addPassthroughCopy('assets/');
};
