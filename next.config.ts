import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains: ['pbs.twimg.com', 'api.microlink.io'],
  },
  serverExternalPackages: ["nodemailer"],
  /* config options here */
};

export default nextConfig;
