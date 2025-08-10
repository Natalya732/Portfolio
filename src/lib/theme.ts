// Theme utilities and constants
export const theme = {
  colors: {
    // Light theme colors
    light: {
      bg: {
        primary: 'var(--theme-bg-primary)',
        secondary: 'var(--theme-bg-secondary)',
        tertiary: 'var(--theme-bg-tertiary)',
        card: 'var(--theme-card-bg)',
        input: 'var(--theme-input-bg)',
      },
      text: {
        primary: 'var(--theme-text-primary)',
        secondary: 'var(--theme-text-secondary)',
        muted: 'var(--theme-text-muted)',
      },
      border: {
        primary: 'var(--theme-border-primary)',
        secondary: 'var(--theme-border-secondary)',
      },
      accent: {
        primary: 'var(--theme-accent)',
        hover: 'var(--theme-accent-hover)',
      },
      shadow: {
        default: 'var(--theme-shadow)',
        hover: 'var(--theme-shadow-hover)',
      },
    },
    // Dark theme colors
    dark: {
      bg: {
        primary: 'var(--theme-bg-primary)',
        secondary: 'var(--theme-bg-secondary)',
        tertiary: 'var(--theme-bg-tertiary)',
        card: 'var(--theme-card-bg)',
        input: 'var(--theme-input-bg)',
      },
      text: {
        primary: 'var(--theme-text-primary)',
        secondary: 'var(--theme-text-secondary)',
        muted: 'var(--theme-text-muted)',
      },
      border: {
        primary: 'var(--theme-border-primary)',
        secondary: 'var(--theme-border-secondary)',
      },
      accent: {
        primary: 'var(--theme-accent)',
        hover: 'var(--theme-accent-hover)',
      },
      shadow: {
        default: 'var(--theme-shadow)',
        hover: 'var(--theme-shadow-hover)',
      },
    },
  },
  // Common color combinations
  variants: {
    card: {
      light: 'bg-white border border-gray-200 shadow-sm',
      dark: 'bg-gray-800 border border-gray-700 shadow-lg',
    },
    button: {
      primary: {
        light: 'bg-blue-600 hover:bg-blue-700 text-white',
        dark: 'bg-blue-500 hover:bg-blue-600 text-white',
      },
      secondary: {
        light: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
        dark: 'bg-gray-700 hover:bg-gray-600 text-white',
      },
      accent: {
        light: 'bg-orange-500 hover:bg-orange-600 text-white',
        dark: 'bg-orange-500 hover:bg-orange-600 text-white',
      },
    },
    input: {
      light: 'bg-white border border-gray-300 focus:border-blue-500',
      dark: 'bg-gray-800 border border-gray-600 focus:border-blue-400',
    },
  },
} as const;

// Helper function to get theme-aware class names
export function getThemeClasses(
  baseClasses: string,
  lightClasses: string = '',
  darkClasses: string = ''
): string {
  return `${baseClasses} ${lightClasses} dark:${darkClasses}`;
}

// Common theme-aware class combinations
export const themeClasses = {
  // Backgrounds
  bg: {
    primary: 'bg-white dark:bg-black',
    secondary: 'bg-gray-50 dark:bg-gray-900',
    card: 'bg-white dark:bg-gray-800',
    input: 'bg-gray-100 dark:bg-gray-700',
  },
  // Text colors
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    accent: 'text-orange-500 dark:text-orange-400',
  },
  // Borders
  border: {
    primary: 'border-gray-200 dark:border-gray-700',
    secondary: 'border-gray-300 dark:border-gray-600',
    accent: 'border-orange-500 dark:border-orange-400',
  },
  // Shadows
  shadow: {
    sm: 'shadow-sm dark:shadow-lg',
    md: 'shadow-md dark:shadow-xl',
    lg: 'shadow-lg dark:shadow-2xl',
  },
  // Hover states
  hover: {
    bg: {
      primary: 'hover:bg-gray-50 dark:hover:bg-gray-800',
      accent: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
    },
    text: {
      primary: 'hover:text-gray-900 dark:hover:text-white',
      accent: 'hover:text-orange-500 dark:hover:text-orange-400',
    },
  },
} as const;

// Type definitions for better TypeScript support
export type ThemeMode = 'light' | 'dark';
export type ThemeColor = keyof typeof theme.colors.light;
export type ThemeVariant = keyof typeof theme.variants;
