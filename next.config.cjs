// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  experimental: {
    appDir: true,
  },
};
