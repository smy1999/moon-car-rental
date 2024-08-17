/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'us-west-2.graphassets.com',
      },
    ]
  }
};

export default nextConfig;
