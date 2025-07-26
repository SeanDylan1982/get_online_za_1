# Component Guide

This guide provides detailed documentation for all React components in the GetOnlineZA project.

## 📁 Component Structure

```
src/components/
├── BackToTopButton.tsx    # Scroll-to-top functionality
├── BlurText.jsx          # Animated text effect component
├── Footer.tsx            # Site footer with links and info
├── Header.tsx            # Main navigation header
├── Modal.tsx             # Reusable modal component
└── Navbar.tsx            # Navigation bar component
```

## 🧩 Core Components

### Header Component

**File**: `src/components/Header.tsx`

The main navigation header with responsive design and mobile menu.

#### Features
- Sticky navigation that stays at the top when scrolling
- Responsive hamburger menu for mobile devices
- Logo and brand name display
- Smooth scroll navigation to page sections

#### Props
None - this is a standalone component.

#### Usage
```tsx
import Header from '@/components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* Rest of your content */}
    </div>
  );
}
```

#### Key Features
- **Responsive Design**: Automatically switches to mobile menu on smaller screens
- **Smooth Scrolling**: Uses anchor links for smooth navigation
- **Active States**: Hover effects and visual feedback
- **Accessibility**: Proper ARIA labels and keyboard navigation

#### Customization
```tsx
// To modify navigation items, edit the nav sections in Header.tsx
const navigationItems = [
  { href: "#services", label: "Services" },
  { href: "#why-online", label: "Why Go Online?" },
  { href: "#portfolio", label: "Portfolio" },
  // Add more items here
];
```

### Footer Component

**File**: `src/components/Footer.tsx`

Site footer with company information, links, and social media.

#### Features
- Company contact information
- Social media links
- Legal links (Privacy, Terms, Disclaimer)
- Copyright information
- Responsive layout

#### Usage
```tsx
import Footer from '@/components/Footer';

function App() {
  return (
    <div>
      {/* Your main content */}
      <Footer />
    </div>
  );
}
```

### BackToTopButton Component

**File**: `src/components/BackToTopButton.tsx`

A floating button that appears when users scroll down and allows them to quickly return to the top of the page.

#### Features
- Appears only when user has scrolled down
- Smooth scroll animation to top
- Fixed positioning in bottom-right corner
- Hover effects and transitions

#### Props
None - this is a standalone component.

#### Usage
```tsx
import BackToTopButton from '@/components/BackToTopButton';

function App() {
  return (
    <div>
      {/* Your content */}
      <BackToTopButton />
    </div>
  );
}
```

#### Customization
```tsx
// Modify scroll threshold (when button appears)
const scrollThreshold = 300; // pixels

// Customize button styling
const buttonClasses = "fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700";
```

### BlurText Component

**File**: `src/components/BlurText.jsx`

An animated text component that creates a blur-to-focus effect for enhanced visual appeal.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | The text to animate |
| `delay` | number | 0 | Delay before animation starts (ms) |
| `animateBy` | string | 'words' | Animation unit ('words' or 'characters') |
| `direction` | string | 'top' | Animation direction |
| `className` | string | '' | Additional CSS classes |

#### Usage
```tsx
import BlurText from '@/components/BlurText';

function HeroSection() {
  return (
    <div>
      <BlurText
        text="Found"
        delay={1500}
        animateBy="words"
        direction="top"
        className="text-xl mb-6 BlurText glow"
      />
    </div>
  );
}
```

### Modal Component

**File**: `src/components/Modal.tsx`

A reusable modal component for displaying content in an overlay.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | required | Controls modal visibility |
| `onClose` | function | required | Function to close modal |
| `title` | string | '' | Modal title |
| `children` | ReactNode | required | Modal content |

#### Usage
```tsx
import { useState } from 'react';
import Modal from '@/components/Modal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Title"
      >
        <p>Modal content goes here</p>
      </Modal>
    </div>
  );
}
```

#### Features
- **Backdrop Click**: Closes modal when clicking outside
- **Escape Key**: Closes modal when pressing Escape
- **Focus Management**: Traps focus within modal
- **Animations**: Smooth open/close transitions
- **Accessibility**: Proper ARIA attributes

## 🎨 Styling Patterns

### Consistent Design System

All components follow these styling patterns:

#### Color Scheme
```css
/* Primary Colors */
.text-blue-600    /* Primary blue */
.text-blue-700    /* Darker blue for hover states */
.text-gray-900    /* Primary text */
.text-gray-700    /* Secondary text */
.text-gray-500    /* Muted text */

/* Background Colors */
.bg-white         /* Primary background */
.bg-gray-50       /* Light background */
.bg-blue-600      /* Primary button background */
```

#### Typography
```css
/* Headings */
.text-4xl.font-bold    /* Main headings */
.text-2xl.font-bold    /* Section headings */
.text-xl               /* Subheadings */

/* Body Text */
.text-lg               /* Large body text */
.text-base             /* Regular body text */
.text-sm               /* Small text */
```

#### Spacing
```css
/* Consistent spacing scale */
.p-4, .p-6, .p-8      /* Padding */
.m-4, .m-6, .m-8      /* Margins */
.space-y-4, .space-y-6 /* Vertical spacing */
.gap-4, .gap-6, .gap-8 /* Grid/flex gaps */
```

### Responsive Design

All components use Tailwind's responsive prefixes:

```css
/* Mobile-first approach */
.text-base          /* Base styles */
.sm:text-lg         /* Small screens and up */
.md:text-xl         /* Medium screens and up */
.lg:text-2xl        /* Large screens and up */
```

## 🔧 Component Development Guidelines

### Creating New Components

1. **File Naming**: Use PascalCase for component files (e.g., `MyComponent.tsx`)
2. **Export Pattern**: Use default exports for components
3. **TypeScript**: Always use TypeScript for new components
4. **Props Interface**: Define props interface for type safety

```tsx
// Example component template
import React from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
  onClick
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      {description && (
        <p className="mt-2 text-gray-600">{description}</p>
      )}
      {onClick && (
        <button
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Click me
        </button>
      )}
    </div>
  );
};

export default MyComponent;
```

### Best Practices

#### 1. Component Composition
```tsx
// Good: Composable components
<Card>
  <CardHeader title="Services" />
  <CardBody>
    <ServiceList services={services} />
  </CardBody>
</Card>

// Avoid: Monolithic components
<ServicesCardWithHeaderAndBody services={services} />
```

#### 2. Props Validation
```tsx
// Always define prop types
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

#### 3. Conditional Rendering
```tsx
// Use logical AND for simple conditions
{isLoading && <LoadingSpinner />}

// Use ternary for either/or conditions
{user ? <UserProfile user={user} /> : <LoginForm />}
```

#### 4. Event Handling
```tsx
// Use useCallback for event handlers that are passed as props
const handleClick = useCallback(() => {
  onItemClick?.(item.id);
}, [onItemClick, item.id]);
```

## 🧪 Testing Components

### Component Testing Strategy

1. **Unit Tests**: Test individual component behavior
2. **Integration Tests**: Test component interactions
3. **Visual Tests**: Test component appearance

### Example Test Structure
```tsx
// MyComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<MyComponent title="Test" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📚 Additional Resources

- [React Component Patterns](https://reactpatterns.com/)
- [TypeScript React Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Components](https://tailwindui.com/components)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

*Component guide last updated: December 2024*