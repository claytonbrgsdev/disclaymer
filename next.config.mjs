/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || 'disclaymer'
const computedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${repo}` : '')

const nextConfig = {
  // Static export for GitHub Pages / project pages
  output: 'export',
  trailingSlash: true,
  // Allow explicit override via NEXT_PUBLIC_BASE_PATH, otherwise compute for Actions
  basePath: computedBasePath,
  assetPrefix: computedBasePath ? `${computedBasePath}/` : '',
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
