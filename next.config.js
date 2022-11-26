/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '*'],
    hostname: 'img.nftically.com',
  },
};

module.exports = nextConfig;
