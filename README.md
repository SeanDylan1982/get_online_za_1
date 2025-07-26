# GetOnlineZA - Small Business Website Platform

![GetOnlineZA Logo](public/img/logo.png)

**Professional websites for small businesses in South Africa from R500. No monthly fees, just simple, affordable web presence.**

## 🌟 Overview

GetOnlineZA is a modern, responsive business website built with React, TypeScript, and Vite. It showcases web development services specifically tailored for small businesses in South Africa, offering three distinct packages to help businesses establish their online presence.

### Key Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Interactive Elements**: Framer Motion animations and interactive components
- 📸 **Image Gallery**: Showcase portfolio work with react-image-gallery
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML structure
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 📧 **Contact Forms**: Integrated contact and quote request forms
- 🔗 **Social Integration**: Social media icons and links

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd getonlineza
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
getonlineza/
├── public/                 # Static assets
│   ├── img/               # Images and graphics
│   │   ├── gallery*.png   # Gallery images
│   │   ├── hero_background.webp
│   │   └── logo.png
│   └── portfolio/         # Portfolio screenshots
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── BackToTopButton.tsx
│   │   ├── BlurText.jsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   └── Navbar.tsx
│   ├── data/             # Static data files
│   │   ├── disclaimer.ts
│   │   ├── galleryImages.js
│   │   ├── privacy.ts
│   │   └── terms.ts
│   ├── types/            # TypeScript type definitions
│   │   └── react-image-gallery.d.ts
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite environment types
├── docs/                 # Documentation (generated)
├── package.json          # Project dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.2** - Next-generation frontend build tool

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.19.2** - Production-ready motion library
- **Lucide React 0.344.0** - Beautiful & consistent icon toolkit
- **FontAwesome 6.7.2** - Icon library and toolkit

### Components & Libraries
- **React Router DOM 7.6.2** - Declarative routing for React
- **React Image Gallery 1.4.0** - Responsive image gallery component
- **React Social Icons 6.24.0** - Social media icon components
- **Headless UI 2.2.4** - Unstyled, accessible UI components

### Development Tools
- **ESLint 9.9.1** - JavaScript/TypeScript linting
- **PostCSS 8.4.35** - CSS transformation tool
- **Autoprefixer 10.4.18** - CSS vendor prefixing

## 📱 Features & Sections

### 1. Hero Section
- Eye-catching hero with animated text
- Clear value proposition
- Call-to-action buttons
- Trust markers (no monthly fees, quick delivery, mobile-first)

### 2. Services Packages
- **Get Found (R500)**: Basic Google My Business setup
- **Get Noticed (R1500)**: Professional website + Google presence
- **Get Everything (R2500)**: Complete digital presence package

### 3. Portfolio Gallery
- Interactive image gallery showcasing previous work
- Responsive design with thumbnail navigation
- Portfolio items from various industries

### 4. Contact & Quote Forms
- Integrated contact form with validation
- Package selection dropdown
- Form submission handling
- Success/error states

### 5. Testimonials
- Customer reviews and feedback
- Star ratings and detailed testimonials
- Social proof for credibility

## 🎨 Customization

### Colors & Branding
The project uses a blue-based color scheme defined in Tailwind CSS:
- Primary: Blue (600, 700)
- Secondary: Gray (50, 100, 500, 700, 900)
- Accent: Green (500), Red (500), Purple (500)

### Typography
- Primary font: System default (sans-serif)
- Headings: Bold weights (font-bold)
- Body text: Regular weights

### Animations
Framer Motion is used for:
- Page load animations
- Scroll-triggered animations
- Hover effects
- Form interactions

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- React plugin setup
- Path aliases (`@` for `src` directory)
- Build output configuration

### Tailwind Configuration (`tailwind.config.js`)
- Content paths for purging unused CSS
- Custom theme extensions
- Plugin configurations

### TypeScript Configuration
- `tsconfig.json` - Main TypeScript config
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js specific config

## 📊 Performance Optimizations

- **Image Optimization**: WebP format for better compression
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **CSS Purging**: Tailwind CSS purges unused styles
- **Lazy Loading**: Components loaded on demand

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Options
- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Zero-configuration deployment for React apps
- **GitHub Pages**: Free hosting for static sites
- **Traditional Hosting**: Upload `dist` folder to any web server

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 🧪 Testing

### Running Linting
```bash
npm run lint
```

### Code Quality
- ESLint configuration for React and TypeScript
- Consistent code formatting
- Type checking with TypeScript

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain responsive design principles
- Write meaningful commit messages
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email [your-email@domain.com] or create an issue in the repository.

## 🔗 Links

- [Live Demo](https://your-demo-url.com)
- [Documentation](./docs/)
- [Issue Tracker](https://github.com/your-username/getonlineza/issues)

---

**Built with ❤️ for South African small businesses**

*Last updated: December 2024*