# Portfolio

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: React Icons & Lucide React
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

## Features

- **Static Site Generation (SSG)**: Optimized for performance and SEO
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful animations and interactions
- **Type Safety**: Full TypeScript support
- **SEO Optimized**: Meta tags and structured data
- **Accessible**: WCAG compliant components

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── features/
│   │   └── portfolio/         # Portfolio feature
│   │       ├── components/    # Feature-specific components
│   │       ├── context/       # State management
│   │       ├── services/      # Data fetching
│   │       ├── types/         # TypeScript types
│   │       └── views/         # Page sections
│   ├── shared/
│   │   ├── components/        # Reusable UI components
│   │   │   └── ui/           # shadcn/ui components
│   │   ├── constants/        # App-wide constants
│   │   └── context/          # Global state
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files
- `npm run static` - Build for static hosting

## Architecture

This project follows a **feature-based architecture** with clear separation of concerns:

### Features
- **Portfolio**: Contains all portfolio-related functionality
  - Components: UI components specific to the portfolio feature
  - Context: State management for portfolio data
  - Services: API calls and data fetching logic
  - Types: TypeScript interfaces and types
  - Views: Page sections (Hero, About, Skills, etc.)

### Shared
- **Components**: Reusable UI components across features
- **Constants**: App-wide configuration and constants
- **Context**: Global state management

## Constants Organization

All constants are organized in `src/shared/constants/`:

- `navigation.ts` - Navigation items and section IDs
- `skills.ts` - Skills data and categories
- `contact.ts` - Contact information and social links
- `content.ts` - Section titles and hero content
- `index.ts` - Re-exports all constants

## UI Components

Built with shadcn/ui components:

### Form Components
- `Input` - Text input field
- `Label` - Form label
- `Checkbox` - Checkbox input

### Display Components
- `Card` - Content container
- `Badge` - Status indicator
- `Alert` - Status message

### Interactive Components
- `Button` - Interactive button with variants

## Static Site Generation

This portfolio is configured for static site generation:

- **Output**: Static HTML files
- **Deployment**: Can be deployed to any static hosting service
- **Performance**: Optimized for fast loading
- **SEO**: Search engine optimized

### Deployment

The static files can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Customization

### Adding New Sections

1. Create a new view component in `src/features/portfolio/views/`
2. Add constants to appropriate files in `src/shared/constants/`
3. Import and use in `src/app/page.tsx`

### Styling

- Uses Tailwind CSS for styling
- Custom CSS variables for theming
- Responsive design with mobile-first approach

### Icons

- **React Icons**: For technology icons (HTML5, CSS3, etc.)
- **Lucide React**: For UI icons (download, mail, etc.)

## Performance

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Optimized images with Next.js
- **Code Splitting**: Automatic code splitting
- **Bundle Analysis**: Optimized bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
