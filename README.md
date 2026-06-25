# michaelptacek.com

Personal portfolio website with a clean, terminal-inspired design, light/dark theming, and an on-the-fly PDF CV export.

[Live site](https://michaelptacek.com)

## Techstack
* **Framework**: Next.js 16 (App Router), React 19
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4, shadcn/ui
* **Theming**: next-themes (light/dark)
* **PDF**: @react-pdf/renderer
* **Containerization**: Docker

## Features
* Terminal/mono-inspired design
* Light & dark mode with system preference
* On-the-fly PDF CV export (`/api/cv`)
* SEO metadata, sitemap, robots, and OpenGraph image
* Fully responsive layout for mobile and desktop
* Sections for projects, tech stack, experience, education, and socials

## How to install and run this project
Make sure you have [Node.js](https://nodejs.org/) installed.

### Option 1: Local development
1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the dev server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Option 2: With Docker
1. Clone this repository
2. Build the image:
```bash
npm run docker:build
```
3. Run the container:
```bash
docker run -p 3000:3000 ghcr.io/michaelptacek05/michaelptacek.com:latest
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available scripts
```bash
npm run dev           # start dev server
npm run build         # production build
npm run start         # serve the production build
npm run lint          # run ESLint
npm run docker:build  # build Docker image for linux/amd64
npm run docker:push   # push image to GHCR
```

## Project Structure
```
michaelptacek.com/
├── app/
│   ├── api/
│   │   └── cv/                # PDF CV export route
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   └── pages/Home/        # home page sections
│   ├── globals.css            # Tailwind v4 theme variables
│   ├── layout.tsx             # root layout (ThemeProvider, Header)
│   └── page.tsx               # home page
├── components/ui/             # shadcn/ui primitives
├── lib/                       # utils (cn helper)
├── public/                    # static assets
├── Dockerfile
└── next.config.ts
```

made by [Michael Ptáček](https://michaelptacek.com)
