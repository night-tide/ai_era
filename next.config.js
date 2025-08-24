/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai_era' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ai_era' : '',
}

module.exports = nextConfig
