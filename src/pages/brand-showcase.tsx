import React from 'react';
import { AtlasLogo, AtlasLogoAnimated, AtlasLogoMinimal } from '../components/AtlasLogo';
import { AtlasLogoAdvanced, AtlasLogoLoading } from '../components/AtlasLogoAdvanced';
import {
  AtlasButton,
  AtlasCard,
  AtlasBadge,
  AtlasSpinner,
  AtlasDivider,
  AtlasSection,
  AtlasIconButton,
} from '../components/AtlasBrandKit';

export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-atlas-gold-50 to-white dark:from-atlas-brown-900 dark:to-atlas-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-atlas-brown-900 to-atlas-gold-600 bg-clip-text text-transparent mb-4">
            Atlas Al Sharq Brand Identity
          </h1>
          <p className="text-xl text-atlas-brown-600 dark:text-atlas-gold-400">
            Professional Exhibition & Conference Solutions
          </p>
        </div>

        {/* Logo Variations Section */}
        <AtlasSection
          title="Logo Variations"
          subtitle="Multiple logo designs for different use cases"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AtlasCard title="Default Logo" description="Standard logo with company name">
            <div className="flex justify-center py-8">
              <AtlasLogo size={150} />
            </div>
          </AtlasCard>
          
          <AtlasCard title="Animated Logo" description="Logo with smooth animations">
            <div className="flex justify-center py-8">
              <AtlasLogoAnimated size={150} />
            </div>
          </AtlasCard>
          
          <AtlasCard title="Interactive Logo" description="Hover for advanced effects">
            <div className="flex justify-center py-8">
              <AtlasLogoAdvanced size={150} />
            </div>
          </AtlasCard>
          
          <AtlasCard title="Minimal Logo" description="Simplified version without text">
            <div className="flex justify-center py-8">
              <AtlasLogoMinimal size={150} showText={false} />
            </div>
          </AtlasCard>
          
          <AtlasCard title="Loading State" description="Animated loading spinner">
            <div className="flex justify-center py-8">
              <AtlasLogoLoading size={80} />
            </div>
          </AtlasCard>
          
          <AtlasCard title="Small Icons" description="Various sizes for different contexts">
            <div className="flex justify-center items-center gap-4 py-8">
              <AtlasLogo size={50} showText={false} />
              <AtlasLogo size={75} showText={false} />
              <AtlasLogo size={100} showText={false} />
            </div>
          </AtlasCard>
        </div>

        <AtlasDivider gradient />

        {/* Color Palette Section */}
        <AtlasSection
          title="Brand Colors"
          subtitle="Rich browns and golden gradients for professional elegance"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {/* Brown Colors */}
          <div className="space-y-2">
            <div className="h-24 bg-atlas-dark rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Dark</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-brown-800 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Brown 800</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-brown-600 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Brown 600</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-brown-400 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Brown 400</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-brown-200 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Brown 200</p>
          </div>
          
          {/* Gold Colors */}
          <div className="space-y-2">
            <div className="h-24 bg-atlas-gold-900 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Gold 900</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-gold-700 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Gold 700</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-gold-500 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Gold 500</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-gold-300 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Gold 300</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-atlas-gold-100 rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Gold 100</p>
          </div>
        </div>

        {/* Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="space-y-2">
            <div className="h-32 bg-atlas-primary rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Primary Gradient</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-atlas-shine rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Shine Effect</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-atlas-radial rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Radial Gradient</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-atlas-metallic rounded-lg shadow-md"></div>
            <p className="text-sm font-medium text-center">Metallic Gradient</p>
          </div>
        </div>

        <AtlasDivider gradient />

        {/* UI Components Section */}
        <AtlasSection
          title="UI Components"
          subtitle="Ready-to-use branded components"
        />
        
        {/* Buttons */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-atlas-brown-800 dark:text-atlas-gold-300 mb-6">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <AtlasButton variant="primary">Primary Button</AtlasButton>
            <AtlasButton variant="secondary">Secondary Button</AtlasButton>
            <AtlasButton variant="outline">Outline Button</AtlasButton>
            <AtlasButton variant="ghost">Ghost Button</AtlasButton>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <AtlasButton size="sm">Small</AtlasButton>
            <AtlasButton size="md">Medium</AtlasButton>
            <AtlasButton size="lg">Large</AtlasButton>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-atlas-brown-800 dark:text-atlas-gold-300 mb-6">Badges</h3>
          <div className="flex flex-wrap gap-4">
            <AtlasBadge>Default</AtlasBadge>
            <AtlasBadge variant="success">Success</AtlasBadge>
            <AtlasBadge variant="warning">Warning</AtlasBadge>
            <AtlasBadge variant="error">Error</AtlasBadge>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-atlas-brown-800 dark:text-atlas-gold-300 mb-6">Icon Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <AtlasIconButton icon="🏛️" variant="default" />
            <AtlasIconButton icon="✨" variant="gold" />
            <AtlasIconButton icon="📅" variant="ghost" />
            <AtlasIconButton icon="🎯" variant="default" size="lg" />
          </div>
        </div>

        {/* Loading States */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-atlas-brown-800 dark:text-atlas-gold-300 mb-6">Loading States</h3>
          <div className="flex flex-wrap items-center gap-8">
            <AtlasSpinner size="sm" />
            <AtlasSpinner size="md" />
            <AtlasSpinner size="lg" />
            <AtlasLogoLoading size={60} />
          </div>
        </div>

        <AtlasDivider gradient />

        {/* Usage Examples */}
        <AtlasSection
          title="Integration Examples"
          subtitle="Copy and paste these code snippets"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AtlasCard title="Basic Logo Implementation">
            <pre className="bg-atlas-brown-900 text-atlas-gold-300 p-4 rounded-lg overflow-x-auto text-sm">
{`import { AtlasLogoAnimated } from '@/components/AtlasLogo';

function Header() {
  return (
    <div className="header">
      <AtlasLogoAnimated size={120} />
    </div>
  );
}`}
            </pre>
          </AtlasCard>
          
          <AtlasCard title="Brand Colors Usage">
            <pre className="bg-atlas-brown-900 text-atlas-gold-300 p-4 rounded-lg overflow-x-auto text-sm">
{`// Tailwind classes
<div className="bg-atlas-brown-800">
  <h1 className="text-atlas-gold-500">
    Atlas Al Sharq
  </h1>
  <div className="bg-atlas-primary">
    Gradient Background
  </div>
</div>`}
            </pre>
          </AtlasCard>
        </div>
      </div>
    </div>
  );
}