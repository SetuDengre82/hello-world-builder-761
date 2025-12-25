# Marriage Profile Generator - Integration Guide (30 Templates)

## Overview
This is a complete biodata/marriage profile generator with 30 templates, 20 color themes, 8 Ganesh Ji styles, and PDF/Image export functionality.

## Files to Copy

### Core Components (Required)
```
src/components/builder/
├── ProfileBuilder.tsx      # Main builder component
├── FormatTab.tsx          # Template selection
├── ColorsTab.tsx          # Color theme selection
├── ImagesTab.tsx          # Ganesh Ji & image size settings
├── DetailsTab.tsx         # Profile data form
└── ImageUpload.tsx        # Image upload component

src/components/templates/
├── index.ts               # Template exports
├── TemplateHelpers.tsx    # Shared template utilities
├── TemplatesSet1.tsx      # Templates 1-5
├── TemplatesSet2.tsx      # Templates 6-10
├── TemplatesSet3.tsx      # Templates 11-15
├── TemplatesSet4.tsx      # Templates 16-21
└── TemplatesSet5.tsx      # Templates 22-30 (NEW)
```

### Types & Utilities (Required)
```
src/types/
└── profile.ts             # ProfileData, ColorTheme, etc.

src/lib/
├── pdfExport.ts           # PDF & Image export functions
├── ganeshJiOptions.ts     # Ganesh Ji image options
└── utils.ts               # Utility functions (cn helper)
```

### Assets (Required)
```
src/assets/
├── ganesh-ji.png
├── ganesh-ji-classic.png
├── ganesh-ji-modern.png
├── ganesh-ji-lineart.png
├── ganesh-ji-golden.png
├── ganesh-ji-colorful.png
├── ganesh-ji-mandala.png
├── ganesh-ji-simple.png
└── ganesh-ji-traditional.png
```

### UI Components (Required - from shadcn/ui)
```
src/components/ui/
├── button.tsx
├── tabs.tsx
├── input.tsx
├── textarea.tsx
├── select.tsx
├── switch.tsx
├── label.tsx
├── accordion.tsx
├── dropdown-menu.tsx
└── ... (other shadcn components)
```

### Styles (Required)
```
src/index.css              # CSS variables & design tokens
tailwind.config.ts         # Tailwind configuration
```

## Dependencies to Install

```bash
npm install html2canvas jspdf lucide-react
npm install @radix-ui/react-tabs @radix-ui/react-select @radix-ui/react-switch
npm install @radix-ui/react-accordion @radix-ui/react-dropdown-menu
npm install class-variance-authority clsx tailwind-merge
npm install sonner  # For toast notifications
```

## Usage

### Basic Integration

```tsx
import { ProfileBuilder } from '@/components/builder/ProfileBuilder';

function BiodataPage() {
  return <ProfileBuilder />;
}
```

### Route Setup (React Router)
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfileBuilder } from '@/components/builder/ProfileBuilder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/biodata" element={<ProfileBuilder />} />
        {/* Your other routes */}
      </Routes>
    </BrowserRouter>
  );
}
```

## CSS Variables Required

Add these to your `index.css`:

```css
:root {
  /* Matrimony Theme Colors */
  --gold: 43 74% 49%;
  --maroon: 345 100% 25%;
  --cream: 40 60% 96%;
  --champagne: 36 60% 90%;
  
  /* Standard shadcn variables */
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --primary: 345 100% 25%;
  --primary-foreground: 0 0% 98%;
  --secondary: 43 74% 49%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 345 100% 25%;
  --radius: 0.5rem;
}

/* Custom fonts for templates */
.font-display {
  font-family: 'Playfair Display', serif;
}

.font-script {
  font-family: 'Great Vibes', cursive;
}
```

## Features

### 30 Template Designs
- Set 1: Classic Royal, Modern Minimal, Traditional Mandala, Elegant Floral, Royal Peacock
- Set 2: Saffron Traditional, Maroon Classic, Golden Gradient, Emerald Green, Purple Royal
- Set 3: Teal Modern, Coral Warm, Navy Formal, Rust Vintage, Sage Minimalist
- Set 4: Blush Elegant, Champagne Luxury, Olive Traditional, Diamond Premium, Rainbow Festive, Classic White
- Set 5 (NEW): Velvet Luxe, Jewel Classic, Sapphire Night, Emerald Garden, Pearl White, Ruby Romance, Topaz Sunshine, Onyx Midnight, Amethyst Dreams

### 20 Color Themes
- Gold & Maroon, Rose Gold, Royal Blue, Emerald
- Purple & Gold, Saffron, Teal, Burgundy
- Navy, Coral, Olive, Blush, Champagne
- Rust, Sage, Midnight, Terracotta, Peacock
- Mahogany, Ivory

### 8 Ganesh Ji Styles
- Classic (Traditional red & gold)
- Modern (Contemporary design)
- Line Art (Elegant outline)
- Golden (Luxurious gold)
- Colorful (Vibrant multi-color)
- Mandala (Intricate patterns)
- Simple (Clean minimal)
- Traditional (Authentic classic)

### Export Options
- PDF Export (Non-editable, image-based)
- Image Export (High-resolution PNG)
- Premium toggle removes watermark

### Profile Data Fields
- Personal Info (Name, DOB, Height, Weight, etc.)
- Religion & Community (Caste, Gotra, Manglik, etc.)
- Education & Career
- Family Details (with custom relationships)
- Contact Information
- Partner Preferences

## Customization

### Adding Custom Templates
1. Create new template in `TemplatesSet*.tsx`
2. Export from `templates/index.ts`
3. Add to `templateList` in `ProfileBuilder.tsx`

### Adding Custom Color Themes
1. Add to `colorThemes` array in `ColorsTab.tsx`

### Modifying Profile Fields
1. Update `ProfileData` interface in `types/profile.ts`
2. Add form fields in `DetailsTab.tsx`
3. Display in templates

## Watermark
- Free version shows "GahoiShaadi.com" diagonal watermark
- Premium toggle removes watermark
- Watermark is rendered as part of the image for PDF/export

## Support
For issues or customization help, contact the development team.
