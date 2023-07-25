/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/arts',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
