# NLW Agents - Web

This project was developed during the **Rocketseat NLW (Next Level Week)** event from **JUL/08/2025** to **JUL/11/2025**.

## 🚀 Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling framework
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **shadcn/ui** - Component system

## 📁 Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components
├── lib/
│   └── utils.ts     # Utility functions
├── pages/           # Route components
├── app.tsx          # Main app component
└── main.tsx         # Entry point
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## 🎨 Styling & Components

- **Tailwind CSS 4** with CSS variables for theming
- **shadcn/ui** component system with New York style
- **class-variance-authority** for component variants
- **clsx** and **tailwind-merge** for conditional classes

## 🔧 Configuration

- **Vite** with React plugin and Tailwind CSS integration
- **TypeScript** with strict configuration
- **Biome** for linting and formatting
- **Path aliases** configured (`@/` points to `src/`)

## 📱 Features

- **Create Room** - Room creation interface
- **Room** - Real-time room interaction
- **Responsive Design** - Mobile-first approach
- **Type Safety** - Full TypeScript coverage

## 🏗️ Architecture Patterns

- **Component-based architecture** with React
- **Route-based code splitting** with React Router
- **Server state management** with TanStack Query
- **Accessible UI components** with Radix UI primitives
- **Utility-first CSS** with Tailwind CSS
