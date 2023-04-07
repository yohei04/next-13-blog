/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig
