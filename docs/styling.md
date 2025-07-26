# Styling Guide

This guide covers the styling approach, design system, and best practices used in the GetOnlineZA project.

## 🎨 Design System Overview

The project uses a modern, clean design system built with Tailwind CSS, focusing on:
- **Simplicity**: Clean, uncluttered interfaces
- **Accessibility**: WCAG compliant color contrasts and interactions
- **Responsiveness**: Mobile-first design approach
- **Consistency**: Unified spacing, typography, and color schemes

## 🛠️ Technology Stack

### Primary Styling Tools
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformation and optimization
- **Autoprefixer 10.4.18** - Automatic vendor prefixing

### Supporting Libraries
- **Framer Motion 12.19.2** - Animation and transitions
- **Lucide React 0.344.0** - Consistent icon system
- **FontAwesome 6.7.2** - Additional icons and graphics

## 🎯 Color Palette

### Primary Colors
```css
/* Blue - Primary brand color */
.text-blue-600    /* #2563eb - Primary blue */
.text-blue-700    /* #1d4ed8 - Darker blue for hover states */
.bg-blue-600      /* Primary button backgrounds */
.bg-blue-700      /* Hover states */

/* Blue variations */
.bg-blue-50       /* #eff6ff - Light blue backgrounds */
.bg-blue-100      /* #dbeafe - Subtle blue sections */
```

### Neutral Colors
```css
/* Gray scale - Text and backgrounds */
.text-gray-900    /* #111827 - Primary text */
.text-gray-700    /* #374151 - Secondary text */
.text-gray-600    /* #4b5563 - Muted text */
.text-gray-500    /* #6b7280 - Placeholder text */

.bg-white         /* #ffffff - Primary background */
.bg-gray-50       /* #f9fafb - Light section backgrounds */
.bg-gray-100      /* #f3f4f6 - Card backgrounds */
```

### Accent Colors
```css
/* Success/Positive */
.text-green-500   /* #10b981 - Success states, checkmarks */

/* Warning/Attention */
.text-red-500     /* #ef4444 - Error states, important notices */

/* Info/Secondary */
.text-purple-500  /* #8b5cf6 - Secondary accent color */
```

### Usage Guidelines

```tsx
// Primary text on white backgrounds
<h1 className="text-gray-900">Main Heading</h1>

// Secondary text
<p className="text-gray-700">Body text content</p>

// Muted text for less important information
<span className="text-gray-500">Supporting information</span>

// Primary action buttons
<button className="bg-blue-600 hover:bg-blue-700 text-white">
  Primary Action
</button>

// Success indicators
<div className="flex items-center text-green-500">
  <CheckCircle className="w-5 h-5 mr-2" />
  Success message
</div>
```

## 📝 Typography

### Font Stack
The project uses the system font stack for optimal performance and native feel:

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

### Typography Scale

#### Headings
```css
/* Main page headings */
.text-4xl.font-bold     /* 36px - Hero headings */
.text-3xl.font-bold     /* 30px - Section headings */
.text-2xl.font-bold     /* 24px - Subsection headings */
.text-xl.font-semibold  /* 20px - Card titles */

/* Usage example */
<h1 className="text-4xl font-bold text-gray-900 mb-6">
  Your Business Deserves to be Found
</h1>
```

#### Body Text
```css
.text-xl              /* 20px - Large body text, introductions */
.text-lg              /* 18px - Emphasized body text */
.text-base            /* 16px - Regular body text */
.text-sm              /* 14px - Small text, captions */

/* Usage example */
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
  I help small businesses like yours get noticed by the people who need your services.
</p>
```

#### Font Weights
```css
.font-bold            /* 700 - Headings, important text */
.font-semibold        /* 600 - Subheadings, button text */
.font-medium          /* 500 - Emphasized text */
.font-normal          /* 400 - Regular body text */
```

### Responsive Typography

```tsx
// Mobile-first responsive text sizing
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

// Responsive line height
<p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
  Responsive paragraph text
</p>
```

## 📏 Spacing System

### Spacing Scale
Tailwind's spacing scale is based on 0.25rem (4px) increments:

```css
/* Common spacing values */
.p-4     /* 16px padding */
.p-6     /* 24px padding */
.p-8     /* 32px padding */
.p-16    /* 64px padding */

.m-4     /* 16px margin */
.m-6     /* 24px margin */
.m-8     /* 32px margin */

/* Vertical spacing */
.space-y-4   /* 16px vertical spacing between children */
.space-y-6   /* 24px vertical spacing between children */
.space-y-8   /* 32px vertical spacing between children */
```

### Layout Patterns

#### Section Spacing
```tsx
// Standard section padding
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>

// Larger sections
<section className="py-20 bg-gray-50">
  {/* Content */}
</section>
```

#### Component Spacing
```tsx
// Card components
<div className="bg-white rounded-xl p-8 shadow-lg">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Title</h3>
  <p className="text-gray-600 mb-6">Description</p>
  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
    Action
  </button>
</div>

// Form elements
<div className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Label
    </label>
    <input className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
  </div>
</div>
```

## 📱 Responsive Design

### Breakpoint System
```css
/* Tailwind breakpoints */
sm: 640px    /* Small devices and up */
md: 768px    /* Medium devices and up */
lg: 1024px   /* Large devices and up */
xl: 1280px   /* Extra large devices and up */
2xl: 1536px  /* 2X large devices and up */
```

### Mobile-First Approach
```tsx
// Start with mobile styles, then add larger screen styles
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid that's 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

// Responsive text and spacing
<div className="px-4 sm:px-6 lg:px-8">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
    Responsive Heading
  </h1>
</div>
```

### Common Responsive Patterns

#### Navigation
```tsx
// Desktop navigation visible on md and up, mobile menu below
<nav className="hidden md:flex space-x-8">
  {/* Desktop menu items */}
</nav>

<button className="md:hidden">
  {/* Mobile hamburger menu */}
</button>
```

#### Grid Layouts
```tsx
// Responsive service cards
<div className="grid md:grid-cols-3 gap-8">
  {services.map(service => (
    <ServiceCard key={service.id} {...service} />
  ))}
</div>
```

## 🎭 Animations and Transitions

### Framer Motion Integration

#### Page Animations
```tsx
import { motion } from 'framer-motion';

// Fade in animation for sections
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h2>Animated Section</h2>
</motion.div>
```

#### Hover Effects
```tsx
// Button hover animations
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
>
  Animated Button
</motion.button>
```

### CSS Transitions
```css
/* Standard transition for interactive elements */
.transition-all        /* Transition all properties */
.transition-colors     /* Transition color properties only */
.duration-300          /* 300ms duration */
.ease-in-out          /* Smooth easing */

/* Usage example */
<button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
  Hover me
</button>
```

## 🧩 Component Styling Patterns

### Card Components
```tsx
// Standard card styling
<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
  <div className="text-center mb-6">
    <Icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Title</h3>
  </div>
  <div className="space-y-4">
    {/* Card content */}
  </div>
</div>
```

### Button Variants
```tsx
// Primary button
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
  Primary Action
</button>

// Secondary button
<button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
  Secondary Action
</button>

// Outline button
<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all">
  Outline Button
</button>
```

### Form Styling
```tsx
// Form input styling
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />

// Form label styling
<label className="block text-sm font-medium text-gray-700 mb-2">
  Field Label
</label>

// Error state
<input className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
<p className="mt-2 text-sm text-red-600">Error message</p>
```

## 🎨 Custom CSS Classes

### Utility Classes
```css
/* Custom utilities in src/index.css */

/* Blur text animation effect */
.BlurText {
  filter: blur(0px);
  transition: filter 0.3s ease;
}

.glow {
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

/* Custom scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
```

### Component-Specific Styles
```css
/* Image gallery customization */
.image-gallery-slide img {
  border-radius: 12px;
}

.image-gallery-thumbnails-wrapper {
  margin-top: 16px;
}
```

## 🔧 Customization Guide

### Extending the Color Palette
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        custom: {
          primary: '#your-color',
          secondary: '#your-color',
        }
      }
    }
  }
}
```

### Adding Custom Fonts
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Your Font', 'sans-serif'],
      }
    }
  }
}
```

### Custom Animations
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  }
}
```

## 📐 Layout Patterns

### Container Patterns
```tsx
// Standard page container
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Full-width sections with contained content
<section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 text-center">
    {/* Centered content */}
  </div>
</section>
```

### Grid Systems
```tsx
// Service cards grid
<div className="grid md:grid-cols-3 gap-8">
  {/* Cards */}
</div>

// Feature list grid
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Features */}
</div>
```

## 🎯 Best Practices

### Performance
- Use Tailwind's purge feature to remove unused CSS
- Optimize images and use appropriate formats (WebP)
- Minimize custom CSS in favor of Tailwind utilities
- Use CSS-in-JS sparingly for better caching

### Maintainability
- Create reusable component patterns
- Document custom utility classes
- Use consistent naming conventions
- Group related styles together

### Accessibility
- Maintain proper color contrast ratios
- Use semantic HTML elements
- Provide focus indicators
- Test with screen readers

### Responsive Design
- Always start with mobile-first approach
- Test on real devices, not just browser dev tools
- Consider touch targets (minimum 44px)
- Optimize for different screen orientations

---

*Styling guide last updated: December 2024*