# Thomas Motais — Portfolio Website

My personal portfolio: about me, work experience, projects, coursework, resume, and links.

**Live site:** [thomasmotaisportfolio.net](https://thomasmotaisportfolio.net)

## Live site

The site is at **https://thomasmotaisportfolio.net** and is hosted on [Hostinger](https://www.hostinger.com/). It serves the static production build (`dist/`) of this repo.

## Tech stack

- [React 19](https://react.dev/): UI
- [React Router 7](https://reactrouter.com/): page routing
- [Vite 7](https://vite.dev/): dev server and build tool
- [Tailwind CSS 4](https://tailwindcss.com/): styling
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm): Markdown rendering
- [GitHub REST API](https://docs.github.com/en/rest/repos/repos#get-a-repository): fetches live repo metadata for project cards (no API key needed)

## Prerequisites

- [Node.js](https://nodejs.org/) **20.19+** or **22.12+** (Vite 7 requires this; Node 22 LTS or newer is recommended)
- npm (comes with Node)
- [Git](https://git-scm.com/)

Check your versions with:

```bash
node -v
```

## Quick start

```bash
git clone https://github.com/tomakun123/PortfolioWebsite.git
cd PortfolioWebsite
npm run setup
npm run dev
```

Then open http://localhost:5173.

`npm run setup` checks your Node version, installs dependencies, and lists the next commands. It's the same as running `npm install` yourself, plus the version check.

## Running locally

| Command | What it does |
| --- | --- |
| `npm run setup` | Checks the Node version and installs dependencies |
| `npm run dev` | Starts the dev server with hot reload at http://localhost:5173 |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the `dist/` build at http://localhost:4173 (run `build` first) |
| `npm run lint` | Runs ESLint over the project |

**Viewing on your phone:** run `npm run dev -- --host`. Vite then prints a `Network:` URL (like `http://192.168.x.x:5173`) that you can open from any device on the same Wi-Fi.

**Port already in use?** Vite will pick the next free port automatically and print it. To choose one yourself, run `npm run dev -- --port 3000`.

## Pages

| URL | Page | File |
| --- | --- | --- |
| `/` | About me + Contact | [`src/pages/HomePage.jsx`](src/pages/HomePage.jsx) |
| `/work` | Work Experience | [`src/pages/WorkPage.jsx`](src/pages/WorkPage.jsx) |
| `/projects` | Projects & Coursework | [`src/pages/ProjectsPage.jsx`](src/pages/ProjectsPage.jsx) |
| anything else | 404 page | [`src/pages/NotFoundPage.jsx`](src/pages/NotFoundPage.jsx) |

Routes are defined in [`src/App.jsx`](src/App.jsx), which also holds the shared layout (header, footer, copy-to-clipboard toast). To add a page, create it in `src/pages/`, add a `<Route>` in `App.jsx`, and add a link to `NAV` in [`src/components/Header.jsx`](src/components/Header.jsx).

## Project structure

```
PortfolioWebsite/
├── index.html              # HTML entry point, default page title and SEO meta tags
├── public/                 # Static files served as-is from the site root
│   ├── .htaccess           # Sends /work, /projects, etc. to index.html on Hostinger
│   ├── favicon.svg
│   ├── ProfilePicture.png
│   ├── Thomas Motais De Narbonne Resume.pdf
│   ├── icons/              # Contact/link icons (email, GitHub, LinkedIn, resume)
│   └── tech/               # Tech stack logos
├── scripts/
│   └── setup.js            # `npm run setup`
├── src/
│   ├── main.jsx            # React entry point (wraps the app in BrowserRouter)
│   ├── App.jsx             # Layout + routes
│   ├── index.css           # Tailwind import and global styles
│   ├── pages/              # One file per page (see Pages above)
│   ├── components/         # Header, cards, coursework section, toast, etc.
│   ├── data/
│   │   ├── projects.js     # Links, GitHub username, project list
│   │   ├── works.js        # Work experience
│   │   └── coursework.js   # Courses, degree line, current term
│   └── hooks/
│       ├── useGithubRepoMeta.js  # Fetches repo metadata from GitHub
│       └── usePageTitle.js       # Sets the browser tab title per page
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## Updating content

Most of the content is plain data, so updating it rarely touches components.

| To change... | Edit |
| --- | --- |
| Projects | `PROJECTS` in [`src/data/projects.js`](src/data/projects.js) |
| Work experience | `WORKS` in [`src/data/works.js`](src/data/works.js) |
| Coursework | `COURSEWORK` in [`src/data/coursework.js`](src/data/coursework.js). Mark current courses with `status: "in-progress"` and update `CURRENT_TERM` each semester |
| GitHub / LinkedIn / resume links | `LINKS` in [`src/data/projects.js`](src/data/projects.js) |
| GitHub username used for repo metadata | `GITHUB_USERNAME` in [`src/data/projects.js`](src/data/projects.js) |
| Resume PDF | Replace the file in `public/` (keep the filename, or update references to it) |
| Profile picture | Replace `public/ProfilePicture.png` |
| Favicon (browser tab icon) | `public/favicon.svg` |
| Tech logos / icons | Add or replace SVGs in `public/tech/` or `public/icons/` |
| Page title / SEO description | [`index.html`](index.html) |

Each project in `PROJECTS` uses these fields:

| Field | Required | What it's for |
| --- | --- | --- |
| `id`, `name`, `tagline`, `year` | Yes | Card heading, subtitle and year |
| `overview` | Yes | The **Overview** paragraph: what the project is, who uses it, and how it's used |
| `technical` | Yes | The **How it's built** paragraph: stack, architecture, and how it works |
| `tags`, `stack`, `highlights` | Yes | Filter chips, tech chips, and the Highlights dropdown |
| `featured` | Yes | Featured projects sort first |
| `status` | No | A small badge next to the year, e.g. `"In Development"` |
| `repo` | No | GitHub repo name. Adds a "GitHub Repo" link and an "Updated" date from the GitHub API. Leave it out for private repos |
| `owner` | No | GitHub owner of `repo`, if it isn't you (defaults to `GITHUB_USERNAME`) |
| `links` | No | Extra links shown after the GitHub link: `[{ label: "Website", href: "https://..." }]` |

## Building for production

```bash
npm run build
```

This creates `dist/`, a folder of static HTML, CSS, JS, and assets. That's what the live site at https://thomasmotaisportfolio.net serves. Run `npm run preview` to check the build locally before publishing it.

When you upload `dist/` to Hostinger, make sure `dist/.htaccess` goes with it (it's a hidden file, so some FTP clients and file managers skip it). Without it, the home page still works, but refreshing or opening a direct link to `/work` or `/projects` returns a 404.
