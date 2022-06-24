/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.ABYISS_API_KEY,
  },
  images: {
    domains: ['assets.coincap.io'],
  },
}

module.exports = nextConfig