# Multi-Theme Switcher App

A modern React-based web application featuring a dynamic theme switcher with three distinct themes. Built with TypeScript, Tailwind CSS, and React Router, this application demonstrates advanced theming capabilities with different layouts, fonts, and visual styles.

## 🎨 Features

### Theme System
- **Theme 1 (Minimalist)**: Clean, simple design with light background and sans-serif fonts
- **Theme 2 (Dark Sidebar)**: Professional dark theme with sidebar navigation and serif fonts
- **Theme 3 (Colorful Cards)**: Playful and vibrant design with card-based layout and Google Fonts

### Core Functionality
- ✅ **Dynamic Theme Switching**: Seamless transition between three distinct themes
- ✅ **Theme Persistence**: User preferences saved in localStorage
- ✅ **Responsive Design**: Fully responsive across all devices
- ✅ **Real API Integration**: Fetches products from FakeStore API
- ✅ **Multiple Pages**: Home, About, and Contact pages with React Router
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Accessibility**: WCAG compliant with proper focus management
- ✅ **Performance**: Optimized with lazy loading and efficient re-renders

### Technical Features
- **Context API**: Centralized theme management
- **Custom Hooks**: Reusable theme logic
- **Error Handling**: Comprehensive error boundaries and API error handling
- **Loading States**: Smooth loading animations and skeleton screens
- **Form Validation**: Client-side validation with proper feedback
- **Security**: XSS protection and secure API calls

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with theme switcher
│   ├── Sidebar.tsx     # Sidebar navigation (Theme 2)
│   └── ProductCard.tsx # Product display component
├── contexts/           # React Context providers
│   └── ThemeContext.tsx # Theme management context
├── pages/              # Page components
│   ├── Home.tsx        # Main product listing page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact form page
├── services/           # API and external services
│   └── api.ts          # FakeStore API integration
├── types/              # TypeScript type definitions
│   └── theme.ts        # Theme and product interfaces
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Theme Details

### Theme 1: Minimalist
- **Colors**: Light blue primary, gray accents
- **Fonts**: Inter (sans-serif)
- **Layout**: Clean, centered content
- **Spacing**: Moderate, comfortable reading

### Theme 2: Dark Sidebar
- **Colors**: Dark background, purple accents
- **Fonts**: Georgia (serif)
- **Layout**: Fixed sidebar with main content area
- **Spacing**: Generous, professional feel

### Theme 3: Colorful Cards
- **Colors**: Pink/purple gradient, vibrant accents
- **Fonts**: Pacifico (cursive) for headings
- **Layout**: Card-based grid system
- **Spacing**: Compact, playful design

## 🔧 Customization

### Adding New Themes

1. **Define theme in `ThemeContext.tsx`**:
   ```typescript
   theme4: {
     name: 'theme4',
     displayName: 'Theme 4',
     colors: { /* your colors */ },
     fonts: { /* your fonts */ },
     spacing: { /* your spacing */ },
     layout: { type: 'your-layout-type' }
   }
   ```

2. **Add theme option to Header component**
3. **Implement theme-specific styles in components**

### Modifying Existing Themes

Edit the theme objects in `src/contexts/ThemeContext.tsx` to customize colors, fonts, and spacing.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **XSS Protection**: All user inputs are properly sanitized
- **API Security**: Secure API calls with error handling
- **Content Security Policy**: Configured for production builds
- **HTTPS**: Recommended for production deployment

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📦 Build and Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **Heroku**: Deploy using Heroku CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for providing product data
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React Router](https://reactrouter.com/) for client-side routing
- [Google Fonts](https://fonts.google.com/) for beautiful typography

## 📞 Support

If you have any questions or need support:
- Create an issue in the GitHub repository
- Contact: contact@multitheme.app
- Documentation: [Wiki](link-to-wiki)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
