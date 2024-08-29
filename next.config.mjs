/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.discordapp.com",
        // Optionally add pathPattern if needed
        // pathPattern: "^/attachments/.*",
      },
      {
        hostname: "i.imghippo.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
