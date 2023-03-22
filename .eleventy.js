module.exports = function (eleventyConfig) {
  let pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
  let pluginWebc = require('@11ty/eleventy-plugin-webc');
  const { EleventyRenderPlugin } = require('@11ty/eleventy');


  let fs = require('fs');

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(pluginWebc, {
    // Glob to find no-import global components
    // This path is relative to the project-root!
    // The default value is shown:
    components: '_components/**/*.webc',
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: '<!-- excerpt -->',
  });

  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: 'utf-8',
  });

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
