# TucsonJS Website

The single-page site for the TucsonJS meetup, built with [Astro](https://astro.build) and plain CSS (no Tailwind, no React — just a couple of small inline scripts for the theme toggle).

## ✏️ Updating event info

Meetup details (next event, cadence, venue) and links (Luma, Discord, GitHub, Code of Conduct) are hand-edited in [`src/data/site.ts`](./src/data/site.ts) — there's no CMS or live Luma embed. Update that file before each meetup.

## 🚀 Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   ├── favicon.png
│   └── og-image.png
├── src/
│   ├── assets/
│   │   └── brand/               # Logo and sticker artwork
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── NextEvent.astro
│   │   ├── About.astro
│   │   ├── CodeOfConduct.astro
│   │   ├── Community.astro
│   │   ├── Sponsors.astro
│   │   ├── Footer.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   └── site.ts              # Editable event/link/copy config
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css           # Color tokens (light/dark) + base styles
├── .prettierrc                 # Prettier configuration
├── eslint.config.js           # ESLint configuration
├── astro.config.mjs           # Astro configuration
└── package.json
```

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 18.20.8 (required for Astro)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd tucsonjs-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📋 Available Scripts

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm run dev`          | Starts local dev server at `localhost:4321`  |
| `npm run build`        | Build your production site to `./dist/`      |
| `npm run preview`      | Preview your build locally, before deploying |
| `npm run lint`         | Run ESLint on JavaScript/TypeScript files    |
| `npm run lint:fix`     | Run ESLint and fix auto-fixable issues       |
| `npm run format`       | Format code with Prettier                    |
| `npm run format:check` | Check if code is formatted correctly         |
| `npm run check`        | Run both linting and format checking         |

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
npm run build
# Upload the contents of ./dist/ to your hosting provider
```

## 🎨 Code Quality

This project includes:

- **ESLint**: Code linting for JavaScript/TypeScript files
- **Prettier**: Code formatting with Astro support
- **GitHub Actions**: Automated deployment to GitHub Pages

### Configuration Files

- `.prettierrc`: Prettier configuration with the Astro plugin
- `eslint.config.js`: ESLint configuration for TypeScript and Astro
- `.github/workflows/deploy.yml`: GitHub Actions workflow for deployment

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
