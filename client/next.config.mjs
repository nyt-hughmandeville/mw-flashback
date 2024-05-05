/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/mw-flashback" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mw-flashback/" : "",
};

export default nextConfig;
