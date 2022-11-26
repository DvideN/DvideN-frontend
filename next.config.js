/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '*', 'img.nftically.com'],
    hostname: ['img.nftically.com'],
  },
};

module.exports = nextConfig;
