/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Disable source maps in production to reduce build time
  productionBrowserSourceMaps: false,
  // Increase build memory limit if needed
  experimental: {
    // Skip type checking to speed up build
    skipTypeChecking: true,
    // Increase memory limit for builds
    workerThreads: true,
    // Enable concurrent features
    optimizeCss: true
  },
  // Configure webpack to ignore certain warnings
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      // Minimize output to reduce size
      minimize: true
    }
    return config
  }
};

export default nextConfig; 