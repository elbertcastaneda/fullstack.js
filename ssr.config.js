const path = require('path');

module.exports = {
  id: 'styled-components',
  distDir: 'dist/.ssr',
  viewsDir: 'apps/views',
  webpack: (config) => {
    config.resolve.modules = ['.', path.join(__dirname, 'apps/web/src/'), 'node_modules'];
    config.resolve.alias = {
      '~': path.join(__dirname, 'apps/web/src/'),
    };

    return config;
  },
};
