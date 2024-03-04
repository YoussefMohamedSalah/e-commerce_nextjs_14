/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staging-store-api.seedsflow.net",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "store-api.seedsflow.net",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "cdn.seedsflow.net",
        pathname: "**"
      }
    ]
  }
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl(nextConfig);
