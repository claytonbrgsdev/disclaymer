# DISCLAYMER

Portfolio website for Disclaymer - two full-stack developers shipping modern web apps and unusual digital products.

## 🚀 Deployment

This project is configured to work with GitHub Pages with custom domain support.

### Environment Variables

For **custom domains** (like www.disclaymer.com):
```bash
NEXT_PUBLIC_CUSTOM_DOMAIN=true
```

For **GitHub Pages default domain** (username.github.io/repository):
```bash
NEXT_PUBLIC_CUSTOM_DOMAIN=false
# or leave unset
```

### Custom Domain Setup

1. Add your domain to the `CNAME` file (already configured: `www.disclaymer.com`)
2. Configure your domain's DNS to point to GitHub Pages
3. Enable GitHub Pages with custom domain in repository settings
4. The GitHub Actions workflow will automatically build and deploy with correct asset paths

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Export static files
pnpm export
```

## 🔧 Technical Details

- **Framework**: Next.js 14 with static export
- **Styling**: Tailwind CSS 4 with custom design system
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: Custom domain support with automatic asset path resolution

## 📁 Project Structure

```
├── app/                 # Next.js app router
├── components/          # React components
├── public/             # Static assets (images, icons)
├── styles/             # Global CSS and design system
└── .github/workflows/  # GitHub Actions deployment
```