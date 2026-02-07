# Selfish - Product Gallery Website

A mobile-first React website showcasing products with a minimalist black and white design.

## Features

- 🎨 Mobile-optimized design
- ⚫ Black and white color scheme
- 📱 Responsive grid layout (2 columns mobile, 3 tablet, 4 desktop)
- 🖼️ Product gallery with image modal view
- ⚡ Built with React and Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site can be deployed to any static hosting service. Here are instructions for popular platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build
4. Deploy!

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Netlify

1. Push your code to GitHub
2. Import your repository at [netlify.com](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

### Other Platforms

Any platform that supports static site hosting will work:
- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Surge.sh

## Project Structure

```
selfish/
├── public/
│   └── images/          # Product images go here
├── src/
│   ├── components/
│   │   ├── ProductGallery.jsx
│   │   └── ProductGallery.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Adding Product Images

Place your product images (JPG/JPEG format) in the `public/images/` folder. The gallery will automatically display all images.

## License

© 2025 Selfish
