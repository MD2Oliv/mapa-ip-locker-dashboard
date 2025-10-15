/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdnjs.cloudflare.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
