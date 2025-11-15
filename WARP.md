# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Structure

This is a React learning repository with two main sections:

- **`practise/`**: Learning environment with 40+ React component examples covering hooks, effects, context, and patterns
- **`project/ten_step/`**: Structured project implementations (currently includes Counter and Todo apps)

Both sections are independent React + Vite applications with their own dependencies.

## Commands

### Development Commands

All commands must be run from within the specific project directory (`practise/` or `project/ten_step/`).

```bash
# Start development server
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or
npm run build

# Run linter
pnpm lint
# or
npm run lint

# Preview production build
pnpm preview
# or
npm run preview
```

### Package Management

This repository uses `pnpm` as the package manager (evidenced by `pnpm-lock.yaml` files). When installing dependencies:

```bash
cd practise  # or cd project/ten_step
pnpm install
```

## Architecture and Code Patterns

### Project Organization

**`practise/` directory:**
- Contains educational React components demonstrating various concepts
- Flat component structure in `src/components/`
- Custom hooks in `src/hooks/` (e.g., `useFetch.jsx`)
- Main entry point renders a single component in `App.jsx` (currently `UniqueId`)
- Components are self-contained examples

**`project/ten_step/` directory:**
- Organized by feature with nested component directories
- Components grouped by domain (e.g., `components/counter/`, `components/todo/`)
- Uses CSS modules for styling (`style.module.css` co-located with components)
- More production-oriented structure

### Component Patterns

1. **Functional components with hooks**: All components use modern React patterns (no class components)
2. **Hook examples in practise/**: 
   - `useState` for state management
   - `useEffect` for side effects
   - `useContext` with custom providers (see `UserContext.jsx`)
   - `useReducer` for complex state (see `counterReducer.js`)
   - Custom hooks (see `hooks/useFetch.jsx`)

3. **Styling approaches**:
   - `practise/`: Inline styles and styled components
   - `project/ten_step/`: CSS modules

### React Version

Both projects use React 19.x, which includes:
- Automatic batching
- Transitions API
- Server Components support (though not used here)

### ESLint Configuration

Custom ESLint rules include:
- React Hooks best practices enforced
- React Refresh for fast HMR
- `no-unused-vars` allows uppercase constants (pattern: `^[A-Z_]`)

## Development Workflow

1. **To switch between projects**: Navigate to the appropriate directory (`practise/` or `project/ten_step/`)
2. **To test a new React concept**: Add components to `practise/src/components/` and import them in `App.jsx`
3. **To build a feature**: Add it to `project/ten_step/` with proper directory structure
4. **Component imports**: Both projects use ES modules with `.jsx` extensions explicit in imports

## Important Notes

- No TypeScript: Both projects use plain JavaScript
- No testing framework configured
- No React Compiler enabled (for dev performance)
- The `practise/` App.jsx typically imports only one component at a time for focused learning
- React StrictMode is enabled in both projects
