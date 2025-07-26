# Troubleshooting Guide

This guide helps you resolve common issues you might encounter while developing or deploying the GetOnlineZA project.

## 🚨 Common Development Issues

### Node.js and npm Issues

#### Issue: "Node version not supported"
```bash
Error: The engine "node" is incompatible with this module.
```

**Solution:**
```bash
# Check your Node.js version
node --version

# Update to Node.js 18 or higher
# Visit https://nodejs.org/ to download the latest version

# Or use nvm (Node Version Manager)
nvm install 18
nvm use 18
```

#### Issue: "npm command not found"
**Solution:**
```bash
# Reinstall Node.js from https://nodejs.org/
# This will include npm

# Or install npm separately
curl -L https://www.npmjs.com/install.sh | sh
```

#### Issue: Permission errors on macOS/Linux
```bash
Error: EACCES: permission denied
```

**Solution:**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Or use a Node version manager like nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### Installation Issues

#### Issue: "Package not found" or dependency errors
```bash
npm ERR! 404 Not Found - GET https://registry.npmjs.org/package-name
```

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# If still failing, try with legacy peer deps
npm install --legacy-peer-deps
```

#### Issue: "Module resolution failed"
```bash
Error: Cannot resolve module '@/components/Header'
```

**Solution:**
```bash
# Check if the path alias is configured in vite.config.ts
# Ensure this is present:
resolve: {
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
}

# Also check tsconfig.json has:
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```

### Development Server Issues

#### Issue: "Port already in use"
```bash
Error: Port 5173 is already in use
```

**Solution:**
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000

# Or set port in vite.config.ts
server: {
  port: 3000
}
```

#### Issue: "Hot reload not working"
**Solution:**
```bash
# Check if you're using WSL on Windows
# Add to vite.config.ts:
server: {
  watch: {
    usePolling: true,
  },
}

# Or restart the development server
npm run dev
```

#### Issue: "Images not loading"
```bash
GET http://localhost:5173/img/logo.png 404 (Not Found)
```

**Solution:**
```bash
# Ensure images are in the public directory
public/img/logo.png

# Use correct path in components (no leading slash for Vite)
<img src="/img/logo.png" alt="Logo" />

# Check if the file exists and has correct permissions
ls -la public/img/
```

## 🎨 Styling and UI Issues

### Tailwind CSS Issues

#### Issue: "Tailwind styles not applying"
**Solution:**
```bash
# Check if Tailwind is properly configured in tailwind.config.js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']

# Ensure Tailwind directives are in your CSS file (src/index.css)
@tailwind base;
@tailwind components;
@tailwind utilities;

# Restart the development server
npm run dev
```

#### Issue: "Custom styles not working"
**Solution:**
```bash
# Check CSS import order in main.tsx
import './index.css'  // Should be imported

# Verify PostCSS configuration in postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Component Issues

#### Issue: "Component not rendering"
```bash
Warning: React.jsx: type is invalid
```

**Solution:**
```tsx
// Check import/export syntax
// Correct default export:
export default MyComponent;

// Correct default import:
import MyComponent from './MyComponent';

// Check for typos in component names
// Ensure component starts with capital letter
```

#### Issue: "Hooks can only be called inside function components"
**Solution:**
```tsx
// Ensure hooks are called at the top level of function components
function MyComponent() {
  const [state, setState] = useState(null); // ✅ Correct
  
  if (condition) {
    const [otherState, setOtherState] = useState(null); // ❌ Wrong
  }
  
  return <div>Content</div>;
}
```

## 🔧 Build and Deployment Issues

### Build Failures

#### Issue: "Build failed with TypeScript errors"
```bash
error TS2307: Cannot find module '@/components/Header'
```

**Solution:**
```bash
# Check TypeScript configuration
# Ensure tsconfig.json includes:
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

# Run TypeScript check
npx tsc --noEmit

# Fix any type errors before building
```

#### Issue: "Out of memory during build"
```bash
FATAL ERROR: Ineffective mark-compacts near heap limit
```

**Solution:**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# Or modify package.json scripts:
"build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
```

#### Issue: "Build succeeds but site is blank"
**Solution:**
```bash
# Check browser console for errors
# Common issues:

# 1. Incorrect base path in vite.config.ts
base: '/your-repo-name/' // For GitHub Pages

# 2. Missing environment variables
# Check if VITE_ prefixed variables are set

# 3. JavaScript errors preventing app initialization
# Check browser console and fix any runtime errors
```

### Deployment Issues

#### Issue: "404 errors on page refresh"
**Solution:**
```bash
# Configure your server to serve index.html for all routes

# For Netlify, create _redirects file:
/*    /index.html   200

# For Apache, create .htaccess:
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Issue: "Environment variables not working in production"
**Solution:**
```bash
# Ensure variables start with VITE_
VITE_API_URL=https://api.example.com

# Set variables in your deployment platform:
# - Netlify: Site settings > Environment variables
# - Vercel: Settings > Environment Variables
# - GitHub Actions: Repository secrets

# Rebuild after adding variables
```

#### Issue: "Images not loading in production"
**Solution:**
```bash
# Check image paths are correct
# Use absolute paths from public directory:
<img src="/img/logo.png" alt="Logo" />

# Ensure images are in the build output
# Check dist/img/ directory after build

# For GitHub Pages, check base path configuration
```

## 🔍 Performance Issues

### Slow Loading

#### Issue: "App loads slowly"
**Solution:**
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Optimize images
# Use WebP format for better compression
# Implement lazy loading for images

# Code splitting
# Use dynamic imports for large components
const LazyComponent = lazy(() => import('./LazyComponent'));
```

#### Issue: "Large bundle size"
**Solution:**
```bash
# Check what's making your bundle large
npx vite-bundle-analyzer dist

# Common solutions:
# 1. Remove unused dependencies
# 2. Use tree shaking
# 3. Split vendor chunks in vite.config.ts:

build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ui: ['framer-motion', 'lucide-react'],
      },
    },
  },
}
```

## 🧪 Testing Issues

### Test Failures

#### Issue: "Tests not running"
```bash
# If using Jest/Vitest, ensure test configuration is correct
# Check package.json for test script
"scripts": {
  "test": "vitest"
}

# Install testing dependencies if missing
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

#### Issue: "Module not found in tests"
**Solution:**
```bash
# Configure test environment to understand path aliases
# In vitest.config.ts or jest.config.js:
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
```

## 🔐 Security Issues

### Dependency Vulnerabilities

#### Issue: "npm audit shows vulnerabilities"
```bash
# Check vulnerabilities
npm audit

# Fix automatically fixable issues
npm audit fix

# For high-severity issues that can't be auto-fixed:
# Update dependencies manually or find alternatives
npm update package-name
```

### Environment Variable Exposure

#### Issue: "Sensitive data in client bundle"
**Solution:**
```bash
# Remember: All VITE_ variables are exposed to the client
# Never put sensitive data in VITE_ variables

# ❌ Don't do this:
VITE_API_SECRET=secret-key

# ✅ Do this instead:
VITE_API_URL=https://api.example.com
# Keep secrets on the server side
```

## 📱 Browser Compatibility Issues

### Modern JavaScript Features

#### Issue: "Site doesn't work in older browsers"
**Solution:**
```bash
# Check browser support in package.json
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not dead"
]

# Add polyfills if needed
npm install core-js

# Configure Vite for legacy browser support
npm install -D @vitejs/plugin-legacy
```

### CSS Issues

#### Issue: "Styles look different across browsers"
**Solution:**
```css
/* Ensure CSS reset/normalize is applied */
/* Tailwind includes this by default */

/* Test in multiple browsers */
/* Use autoprefixer for vendor prefixes (included in PostCSS config) */
```

## 🆘 Getting Help

### Debug Information to Collect

When reporting issues, include:

```bash
# System information
node --version
npm --version
cat package.json | grep version

# Error messages (full stack trace)
# Browser console errors
# Network tab errors (for API issues)

# Steps to reproduce
# Expected vs actual behavior
```

### Useful Commands for Debugging

```bash
# Clear all caches
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Verbose logging
npm run dev --verbose
npm run build --verbose

# Check bundle contents
npm run build
ls -la dist/
```

### Where to Get Help

1. **Check this troubleshooting guide first**
2. **Search existing GitHub issues**
3. **Check the official documentation**:
   - [Vite Documentation](https://vitejs.dev/)
   - [React Documentation](https://react.dev/)
   - [Tailwind CSS Documentation](https://tailwindcss.com/)
4. **Create a new GitHub issue** with:
   - Clear description of the problem
   - Steps to reproduce
   - System information
   - Error messages
   - What you've already tried

## 📋 Prevention Checklist

To avoid common issues:

- [ ] Keep dependencies updated regularly
- [ ] Use consistent Node.js version across team (consider .nvmrc)
- [ ] Test in multiple browsers
- [ ] Run builds locally before deploying
- [ ] Use TypeScript for better error catching
- [ ] Set up proper linting and formatting
- [ ] Monitor bundle size regularly
- [ ] Test on different devices and screen sizes
- [ ] Keep environment variables documented
- [ ] Regular security audits with `npm audit`

---

*Troubleshooting guide last updated: December 2024*