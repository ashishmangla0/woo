/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'shop.aavyamart.com',
          },
        ],
      },
};

export default nextConfig;

