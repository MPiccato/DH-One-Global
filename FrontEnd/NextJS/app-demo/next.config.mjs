/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  }
  /* config options here */
};

export default nextConfig;