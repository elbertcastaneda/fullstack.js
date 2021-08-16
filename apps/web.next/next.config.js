const { join } = require('path');

const workspace = join(__dirname, '../../');

module.exports = {
  webpack5: true,
  webpack: (config, options) => {
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          exclude: /node_modules/,
          include: [workspace],
          test: /\.(js|jsx|ts|tsx)$/,
          use: options.defaultLoaders.babel,
        },
      ],
    };

    return config;
  },
};
