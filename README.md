# AI Era - Landing Page

A minimal, elegant landing page built with Next.js that can be deployed to GitHub Pages.

## Features

- **Next.js 15** with static export for GitHub Pages compatibility
- **Excalidraw Virgil Font** for authentic hand-drawn styling
- **Black minimalist design** inspired by modern creative agencies
- **Dual logo display** featuring both logo assets
- **Responsive design** that works on all devices
- **GitHub Pages ready** with automated deployment

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Building for Production

```bash
# Build and export static files
npm run build
```

The static files will be generated in the `out/` directory.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/ai_era`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The `out` folder contains the static files
# Upload the contents of `out/` to your web server
```

## Project Structure

```
ai_era/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with font loading
│       ├── page.tsx        # Main landing page
│       └── globals.css     # Global styles
├── public/
│   ├── logo.png           # Logo asset
│   ├── Logo_Gradient.png  # Gradient logo asset
│   └── .nojekyll          # GitHub Pages configuration
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── next.config.js         # Next.js configuration for static export
├── package.json
└── tsconfig.json
```

## Customization

### Text Content

Edit the text content in `src/app/page.tsx`:

```tsx
<h1 className="main-text glow">
  Sharper. Faster. Limitless.
</h1>
<p className="sub-text">
  Designed for creators, driven by intelligence.
</p>
<p className="waitlist-text">
  Waitlist soon.
</p>
```

### Styling

Modify the design in `src/app/globals.css`. The current design features:
- Pure black background (`#000000`)
- White text with subtle glow effects
- Excalidraw Virgil font for hand-drawn aesthetic
- Responsive typography using `clamp()`

### Logos

Replace the logo files in the `public/` directory:
- `logo.png` - Primary logo
- `Logo_Gradient.png` - Gradient version

## Technologies Used

- **Next.js 15** - React framework with static export
- **TypeScript** - Type safety
- **Excalidraw Virgil Font** - Hand-drawn typography
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Static site hosting

## License

This project is private and proprietary to NightTide, Inc.