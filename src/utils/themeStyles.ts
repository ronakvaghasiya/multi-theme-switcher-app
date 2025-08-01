import { Theme } from '../types/theme';

// Theme-specific color mappings
const themeColors = {
  sidebar: {
    primary: 'text-purple-300',
    secondary: 'text-gray-300',
    accent: 'text-purple-200',
    background: 'bg-gray-900',
    surface: 'bg-gray-800',
    border: 'border-gray-700',
    button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
    input: 'bg-gray-700 text-white border-gray-600 focus:ring-purple-500 focus:border-purple-500',
    error: 'text-red-400',
    loading: 'text-purple-300',
    price: 'text-yellow-400',
    card: 'bg-gray-700 border border-gray-600 hover:border-purple-500',
  },
  'card-grid': {
    primary: 'text-pink-800',
    secondary: 'text-pink-600',
    accent: 'text-cyan-600',
    background: 'bg-gradient-to-br from-pink-100 to-purple-100',
    surface: 'bg-white',
    border: 'border-pink-200',
    button: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 focus:ring-pink-500',
    input: 'bg-pink-50 text-pink-800 border-pink-300 focus:ring-pink-500 focus:border-pink-500',
    error: 'text-red-600',
    loading: 'text-pink-600',
    price: 'text-cyan-600',
    card: 'bg-white border-2 border-pink-200 hover:border-pink-400 transform hover:scale-105',
  },
  minimalist: {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
    accent: 'text-blue-600',
    background: 'bg-gray-50',
    surface: 'bg-white',
    border: 'border-gray-200',
    button: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    input: 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500 focus:border-blue-500',
    error: 'text-red-600',
    loading: 'text-blue-600',
    price: 'text-green-600',
    card: 'bg-white border border-gray-200 hover:border-blue-300',
  },
};

// Font mappings
const themeFonts = {
  sidebar: {
    heading: 'font-serif',
    body: 'font-serif',
  },
  'card-grid': {
    heading: 'font-pacifico',
    body: 'font-comic',
  },
  minimalist: {
    heading: 'font-sans',
    body: 'font-sans',
  },
};

// Layout-specific styles
const layoutStyles = {
  sidebar: {
    container: 'bg-gray-900 text-white lg:pl-64',
    content: 'max-w-6xl mx-auto',
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },
  'card-grid': {
    container: 'bg-gradient-to-br from-pink-100 to-purple-100',
    content: 'max-w-7xl mx-auto',
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },
  minimalist: {
    container: 'bg-gray-50',
    content: 'max-w-6xl mx-auto',
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },
};

// Common style generators
export const getThemeStyles = (theme: Theme) => {
  const layoutType = theme.layout.type;
  const colors = themeColors[layoutType];
  const fonts = themeFonts[layoutType];
  const layout = layoutStyles[layoutType];

  return {
    // Container styles
    container: () => `min-h-screen transition-all duration-300 ease-in-out theme-transition ${layout.container}`,
    
    // Content styles
    content: (customMaxWidth?: string) => `pt-20 px-4 sm:px-6 lg:px-8 ${customMaxWidth || layout.content}`,
    
    // Typography styles
    title: (size: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' = '4xl') => {
      const sizeClass = `text-${size}`;
      return `${sizeClass} font-bold mb-4 sm:mb-6 text-center ${fonts.heading} ${colors.primary}`;
    },
    
    heading: (size: 'lg' | 'xl' | '2xl' = '2xl') => {
      const sizeClass = `text-${size}`;
      return `${sizeClass} font-bold mb-3 sm:mb-4 ${fonts.heading} ${colors.primary}`;
    },
    
    text: () => `leading-relaxed mb-3 sm:mb-4 ${fonts.body} ${colors.secondary}`,
    
    subtitle: () => `text-base sm:text-lg mb-6 sm:mb-8 text-center max-w-2xl mx-auto px-4 ${fonts.body} ${colors.secondary}`,
    
    // Card styles
    card: (variant: 'default' | 'compact' = 'default') => {
      const baseStyles = 'rounded-lg shadow-md transition-all duration-300 ease-in-out';
      const padding = variant === 'compact' ? 'p-4 sm:p-6' : 'p-6 sm:p-8 mb-6 sm:mb-8';
      return `${baseStyles} ${padding} ${colors.card}`;
    },
    
    // Button styles
    button: (variant: 'primary' | 'secondary' | 'full' = 'primary') => {
      const baseStyles = 'px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 text-sm sm:text-base';
      const fullWidth = variant === 'full' ? 'w-full' : '';
      return `${baseStyles} ${fullWidth} ${colors.button}`;
    },
    
    // Input styles
    input: () => `w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 text-sm sm:text-base ${colors.input}`,
    
    // Grid styles
    grid: () => `grid gap-6 ${layout.grid}`,
    
    // Status styles
    loading: () => `flex items-center justify-center py-12 sm:py-20 ${colors.loading}`,
    error: () => `text-center py-12 sm:py-20 px-4 ${colors.error}`,
    
    // Product card specific styles
    productCard: {
      card: () => `rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden ${colors.card} h-full flex flex-col`,
      title: () => `font-bold text-base sm:text-lg mb-2 line-clamp-2 ${fonts.heading} ${colors.primary} flex-grow`,
      price: () => `text-lg sm:text-xl font-bold ${colors.price}`,
      button: () => `w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 text-sm sm:text-base ${colors.button} flex-shrink-0`,
    },
    
    // Form styles
    form: {
      success: () => {
        const baseStyles = 'p-4 rounded-md mb-4';
        switch (layoutType) {
          case 'sidebar':
            return `${baseStyles} bg-green-800 text-green-200 border border-green-600`;
          case 'card-grid':
            return `${baseStyles} bg-green-100 text-green-800 border-2 border-green-300`;
          default:
            return `${baseStyles} bg-green-100 text-green-800 border border-green-300`;
        }
      },
    },
    
    // Feature list styles
    featureList: () => `space-y-2 sm:space-y-3 ${fonts.body} ${colors.secondary}`,
    featureItem: () => `flex items-start space-x-2 sm:space-x-3 ${colors.accent}`,
  };
};

// Specific style helpers for common patterns
export const getContainerStyles = (theme: Theme) => getThemeStyles(theme).container();
export const getContentStyles = (theme: Theme, customMaxWidth?: string) => getThemeStyles(theme).content(customMaxWidth);
export const getTitleStyles = (theme: Theme, size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl') => getThemeStyles(theme).title(size);
export const getHeadingStyles = (theme: Theme, size?: 'lg' | 'xl' | '2xl') => getThemeStyles(theme).heading(size);
export const getTextStyles = (theme: Theme) => getThemeStyles(theme).text();
export const getSubtitleStyles = (theme: Theme) => getThemeStyles(theme).subtitle();
export const getCardStyles = (theme: Theme, variant?: 'default' | 'compact') => getThemeStyles(theme).card(variant);
export const getButtonStyles = (theme: Theme, variant?: 'primary' | 'secondary' | 'full') => getThemeStyles(theme).button(variant);
export const getInputStyles = (theme: Theme) => getThemeStyles(theme).input();
export const getGridStyles = (theme: Theme) => getThemeStyles(theme).grid();
export const getLoadingStyles = (theme: Theme) => getThemeStyles(theme).loading();
export const getErrorStyles = (theme: Theme) => getThemeStyles(theme).error();
export const getFeatureListStyles = (theme: Theme) => getThemeStyles(theme).featureList();
export const getFeatureItemStyles = (theme: Theme) => getThemeStyles(theme).featureItem();
export const getSuccessStyles = (theme: Theme) => getThemeStyles(theme).form.success();

// Product card specific helpers
export const getProductCardStyles = (theme: Theme) => getThemeStyles(theme).productCard; 