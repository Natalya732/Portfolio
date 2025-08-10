# Theme System Guide

This portfolio uses a comprehensive theme system with CSS custom properties and utility classes for consistent theming across light and dark modes.

## 🎨 Theme Variables

### CSS Custom Properties

The theme system uses CSS custom properties defined in `src/app/globals.css`:

```css
:root {
  /* Theme Variables */
  --theme-bg-primary: #ffffff;
  --theme-bg-secondary: #f8f9fa;
  --theme-bg-tertiary: #f1f3f4;
  --theme-text-primary: #1a1a1a;
  --theme-text-secondary: #6b7280;
  --theme-text-muted: #9ca3af;
  --theme-border-primary: #e5e7eb;
  --theme-border-secondary: #d1d5db;
  --theme-accent: #ff6b35;
  --theme-accent-hover: #ff8c42;
  --theme-card-bg: #f8f9fa;
  --theme-input-bg: #f8f9fa;
  --theme-shadow: rgba(0, 0, 0, 0.1);
  --theme-shadow-hover: rgba(0, 0, 0, 0.15);
}

.dark {
  /* Dark theme overrides */
  --theme-bg-primary: #000000;
  --theme-bg-secondary: #0f295c;
  --theme-bg-tertiary: #1e4eae;
  --theme-text-primary: #ffffff;
  --theme-text-secondary: #9ea3b0;
  --theme-text-muted: #9ea3b0;
  --theme-border-primary: #546a7b;
  --theme-border-secondary: #1e4eae;
  --theme-accent: #ff6b35;
  --theme-accent-hover: #ff8c42;
  --theme-card-bg: #0f295c;
  --theme-input-bg: #0f295c;
  --theme-shadow: rgba(0, 0, 0, 0.3);
  --theme-shadow-hover: rgba(0, 0, 0, 0.4);
}
```

## 🛠️ Theme Utilities

### Import Theme Utilities

```typescript
import { themeClasses, getThemeClasses, theme } from "@/lib/theme";
```

### Using Theme Classes

#### 1. Background Colors
```typescript
// Primary background (white/black)
className={themeClasses.bg.primary}

// Secondary background (gray-50/gray-900)
className={themeClasses.bg.secondary}

// Card background (white/gray-800)
className={themeClasses.bg.card}

// Input background (gray-100/gray-700)
className={themeClasses.bg.input}
```

#### 2. Text Colors
```typescript
// Primary text (gray-900/white)
className={themeClasses.text.primary}

// Secondary text (gray-600/gray-300)
className={themeClasses.text.secondary}

// Muted text (gray-500/gray-400)
className={themeClasses.text.muted}

// Accent text (orange-500/orange-400)
className={themeClasses.text.accent}
```

#### 3. Borders
```typescript
// Primary border (gray-200/gray-700)
className={themeClasses.border.primary}

// Secondary border (gray-300/gray-600)
className={themeClasses.border.secondary}

// Accent border (orange-500/orange-400)
className={themeClasses.border.accent}
```

#### 4. Shadows
```typescript
// Small shadow
className={themeClasses.shadow.sm}

// Medium shadow
className={themeClasses.shadow.md}

// Large shadow
className={themeClasses.shadow.lg}
```

#### 5. Hover States
```typescript
// Background hover
className={themeClasses.hover.bg.primary}
className={themeClasses.hover.bg.accent}

// Text hover
className={themeClasses.hover.text.primary}
className={themeClasses.hover.text.accent}
```

## 📝 Examples

### Basic Component with Theme
```typescript
import { themeClasses } from "@/lib/theme";

const MyComponent = () => {
  return (
    <div className={`${themeClasses.bg.card} ${themeClasses.border.primary} rounded-lg p-6`}>
      <h2 className={`${themeClasses.text.primary} text-2xl font-bold mb-4`}>
        Title
      </h2>
      <p className={`${themeClasses.text.secondary} mb-4`}>
        Description text
      </p>
      <button className={`${themeClasses.bg.primary} ${themeClasses.text.primary} ${themeClasses.border.secondary} px-4 py-2 rounded ${themeClasses.hover.bg.primary} transition-colors`}>
        Click me
      </button>
    </div>
  );
};
```

### Using getThemeClasses Helper
```typescript
import { getThemeClasses } from "@/lib/theme";

const MyComponent = () => {
  return (
    <div className={getThemeClasses(
      "p-6 rounded-lg", // Base classes
      "bg-white border border-gray-200", // Light theme classes
      "bg-gray-800 border border-gray-700" // Dark theme classes
    )}>
      Content
    </div>
  );
};
```

### Using Theme Object
```typescript
import { theme } from "@/lib/theme";

const MyComponent = () => {
  return (
    <div style={{ backgroundColor: theme.colors.light.bg.primary }}>
      Content
    </div>
  );
};
```

## 🎯 Best Practices

1. **Use themeClasses for common patterns**: Prefer `themeClasses` over manual class combinations
2. **Consistent naming**: Use semantic names like `primary`, `secondary`, `muted`
3. **Avoid hardcoded colors**: Always use theme variables or utility classes
4. **Test both themes**: Ensure components look good in both light and dark modes
5. **Use CSS custom properties**: For complex styling, use the CSS variables directly

## 🔧 Adding New Theme Variables

To add new theme variables:

1. Add to CSS custom properties in `src/app/globals.css`:
```css
:root {
  --theme-new-color: #value;
}

.dark {
  --theme-new-color: #dark-value;
}
```

2. Add to theme utilities in `src/lib/theme.ts`:
```typescript
export const themeClasses = {
  // ... existing classes
  newColor: 'text-[var(--theme-new-color)]',
};
```

3. Use in components:
```typescript
className={themeClasses.newColor}
```

## 🎨 Color Palette

### Light Theme
- **Primary Background**: `#ffffff` (White)
- **Secondary Background**: `#f8f9fa` (Light Gray)
- **Primary Text**: `#1a1a1a` (Dark Gray)
- **Secondary Text**: `#6b7280` (Medium Gray)
- **Accent**: `#ff6b35` (Orange)

### Dark Theme
- **Primary Background**: `#000000` (Black)
- **Secondary Background**: `#0f295c` (Dark Blue)
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#9ea3b0` (Light Gray)
- **Accent**: `#ff6b35` (Orange)

This theme system provides a consistent, maintainable way to handle theming across your entire portfolio application.
