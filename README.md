# TucsonJS Website

A modern website for TucsonJS built with Astro, React, and Tailwind CSS.

## 🚀 Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── Home.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .prettierrc                 # Prettier configuration
├── eslint.config.js           # ESLint configuration
├── astro.config.mjs           # Astro configuration
└── package.json
```

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 18.20.8 (required for Astro)
- pnpm (recommended package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd tucsonjs-website
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## 📋 Available Scripts

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `pnpm dev`          | Starts local dev server at `localhost:4321`  |
| `pnpm build`        | Build your production site to `./dist/`      |
| `pnpm preview`      | Preview your build locally, before deploying |
| `pnpm lint`         | Run ESLint on JavaScript/TypeScript files    |
| `pnpm lint:fix`     | Run ESLint and fix auto-fixable issues       |
| `pnpm format`       | Format code with Prettier                    |
| `pnpm format:check` | Check if code is formatted correctly         |
| `pnpm check`        | Run both linting and format checking         |

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. The workflow will automatically deploy your site

The site will be available at: `https://<your-username>.github.io/tucsonjs-website`

### Manual Deployment

If you want to deploy manually:

```bash
pnpm build
# Upload the contents of ./dist/ to your hosting provider
```

## 🎨 Code Quality

This project includes:

- **ESLint**: Code linting for JavaScript/TypeScript files
- **Prettier**: Code formatting with Astro and Tailwind CSS support
- **GitHub Actions**: Automated deployment to GitHub Pages

### Configuration Files

- `.prettierrc`: Prettier configuration with Astro and Tailwind plugins
- `eslint.config.js`: ESLint configuration for TypeScript and React
- `.github/workflows/deploy.yml`: GitHub Actions workflow for deployment

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
