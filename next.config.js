const path = require("path");
const withSass = require('@zeit/next-sass');

module.exports = 
  withSass(
    {
      webpack: (cfg) => {
          cfg.resolve = cfg.resolve || {};
          cfg.resolve.alias = cfg.resolve.alias || {};
          cfg.resolve.alias['~'] = path.join(__dirname, 'components');
          cfg.resolve.alias['node_modules'] = path.join(__dirname, 'node_modules');

          cfg.module.rules.push(
              {
                  test: /\.md$/,
                  loader: 'frontmatter-markdown-loader',
                  options: { mode: ['react-component'] }
              }
          )
          return cfg;
      }
    });