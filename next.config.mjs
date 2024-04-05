/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.nutraingredients.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

export default nextConfig;
