# Repository Guidelines

## Project Purpose

This is a personal developer portfolio built with React, TypeScript, Vite, and Tailwind CSS 4. Its purpose is to present the author's profile, projects, technical skills, experience, and contact links. Prioritize responsive layouts, accessibility, performance, and clear Portuguese content. Use confirmed information; do not invent credentials, projects, or contact details.

## Project Structure & Module Organization

- `src/main.tsx` mounts the application; `src/App.tsx` contains the initial portfolio screen.
- `src/index.css` imports Tailwind and defines global base styles.
- `src/lib/utils.ts` exports `cn()` for combining conditional classes and resolving Tailwind conflicts.
- `src/assets/` holds imported images and SVGs; `public/` holds files served directly by URL.
- Root configuration includes `vite.config.ts`, `tsconfig*.json`, and `eslint.config.js`.
- `dist/` is generated build output. No test directory currently exists.

## Build, Test, and Development Commands

Use Node.js 24 LTS and npm. Keep `package-lock.json` synchronized with dependency changes.

- `npm ci`: install dependencies from the lockfile.
- `npm run dev`: start Vite with hot module replacement.
- `npm run build`: run TypeScript checks and generate production assets in `dist/`.
- `npm run lint`: run ESLint, including TypeScript, React Hooks, and React Refresh rules.
- `npm run preview`: serve the production build locally; run the build first.

## Coding Style & Naming Conventions

Use two-space indentation, single quotes in TypeScript, double quotes in JSX attributes, and no JavaScript semicolons. Match existing trailing-comma conventions. ESLint is configured; no separate formatter is installed.

Use function components, PascalCase component names and filenames (for example, `ProjectCard.tsx`), camelCase functions and variables, and `use`-prefixed hooks. Use type-only imports for TypeScript types.

Prefer Tailwind utilities and `cn()` for conditional styles. Keep global CSS in the base layer. Preserve Portuguese interface copy, semantic HTML, and accessible labels.

## Testing Guidelines

No automated test framework, `npm test` script, or coverage threshold is configured. Before submitting changes, run `npm run lint` and `npm run build`. For interface changes, manually check mobile and desktop layouts, keyboard navigation, and browser console errors. If introducing automated tests, document the runner and command, and colocate `*.test.ts` or `*.test.tsx` files with the modules they cover.

## Commit & Pull Request Guidelines

Git history currently contains only `first commit`, so no commit convention is established. Use concise imperative subjects, such as `Add projects section`, and keep commits focused.

Pull requests should explain the change, reference related issues when applicable, list validation performed, and include screenshots for visual changes. Exclude generated `dist/` files and `node_modules/`.
