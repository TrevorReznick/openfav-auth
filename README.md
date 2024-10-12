# Openfav auth

This template is a fork of [tailcast](https://github.com/matt765/Tailcast); the *.jsx where converted in astro files, for who prefers the astro syntax.

## Tech stack:

Astro, Supabase, TailwindCss

## Configuration:
Open an account (if you dont'have) on [Supabase](https://supabase.com/) and start a new project;
Set up authentication:
Navigate to the "Authentication" tab in your project dashboard. Enable desired auth providers: (e.g., email/password, Google, GitHub).
We need stuff such as ClientID or OauthID that are provided from the social provider (ie. Google Developer console, Github settings etc)
cp .env.example .env and insert the supabase url and supabase key
Install dependecies and run it, that's all

## Deploy:
This web app is optimized to be deployed on vercel; but you can choose another service, payng attention to the set correct adapter in the astro.config.mjs

## Live link
[Openfav-auth](https://openfav-auth.vercel.app)

##  Project Structure

```
├── .env.example
├── astro.config.mjs
├── CHANGELOG.md
├── CONTRIBUTING.md
├── license
├── package.json
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── assets
│   ├── components
│   ├── env.d.ts
│   ├── layouts
│   ├── middleware
│   ├── pages
│   ├── providers
│   ├── store
│   └── types
├── tailwind.config.cjs
├── tsconfig.json
└── vercel.json
```

##  How to run

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |

