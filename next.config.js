const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "next2",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        shared: {},
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
