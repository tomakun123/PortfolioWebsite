# Thomas Motais — Portfolio Website

My personal portfolio: about me, work experience, projects, coursework, resume, and links.

**Live site:** [thomasmotaisportfolio.net](https://thomasmotaisportfolio.net)

## Live site

The site is at **https://thomasmotaisportfolio.net** and is hosted on [Hostinger](https://www.hostinger.com/). It serves the static production build (`dist/`) of this repo, deployed automatically on every push to `main` (see [Deploying](#deploying)).

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
| Projects | `PROJECTS` in [`src/data/projects.js`](src/data/projects.js) (see the field list below) |
| Work experience | `WORKS` in [`src/data/works.js`](src/data/works.js) |
| Coursework | `COURSEWORK` in [`src/data/coursework.js`](src/data/coursework.js). Mark current courses with `status: "in-progress"` and update `CURRENT_TERM` each semester |
| Name, school, About Me text | `PROFILE` in [`src/data/profile.js`](src/data/profile.js) |
| Company logos under About Me | `PROFILE.experience` in [`src/data/profile.js`](src/data/profile.js), with logo files in `public/logos/` |
| Email / GitHub / LinkedIn / resume links | `CONTACT` in [`src/data/profile.js`](src/data/profile.js) |
| Skills & Tech Stack | `SKILL_GROUPS` and `SPOKEN_LANGUAGES` in [`src/data/skills.js`](src/data/skills.js). Skills are plain names; logos come from [`src/data/techIcons.js`](src/data/techIcons.js) ([simple-icons](https://simpleicons.org)), and unlisted names show a letter tile |
| GitHub username used for repo metadata | `GITHUB_USERNAME` in [`src/data/projects.js`](src/data/projects.js) |
| Resume PDF | Replace the file in `public/` (keep the filename, or update `CONTACT.resume`) |
| Profile picture | Replace `public/ProfilePicture.png` |
| Favicon (browser tab icon) | `public/favicon.svg` |
| Theme colors and fonts | The `@theme` block in [`src/index.css`](src/index.css); background glow in [`src/components/Haze.jsx`](src/components/Haze.jsx) |
| Page title / SEO description | [`index.html`](index.html) |

Each project in `PROJECTS` uses these fields:

| Field | Required | What it's for |
| --- | --- | --- |
| `id`, `name`, `tagline`, `year` | Yes | Card title, one-line subtitle and year |
| `points` | Yes | Up to 3 short bullets. Wrap key numbers or tech in `**double asterisks**` to highlight them |
| `stack` | Yes | The **Built with** logo chips. Names listed in [`src/data/techIcons.js`](src/data/techIcons.js) get a logo; others get a letter tile |
| `categories` | Yes | Which tabs the project shows under: any of `ai`, `web`, `tools` (defined in `CATEGORIES`) |
| `featured` | Yes | Featured projects sort first and get a "Featured" badge |
| `status` | No | A small badge, e.g. `"In Development"` |
| `links` | No | Link buttons: `[{ label: "Live site", href: "https://..." }]`. The first one is the big primary button |
| `repo` | No | GitHub repo name. Adds a GitHub button (after `links`) and an "Updated" date from the GitHub API. Leave it out for private repos |
| `owner` | No | GitHub owner of `repo`, if it isn't you (defaults to `GITHUB_USERNAME`) |

## Building for production

```bash
npm run build
```

This creates `dist/`, a folder of static HTML, CSS, JS, and assets. Run `npm run preview` to check the build locally.

## Deploying

The live site at https://thomasmotaisportfolio.net updates automatically. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. installs dependencies and runs `npm run lint` and `npm run build` (if either fails, nothing is uploaded), then
2. uploads `dist/`, including the hidden `.htaccess`, to Hostinger over FTP. Only changed files are sent after the first deploy, and nothing on the server is deleted.

Watch a deploy under **Actions** on GitHub. To redeploy without a new commit, open **Actions → Deploy to Hostinger → Run workflow**.

### One-time setup

1. **Back up the current site:** in hPanel, open **Websites → Manage → File Manager**, right-click `public_html`, choose **Compress**, and download the zip.
2. **Get FTP details:** in hPanel, open **Files → FTP Accounts**. Note the FTP hostname and username, and set a password. Check the account's directory:
   - if it is `public_html`, nothing else is needed;
   - if it is the domain's home folder, also add a repository **variable** `FTP_SERVER_DIR` with the value `public_html/`.
3. **Add the secrets on GitHub:** in the repo, open **Settings → Secrets and variables → Actions** and add three repository secrets: `FTP_SERVER`, `FTP_USERNAME` and `FTP_PASSWORD`.

### Troubleshooting

| Problem | Fix |
| --- | --- |
| The FTP step fails with a TLS or handshake error | Change `protocol: ftps` to `protocol: ftp` in `deploy.yml` |
| The deploy succeeded but the old page still shows | Flush the CDN cache in hPanel (**Performance → CDN**), then hard-refresh |
| `/work` or `/projects` return 404 on the live site | `.htaccess` is missing from `public_html`. Check that `public/.htaccess` exists and run the workflow again |
