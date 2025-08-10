# Portfolio

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
frontend/
├── src/
│   ├── features/
│   │   └── notebook/
│   │       ├── components/
│   │       │   ├── chat/
│   │       │   ├── entry/
│   │       │   └── pdf-viewer/
│   │       ├── services/
│   │       ├── context/
│   │       └── types/
│   ├── shared/
│   │   ├── components/
│   │   ├── constants/
│   │   └── context/
│   └── App.tsx

```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

This project follows a **feature-based architecture** with clear separation of concerns:

### Features
- **Portfolio**: Contains all portfolio-related functionality
  - Components: UI components specific to the portfolio feature
  - Context: State management for portfolio data
  - Services: API calls and data fetching logic
  - Types: TypeScript interfaces and types

### Shared
- **Components**: Reusable UI components across features
- **Constants**: App-wide configuration and constants
- **Context**: Global state management (theme, etc.)

## Available Components

All shadcn/ui components are available in `@/shared/components/ui/`:

### Form Components
- `Input` - Text input field
- `Label` - Form label
- `Textarea` - Multi-line text input
- `Select` - Dropdown selection
- `Checkbox` - Checkbox input
- `RadioGroup` - Radio button group
- `Switch` - Toggle switch
- `Slider` - Range slider
- `Progress` - Progress indicator

### Display Components
- `Card` - Content container
- `Badge` - Status indicator
- `Avatar` - User avatar
- `Separator` - Visual divider
- `Skeleton` - Loading placeholder

### Navigation Components
- `Button` - Interactive button
- `NavigationMenu` - Navigation menu
- `Breadcrumb` - Breadcrumb navigation
- `Pagination` - Page navigation
- `Tabs` - Tabbed interface
- `Accordion` - Collapsible content
- `Collapsible` - Expandable content

### Overlay Components
- `Dialog` - Modal dialog
- `AlertDialog` - Confirmation dialog
- `Sheet` - Slide-out panel
- `Popover` - Floating content
- `Tooltip` - Hover tooltip
- `DropdownMenu` - Dropdown menu

### Feedback Components
- `Alert` - Status message
- `Table` - Data table

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

To add new shadcn/ui components, use:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## Adding New Features

To add a new feature, create a new directory under `src/features/` with the following structure:

```
src/features/[feature-name]/
├── components/     # Feature-specific components
├── context/        # Feature-specific context
├── services/       # Feature-specific services
├── types/          # Feature-specific types
└── index.ts        # Feature exports
```
