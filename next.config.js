/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    })

    return config
  },
  output: 'standalone',
}

module.exports = nextConfig
