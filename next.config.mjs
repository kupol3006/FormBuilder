import webpack from 'next/dist/compiled/webpack/webpack-lib.js';

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );
    return config;
  },
};

export default nextConfig;