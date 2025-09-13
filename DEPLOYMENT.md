# Deployment Guide

## GitHub Pages Custom Domain Setup

### Problem
When using a custom domain with GitHub Pages, CSS and assets may not load correctly if the Next.js configuration isn't properly set up for both scenarios:
- GitHub Pages default domain (`username.github.io/repository`)
- Custom domain (`www.disclaymer.com`)

### Solution
This project automatically detects the deployment environment and configures asset paths accordingly.

## Environment Configuration

### For Custom Domains
When deploying with a custom domain, set this environment variable:
```
NEXT_PUBLIC_CUSTOM_DOMAIN=true
```

### For GitHub Pages Default Domain
For the default GitHub Pages domain, either:
```
NEXT_PUBLIC_CUSTOM_DOMAIN=false
```
or leave the variable unset.

## Manual Configuration Override
You can manually override the base path if needed:
```
NEXT_PUBLIC_BASE_PATH=""           # For custom domains
NEXT_PUBLIC_BASE_PATH="/repository" # For default GitHub Pages domain
```

## GitHub Actions Workflow
The included workflow (`.github/workflows/deploy.yml`) automatically:
1. Sets `NEXT_PUBLIC_CUSTOM_DOMAIN=true` for proper asset resolution
2. Builds the Next.js application with static export
3. Deploys to GitHub Pages

## DNS Configuration
For custom domains, configure your DNS:
- **Type**: CNAME
- **Name**: www (or @)
- **Value**: username.github.io

## Troubleshooting

### CSS Not Loading
- Ensure `NEXT_PUBLIC_CUSTOM_DOMAIN=true` is set in GitHub Actions
- Verify CNAME file contains correct domain
- Check that DNS is properly configured

### Assets Not Found (404)
- Verify the base path configuration matches your domain setup
- Check that the build process completes successfully
- Ensure all assets exist in the `public/` directory

### Mixed Content Errors
- Ensure all external resources use HTTPS
- Check that metadata URLs match your custom domain
