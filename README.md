# Modern Portfolio Website

A sophisticated, mobile-first portfolio website showcasing 11 years of full-stack JavaScript expertise with modern animations, parallax effects, and responsive design.

## Features

✨ **Modern Design**
- Parallax dot background with mouse and scroll responsiveness
- Dark/light theme toggle with smooth transitions
- Glass morphism effects and gradient animations
- Timeline experience section with colorful animated dots

🚀 **Performance**
- Built with React 18 + TypeScript
- Vite for lightning-fast development
- Tailwind CSS for optimized styling
- Responsive design for all devices

📱 **Interactive Elements**
- Scroll-triggered animations
- Hover effects and micro-interactions
- Contact form with backend integration
- Floating action buttons

## Quick Start

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Development Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
node start-modern.js
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

## GitHub Pages Deployment (Current Setup)

This repository is **ready for immediate GitHub Pages deployment** with the built files already in the root directory.

### Quick Deploy to GitHub Pages

1. **Fork or clone this repository**
2. **Go to your GitHub repository Settings > Pages**
3. **Select "Deploy from a branch"**
4. **Choose "main" branch and "/ (root)" folder**
5. **Your portfolio will be live at: `https://yourusername.github.io/repository-name/`**

### Project Structure (GitHub Pages Ready)
```
portfolio-website/
├── index.html              # Main entry point (root level)
├── 404.html               # SPA fallback for GitHub Pages
├── assets/                # Optimized CSS and JS files
│   ├── index-[hash].css   # Compiled styles
│   └── index-[hash].js    # Bundled JavaScript
├── README.md              # This documentation
├── .github/workflows/     # Auto-deployment (optional)
└── [development files]    # Source code for modifications
```

### For Development & Customization

If you want to modify the portfolio:

1. **Development setup:**
```bash
npm install
node start-modern.js  # Node.js 20+
# or
node start-local.js   # Node.js 18
```

2. **After making changes, rebuild for GitHub Pages:**
```bash
node build-deploy.js
git add .
git commit -m "Update portfolio"
git push origin main
```

### 2. Node.js Server Deployment

For full-stack features (contact form, etc.):

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Node.js Compatibility

### Node.js 20+ (Recommended)
```bash
node start-modern.js
```

### Node.js 18 (Legacy Support)
```bash
node start-local.js
```

## Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
├── server/                 # Express backend
├── shared/                 # Shared types/schemas
├── .github/workflows/      # GitHub Actions
├── index.html             # GitHub Pages entry point
└── build-deploy.js        # Deployment script
```

## Customization

### Personal Information
Edit the content in:
- `client/src/components/Hero.tsx`
- `client/src/components/About.tsx`
- `client/src/components/Experience.tsx`
- `client/src/components/Projects.tsx`

### Styling
- Colors: `client/src/index.css`
- Components: `client/src/components/`
- Animations: Custom CSS animations in `index.css`

### Contact Form
The contact form works with the Express backend. For GitHub Pages (static hosting), you'll need to integrate with a form service like Formspree or Netlify Forms.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tools**: Vite, ESBuild
- **Deployment**: GitHub Pages, GitHub Actions
- **UI Components**: Radix UI, Lucide Icons
- **Animations**: Custom CSS animations, Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this portfolio as a template for your own projects.

---

**Live Demo**: [Your GitHub Pages URL]

Built with ❤️ using modern web technologies