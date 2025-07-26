# Installation Guide

This guide will help you set up the GetOnlineZA project on your local development environment.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (version 18.0.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify npm: `npm --version`
   - Or install yarn: `npm install -g yarn`

3. **Git** (for version control)
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

### Recommended Tools

- **Visual Studio Code** - Recommended code editor
- **Chrome DevTools** - For debugging and development
- **Node.js Extension Pack** - VS Code extensions for Node.js development

## 🚀 Installation Steps

### 1. Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd getonlineza
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all the required dependencies listed in `package.json`.

### 3. Verify Installation

Check that all dependencies were installed correctly:

```bash
# Check if node_modules directory exists
ls node_modules

# Verify key packages are installed
npm list react react-dom typescript vite
```

### 4. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The development server will start on `http://localhost:5173` by default.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
# .env
VITE_APP_TITLE=GetOnlineZA
VITE_API_URL=http://localhost:3000
VITE_CONTACT_EMAIL=contact@getonlineza.com
```

### VS Code Configuration

Create a `.vscode/settings.json` file for project-specific VS Code settings:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Recommended VS Code Extensions

Install these extensions for the best development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 🧪 Verify Setup

### 1. Check Development Server

1. Open your browser and navigate to `http://localhost:5173`
2. You should see the GetOnlineZA homepage
3. Check that all images load correctly
4. Test navigation between sections

### 2. Run Build Process

Test that the production build works:

```bash
npm run build
```

This should create a `dist` directory with the built files.

### 3. Run Linting

Ensure code quality tools are working:

```bash
npm run lint
```

This should run ESLint and report any code quality issues.

## 🐛 Troubleshooting

### Common Issues

#### Node Version Issues
```bash
# Check your Node.js version
node --version

# If version is too old, update Node.js
# Visit nodejs.org for the latest version
```

#### Port Already in Use
```bash
# If port 5173 is in use, Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

#### Permission Issues (macOS/Linux)
```bash
# If you get permission errors, you might need to fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

#### Module Not Found Errors
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# If you see path resolution errors, ensure the baseUrl is set correctly in tsconfig.json
```

### Windows-Specific Issues

#### PowerShell Execution Policy
```powershell
# If you can't run npm scripts, you might need to change execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Long Path Names
```bash
# Enable long paths in Windows if you encounter path length issues
git config --system core.longpaths true
```

## 📁 Project Structure After Installation

After successful installation, your project structure should look like this:

```
getonlineza/
├── node_modules/          # Installed dependencies (created after npm install)
├── public/               # Static assets
├── src/                  # Source code
├── docs/                 # Documentation
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore rules
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file (created after npm install)
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## ✅ Next Steps

Once installation is complete:

1. **Explore the codebase**: Start with `src/App.tsx` to understand the main component structure
2. **Read the documentation**: Check out the [Component Guide](./components.md) and [Styling Guide](./styling.md)
3. **Make your first change**: Try modifying some text in the hero section
4. **Set up your development workflow**: Configure your editor and familiarize yourself with the available npm scripts

## 📞 Getting Help

If you encounter issues during installation:

1. Check the [Troubleshooting Guide](./troubleshooting.md)
2. Ensure all prerequisites are correctly installed
3. Try clearing caches and reinstalling dependencies
4. Create an issue on GitHub with detailed error information

---

*Installation guide last updated: December 2024*