/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || 'disclaymer'

// Only use basePath for GitHub Pages default domain, not for custom domains
const isCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === 'true' || 
                      process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true'
                      
const computedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || 
                        (isGithubActions && !isCustomDomain ? `/${repo}` : '')

const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Use basePath only for GitHub Pages default domain, not custom domains
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
