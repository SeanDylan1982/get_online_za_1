# Deployment Guide

This guide covers various deployment options for the GetOnlineZA project, from development to production environments.

## 🚀 Quick Deployment Options

| Platform | Difficulty | Cost | Best For |
|----------|------------|------|----------|
| [Netlify](#netlify) | Easy | Free tier available | Static sites, automatic deployments |
| [Vercel](#vercel) | Easy | Free tier available | React apps, serverless functions |
| [GitHub Pages](#github-pages) | Medium | Free | Open source projects |
| [Traditional Hosting](#traditional-hosting) | Medium | Varies | Full control, custom domains |

## 📦 Build Process

Before deploying, you need to create a production build:

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview the build locally (optional)
npm run preview
```

This creates a `dist` directory with optimized files ready for deployment.

## 🌐 Netlify Deployment

Netlify is recommended for its simplicity and powerful features.

### Method 1: Git Integration (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository

3. **Configure build settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**
   - Netlify will automatically build and deploy
   - You'll get a random URL like `https://amazing-site-123456.netlify.app`

### Method 2: Manual Deploy

```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Netlify Configuration

Create a `netlify.toml` file in your project root:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  VITE_API_URL = "https://your-api.com"

[context.deploy-preview.environment]
  VITE_API_URL = "https://staging-api.com"
```

### Custom Domain on Netlify

1. Go to your site settings in Netlify
2. Click "Domain management"
3. Add your custom domain
4. Update your DNS records as instructed

## ⚡ Vercel Deployment

Vercel offers excellent performance and developer experience.

### Method 1: Git Integration

1. **Push code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Vercel Configuration

Create a `vercel.json` file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "env": {
    "VITE_API_URL": "https://your-api.com"
  }
}
```

## 📄 GitHub Pages

Free hosting for public repositories.

### Setup GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Configure Vite for GitHub Pages

Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Replace with your repo name
  build: {
    outDir: 'dist',
  },
});
```

### Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch

## 🖥️ Traditional Hosting

For shared hosting, VPS, or dedicated servers.

### Build and Upload

```bash
# Create production build
npm run build

# Upload the 'dist' folder contents to your web server
# Using FTP, SFTP, or your hosting provider's file manager
```

### Server Configuration

#### Apache (.htaccess)

Create a `.htaccess` file in your web root:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

#### Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## 🔧 Environment Variables

### Production Environment Variables

Create environment-specific configurations:

```bash
# .env.production
VITE_API_URL=https://api.getonlineza.com
VITE_CONTACT_EMAIL=contact@getonlineza.com
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Platform-Specific Environment Variables

#### Netlify
Set in Netlify dashboard under "Site settings" > "Environment variables"

#### Vercel
Set in Vercel dashboard under "Settings" > "Environment Variables"

#### GitHub Actions
Set in repository "Settings" > "Secrets and variables" > "Actions"

## 📊 Performance Optimization

### Build Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
```

### Image Optimization

```bash
# Optimize images before deployment
npm install -g imagemin-cli

# Compress images
imagemin public/img/*.{jpg,png} --out-dir=public/img/optimized
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

## 🔍 Monitoring and Analytics

### Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Monitoring

Consider integrating error monitoring services:
- [Sentry](https://sentry.io/)
- [LogRocket](https://logrocket.com/)
- [Bugsnag](https://www.bugsnag.com/)

## 🚨 Troubleshooting Deployment

### Common Issues

#### 1. Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. Routing Issues (404 on refresh)
Ensure your server is configured to serve `index.html` for all routes.

#### 3. Environment Variables Not Working
- Check variable names start with `VITE_`
- Verify they're set in your deployment platform
- Restart your build after adding variables

#### 4. Large Bundle Size
```bash
# Analyze what's making your bundle large
npm run build
npx vite-bundle-analyzer dist
```

### Deployment Checklist

- [ ] Production build works locally (`npm run build && npm run preview`)
- [ ] Environment variables are configured
- [ ] Custom domain is set up (if applicable)
- [ ] SSL certificate is configured
- [ ] Analytics tracking is implemented
- [ ] Error monitoring is set up
- [ ] Performance is optimized
- [ ] SEO meta tags are correct
- [ ] Social media previews work
- [ ] All forms and interactive features work

## 📞 Support

If you encounter deployment issues:

1. Check the [Troubleshooting Guide](./troubleshooting.md)
2. Review platform-specific documentation
3. Check build logs for error messages
4. Test the build locally first
5. Create an issue with deployment details

---

*Deployment guide last updated: December 2024*