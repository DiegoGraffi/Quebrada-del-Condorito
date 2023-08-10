/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "farm6.staticflickr.com",
      },
    ],
  },
};

module.exports = nextConfig;
