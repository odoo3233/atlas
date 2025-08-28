/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Atlas Al Sharq Brand Colors
        atlas: {
          // Primary Dark Browns
          'dark': '#1a0f0a',        // Deep chocolate black
          // Aliases for existing usage across the app
          // Map primary -> brown scale, secondary -> gold scale, accent -> gold scale
          'primary': {
            900: '#2d1810',
            800: '#3d2418',
            700: '#4d3020',
            600: '#5d3c28',
            500: '#6d4830',
            400: '#8a5a3c',
            300: '#a76c48',
            200: '#c48e6a',
            100: '#e1b08c',
            50: '#f5e8dc',
          },
          'secondary': {
            900: '#714610',
            800: '#8f5a1f',
            700: '#b3722e',
            600: '#d4893d',
            500: '#e8a04c',
            400: '#f0b76b',
            300: '#f5c889',
            200: '#f9daa8',
            100: '#fdecc6',
            50: '#fffef5',
          },
          'accent': {
            900: '#714610',
            800: '#8f5a1f',
            700: '#b3722e',
            600: '#d4893d',
            500: '#e8a04c',
            400: '#f0b76b',
            300: '#f5c889',
            200: '#f9daa8',
            100: '#fdecc6',
            50: '#fffef5',
          },
          'brown': {
            900: '#2d1810',         // Darkest brown
            800: '#3d2418',         // Very dark brown
            700: '#4d3020',         // Dark brown
            600: '#5d3c28',         // Medium-dark brown
            500: '#6d4830',         // Medium brown
            400: '#8a5a3c',         // Light-medium brown
            300: '#a76c48',         // Light brown
            200: '#c48e6a',         // Very light brown
            100: '#e1b08c',         // Pale brown
            50: '#f5e8dc',          // Cream
          },
          // Golden Gradient Colors
          'gold': {
            900: '#714610',         // Dark gold
            800: '#8f5a1f',         // Deep gold
            700: '#b3722e',         // Rich gold
            600: '#d4893d',         // Medium gold
            500: '#e8a04c',         // Primary gold
            400: '#f0b76b',         // Light gold
            300: '#f5c889',         // Pale gold
            200: '#f9daa8',         // Very pale gold
            100: '#fdecc6',         // Champagne
            50: '#fffef5',          // Off-white gold
          },
          // Gradient definitions for use in CSS
          'gradient': {
            'primary': 'linear-gradient(135deg, #2d1810 0%, #d4893d 100%)',
            'shine': 'linear-gradient(90deg, #d4893d 0%, #f5c889 50%, #d4893d 100%)',
            'radial': 'radial-gradient(circle, #f5c889 0%, #d4893d 50%, #2d1810 100%)',
            'elegant': 'linear-gradient(180deg, #1a0f0a 0%, #4d3020 35%, #b3722e 70%, #f5c889 100%)',
          },
        },
        // Color palette from palette.scss
        palette: {
          'van-dyke': '#483d3f',
          'celestial-blue': '#058ed9',
          'eggshell': '#f4ebd9',
          'battleship-gray': '#a39a92',
          'umber': '#77685d',
        },
        // New color palette from palette1.scss
        'eerie-black': '#1c1c1c',
        'platinum': '#daddd8',
        'alabaster': '#ecebe4',
        'antiflash-white': '#eef0f2',
        'ghost-white': '#fafaff',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // Atlas brand animations
        "atlas-rotate": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "atlas-pulse": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        "atlas-shine": {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        "atlas-fade-in": {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        "atlas-glow": {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(212, 137, 61, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(212, 137, 61, 0.8))' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Atlas animations
        "atlas-rotate": "atlas-rotate 20s linear infinite",
        "atlas-pulse": "atlas-pulse 3s ease-in-out infinite",
        "atlas-shine": "atlas-shine 3s ease-in-out infinite",
        "atlas-fade-in": "atlas-fade-in 0.8s ease-out forwards",
        "atlas-glow": "atlas-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        // Atlas Brown & Gold Gradients
        'atlas-primary': 'linear-gradient(135deg, #2d1810 0%, #d4893d 100%)',
        'atlas-hero': 'linear-gradient(135deg, #1a0f0a 0%, #4d3020 50%, #d4893d 100%)',
        'atlas-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        'atlas-button': 'linear-gradient(135deg, #d4893d 0%, #f0b76b 100%)',
        'atlas-accent': 'linear-gradient(90deg, #f5c889 0%, #d4893d 50%, #8a5a3c 100%)',
        'atlas-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
