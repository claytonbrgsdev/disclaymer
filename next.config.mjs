/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as static site for GitHub Pages
  output: 'export',
  // If deploying under a repo subpath, set basePath and assetPrefix
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
