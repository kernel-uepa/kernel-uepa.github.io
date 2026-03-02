# KERNEL — Student Tech Community Website

Static community website for KERNEL, deployed to GitHub Pages at [kernel-uepa.github.io](https://kernel-uepa.github.io).

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** components
- **Framer Motion** for animations
- **React Router v6** (HashRouter for static hosting)
- **Bun** as the package manager

## Getting Started

```sh
# Install dependencies
bun install

# Start dev server at http://localhost:8080
bun run dev

# Type-check and build for production
bun run build

# Preview the production build locally
bun run preview
```

## Configuration

All community-specific content lives in a **single file**: [`src/config/community.ts`](src/config/community.ts).

Edit that file to update:
- Community name, tagline, logo
- **Accent colour** (`accentColor` as an HSL string, e.g. `"220 90% 56%"`) — automatically applied to CSS custom properties at runtime
- Social links, members, projects, events, partners, FAQ, location
- Trello board ID for the Upcoming section

## Deployment

The site is deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

> **Setup (one time):** In the repo settings → *Pages*, set the source to **GitHub Actions**.

## Project Structure

```
src/
├── config/community.ts   # ← All site content & theme lives here
├── pages/                # Route-level pages (Index, Terms, Privacy, Manifesto)
├── components/
│   ├── sections/         # One component per page section
│   ├── Navbar.tsx
│   └── ui/               # shadcn/ui primitives
├── i18n/                 # English / Portuguese translations
└── hooks/                # Custom React hooks
```


## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
