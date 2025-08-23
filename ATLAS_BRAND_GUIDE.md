# Atlas Al Sharq Brand Identity Guide

## Overview
This guide provides all the components and resources needed to implement the Atlas Al Sharq brand identity in your React + Tailwind application.

## 🎨 Brand Colors

### Primary Colors
- **Dark Brown Palette**: From deep chocolate (#1a0f0a) to cream (#f5e8dc)
- **Gold Palette**: From dark gold (#714610) to off-white gold (#fffef5)

### Usage in Tailwind
```jsx
// Text colors
<p className="text-atlas-brown-800">Dark brown text</p>
<p className="text-atlas-gold-500">Gold text</p>

// Background colors
<div className="bg-atlas-brown-900">Dark background</div>
<div className="bg-atlas-gold-100">Light gold background</div>

// Gradients
<div className="bg-atlas-primary">Primary gradient</div>
<div className="bg-atlas-shine">Shine effect</div>
<div className="bg-atlas-metallic">Metallic gradient</div>
```

## 🎯 Logo Components

### Basic Logo
```jsx
import { AtlasLogo } from '@/components/AtlasLogo';

// Default logo with text
<AtlasLogo size={200} />

// Logo without text
<AtlasLogo size={100} showText={false} />
```

### Animated Logo
```jsx
import { AtlasLogoAnimated } from '@/components/AtlasLogo';

// Animated version with all effects
<AtlasLogoAnimated size={150} />
```

### Interactive Logo
```jsx
import { AtlasLogoAdvanced } from '@/components/AtlasLogoAdvanced';

// Advanced logo with hover effects
<AtlasLogoAdvanced 
  size={200} 
  interactive={true}
  onHover={() => console.log('Hovered!')}
  onClick={() => console.log('Clicked!')}
/>
```

### Loading State
```jsx
import { AtlasLogoLoading } from '@/components/AtlasLogoAdvanced';

// Loading spinner
<AtlasLogoLoading size={80} />
```

## 🧩 UI Components

### Buttons
```jsx
import { AtlasButton } from '@/components/AtlasBrandKit';

// Primary button
<AtlasButton variant="primary" size="md">
  Book Exhibition
</AtlasButton>

// Secondary button
<AtlasButton variant="secondary" size="lg">
  Learn More
</AtlasButton>

// Outline button
<AtlasButton variant="outline">
  Contact Us
</AtlasButton>

// Ghost button
<AtlasButton variant="ghost" size="sm">
  View Details
</AtlasButton>
```

### Cards
```jsx
import { AtlasCard } from '@/components/AtlasBrandKit';

<AtlasCard 
  title="Premium Exhibition Space"
  description="State-of-the-art facilities for your next event"
>
  <AtlasButton>Reserve Now</AtlasButton>
</AtlasCard>
```

### Badges
```jsx
import { AtlasBadge } from '@/components/AtlasBrandKit';

<AtlasBadge>New</AtlasBadge>
<AtlasBadge variant="success">Available</AtlasBadge>
<AtlasBadge variant="warning">Limited</AtlasBadge>
<AtlasBadge variant="error">Sold Out</AtlasBadge>
```

### Section Headers
```jsx
import { AtlasSection } from '@/components/AtlasBrandKit';

<AtlasSection
  title="Our Services"
  subtitle="Professional exhibition and conference solutions"
  centered={true}
/>
```

### Dividers
```jsx
import { AtlasDivider } from '@/components/AtlasBrandKit';

// Simple divider
<AtlasDivider />

// Gradient divider
<AtlasDivider gradient />
```

## 🎬 Animations

The brand includes several custom animations:

- `animate-atlas-rotate`: Smooth 360° rotation (20s)
- `animate-atlas-pulse`: Gentle opacity pulse (3s)
- `animate-atlas-shine`: Horizontal shine effect (3s)
- `animate-atlas-fade-in`: Fade and scale entrance (0.8s)
- `animate-atlas-glow`: Glowing effect (2s)

### Usage
```jsx
<div className="animate-atlas-rotate">Rotating element</div>
<div className="animate-atlas-pulse">Pulsing element</div>
<div className="animate-atlas-fade-in">Fading in element</div>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

```jsx
// Logo sizes for different screens
<AtlasLogo size={100} className="md:hidden" /> // Mobile
<AtlasLogo size={150} className="hidden md:block lg:hidden" /> // Tablet
<AtlasLogo size={200} className="hidden lg:block" /> // Desktop
```

## 🌙 Dark Mode Support

All components support dark mode automatically:

```jsx
// Colors adapt based on theme
<div className="bg-white dark:bg-atlas-brown-900">
  <h1 className="text-atlas-brown-800 dark:text-atlas-gold-300">
    Atlas Al Sharq
  </h1>
</div>
```

## 💼 Complete Example

Here's a complete header implementation:

```jsx
import { AtlasLogoAnimated } from '@/components/AtlasLogo';
import { AtlasButton } from '@/components/AtlasBrandKit';

function Header() {
  return (
    <header className="bg-white dark:bg-atlas-brown-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <AtlasLogoAnimated size={100} />
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-atlas-brown-700 hover:text-atlas-gold-600">
            Services
          </a>
          <a href="#" className="text-atlas-brown-700 hover:text-atlas-gold-600">
            Portfolio
          </a>
          <a href="#" className="text-atlas-brown-700 hover:text-atlas-gold-600">
            About
          </a>
        </nav>
        
        <AtlasButton variant="primary" size="md">
          Get Quote
        </AtlasButton>
      </div>
    </header>
  );
}
```

## 🚀 Quick Start

1. Copy the component files to your project:
   - `/src/components/AtlasLogo.tsx`
   - `/src/components/AtlasLogoAdvanced.tsx`
   - `/src/components/AtlasBrandKit.tsx`

2. Update your `tailwind.config.js` with the Atlas theme extension

3. Import and use the components in your application

4. Visit `/brand-showcase` to see all components in action

## 📋 File Structure

```
src/
├── components/
│   ├── AtlasLogo.tsx          # Basic logo variations
│   ├── AtlasLogoAdvanced.tsx  # Interactive & loading logos
│   └── AtlasBrandKit.tsx      # UI component library
└── pages/
    └── brand-showcase.tsx      # Demo page with all components
```

## 🎨 Brand Guidelines

- **Primary Use**: Always prefer the animated logo for main brand representation
- **Spacing**: Maintain adequate spacing around the logo (minimum 20px)
- **Colors**: Use the defined color palette consistently
- **Typography**: Pair with clean, professional fonts
- **Animations**: Use sparingly to enhance, not distract

## 🤝 Support

For questions or customization requests, please refer to the brand showcase page at `/brand-showcase` for live examples and implementation details.