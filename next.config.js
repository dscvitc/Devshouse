/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SCRIPT_ENDPOINT: process.env.SCRIPT_ENDPOINT,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
