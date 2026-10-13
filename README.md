# Trung Invest

A Next.js landing page for Trung Invest, a Vietnam-focused market intelligence concept that combines explainable Wyckoff-style analysis with macroeconomic context. The project presents a product narrative for evidence-led investment research and a research workspace centered on transparent assumptions, data quality, and visible uncertainty.

## Overview

The app is a polished marketing site and concept preview for a research platform that helps users:

- understand market structure using price-and-volume-based technical analysis
- monitor macroeconomic indicators that shape Vietnam market conditions
- reason through hypotheses with visible evidence and uncertainty
- explore a modular, research-first workflow for investment decision support

The core landing page is implemented in `app/(default)/page.tsx` and styled through the custom CSS pipeline in `app/css`.

## Product positioning

The brand message in the source code emphasizes:

- Evidence over certainty
- Explainable analysis
- Vietnam macro context
- Modular research capabilities
- Clear and disciplined workflow

This is a concept-facing interface rather than a live trading or data platform. The UI includes illustrative metrics and structured product messaging, not real market data feeds.

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- CSS modules and custom design styles
- Headless UI
- AOS animations

## Project structure

```text
.
├── app/
│   ├── (auth)/              # authentication pages
│   ├── (default)/           # main marketing/landing experience
│   ├── api/                 # route handlers
│   ├── css/                 # global styles and theme assets
│   ├── layout.tsx           # root layout and font setup
│   └── page.tsx             # entry page (legacy default app export)
├── components/              # reusable UI sections and blocks
├── public/                  # static assets and images
├── package.json             # project dependencies and scripts
├── pnpm-lock.yaml           # lockfile
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript config
├── .gitignore               # repo ignore rules
├── CHANGELOG.md             # project changelog
└── README.md                # project documentation
```

## Features

- Hero section with clear product positioning
- Capability cards for technical structure, macro dashboard, and research discipline
- Workflow section outlining the research process
- Principle-driven product messaging
- CTA sections and footer branding
- Sign-in and sign-up pages for a broader product experience

## Getting started

Use pnpm for the project workflow:

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 in your browser.

## Available scripts

```bash
pnpm dev     # start the local development server
pnpm build   # create a production build
pnpm start   # run the production build locally
pnpm lint    # run Next.js lint checks
```

## Notes

This repository is a front-end prototype and landing experience for Trung Invest. It is designed to communicate the product vision, research workflow, and positioning rather than provide a full end-to-end investment platform.

## License

This project is configured as a private application and is not provided with a public software license in the repository metadata.

