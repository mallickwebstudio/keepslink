/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/resources',
                destination: '/resources/assets',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.imgur.com",
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
