/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.someprettything.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "spt.nyc3.digitaloceanspaces.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
