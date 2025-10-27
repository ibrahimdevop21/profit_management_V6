# Navbar Component Integration Guide

## Overview
This responsive, sticky navbar component is built for Astro projects using Tailwind CSS and Flowbite. It features a premium design with gradient animation, dropdown menus, and full mobile responsiveness.

## Files Created
- `src/components/Navbar.astro` - Main navbar component
- `src/layouts/NavbarLayout.astro` - Example layout with Flowbite integration
- `src/pages/navbar-example.astro` - Demo page
- `NAVBAR_INTEGRATION.md` - This integration guide

## Installation & Setup

### 1. Quick Installation
Run the installation script:
```bash
./install-navbar.sh
```

Or install manually:
```bash
npm install flowbite
```

### 2. Dependencies
The following have been added to your project:
- ✅ `flowbite: ^2.2.1` added to package.json
- ✅ Tailwind config updated with Flowbite content paths
- ✅ Flowbite plugin added to Tailwind plugins

### 3. Flowbite Integration
The navbar uses proper Flowbite imports (not CDN):

```astro
<!-- In your Layout.astro file -->
<script>
  import 'flowbite';
</script>
```

### 3. Basic Usage

```astro
---
import Navbar from '~/components/Navbar.astro';

// Get current path for active link highlighting
const currentPath = new URL(Astro.request.url).pathname;
---

<!DOCTYPE html>
<html>
<head>
  <!-- Your head content -->
</head>
<body>
  <!-- Navbar -->
  <Navbar currentPath={currentPath} />
  
  <!-- Main content with top padding to account for fixed navbar -->
  <main class="pt-16">
    <!-- Your page content -->
  </main>
  
  <!-- Flowbite JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
</body>
</html>
```

## Features

### ✅ Sticky Positioning
- Fixed to top with `fixed top-0 left-0 w-full z-50`
- Remains visible during scroll

### ✅ Gradient Animation
- Smooth 18-second gradient animation
- White to gold color scheme matching brand
- `bg-gradient-to-r from-[#ffffff] via-[#faedc6] to-[#ffffff]`

### ✅ Services Dropdown
- Flowbite-powered dropdown menu
- Four service categories with descriptions
- Hover effects and smooth transitions

### ✅ Language Switcher
- EN/AR toggle with flag icons
- Right-aligned dropdown
- Globe icon indicator

### ✅ Mobile Responsiveness
- Hamburger menu for mobile screens
- Collapsible navigation
- Mobile-optimized dropdowns

### ✅ Premium Styling
- Glass morphism effect with backdrop blur
- Subtle shadows and borders
- Professional color scheme (#0D3B66 navy, #C9A227 gold)

## Customization

### Colors
Update the color scheme by modifying these classes:
- Text: `text-[#0D3B66]` (navy)
- Hover: `text-[#C9A227]` (gold)
- Background: `bg-[#faedc6]` (light gold)
- Borders: `border-[#E9D8A6]` (gold border)

### Navigation Links
Modify the navigation links in the `Navbar.astro` component:

```astro
<!-- Add/modify links in both desktop and mobile sections -->
<li>
  <a href="/your-page" class="hover:text-[#C9A227] transition-all duration-300 px-3 py-2 rounded-lg">
    Your Page
  </a>
</li>
```

### Services Dropdown
Update service items in the dropdown:

```astro
<li>
  <a href="/services#your-service" class="block px-4 py-3 hover:bg-gray-100 hover:text-[#C9A227] transition-all duration-300">
    <div class="font-medium">Your Service</div>
    <div class="text-xs text-gray-500 mt-1">Service description</div>
  </a>
</li>
```

## Logo Integration
Replace the logo source in the navbar:

```astro
<img 
  src="/your-logo.svg" 
  alt="Your Company Logo" 
  class="h-8 w-auto"
/>
```

## Active Link Highlighting
The navbar automatically highlights the current page based on the `currentPath` prop:

```astro
---
const currentPath = new URL(Astro.request.url).pathname;
---

<Navbar currentPath={currentPath} />
```

## Responsive Breakpoints
- Desktop: `md:flex` (768px and up)
- Mobile: `md:hidden` (below 768px)
- Logo text: `hidden sm:block` (shows on 640px and up)

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- JavaScript required for dropdown functionality
- Backdrop-filter support for blur effects

## Troubleshooting

### Dropdowns not working
- Ensure Flowbite JavaScript is loaded
- Check console for JavaScript errors
- Verify `data-dropdown-toggle` attributes match element IDs

### Gradient animation not showing
- Confirm Tailwind CSS is processing custom animations
- Check if `animate-gradientSlide` class is applied
- Verify keyframes are defined in the style block

### Mobile menu not toggling
- Ensure Flowbite JS is loaded after DOM content
- Check `data-collapse-toggle` attribute
- Verify mobile menu ID matches toggle target

## Performance Notes
- Gradient animation uses CSS transforms for smooth performance
- Backdrop blur may impact performance on older devices
- Consider lazy loading Flowbite JS if not needed immediately

## Example Implementation
See `src/pages/navbar-example.astro` for a complete working example with test content and scroll behavior demonstration.
