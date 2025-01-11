/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  build: {
    notFound: false,
  },
};

module.exports = nextConfig;
