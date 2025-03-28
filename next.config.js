/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'iframe.mediadelivery.net',
          port: '',
          pathname: '/embed/**'
        }, {
          protocol: 'https',
          hostname: 'salud-en-casa.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'clinic-pie-site-cdn.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'clinica-marbella.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'clinica-lug-site-cdn.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'benito-arismendi-site-cdn.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'clinica-ayr.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'clinica-dent.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'kinesiologia-fvaras.b-cdn.net',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'upvisor.b-cdn.net',
          port: '',
          pathname: '/**'
        }
      ]
    }
  }

module.exports = nextConfig
