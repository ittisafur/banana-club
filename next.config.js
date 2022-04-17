/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['bananaclub.ittisafur.com'],
    },
};

module.exports = nextConfig;
