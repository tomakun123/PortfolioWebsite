// scripts/setup.js
// One-step local setup: checks Node version, installs dependencies, prints next steps.
// Usage: npm run setup   (or: node scripts/setup.js)
import { spawnSync } from "node:child_process";

const REQUIRED = "^20.19.0 || >=22.12.0"; // Vite 7 requirement

function isSupported(version) {
  const [major, minor] = version.replace(/^v/, "").split(".").map(Number);
  if (major === 20) return minor >= 19;
  if (major === 22) return minor >= 12;
  return major > 22;
}

console.log(`\n> Checking Node.js version (need ${REQUIRED})...`);
if (!isSupported(process.version)) {
  console.error(
    `  Node ${process.version} is not supported.\n` +
      `  Install Node 22 LTS or newer from https://nodejs.org and run this again.\n`
  );
  process.exit(1);
}
console.log(`  Node ${process.version} OK`);

console.log("\n> Installing dependencies (npm install)...\n");
const install = spawnSync("npm install", { stdio: "inherit", shell: true });
if (install.status !== 0) {
  console.error("\n  npm install failed. See the errors above.\n");
  process.exit(install.status ?? 1);
}

console.log(`
Setup complete. Next steps:

  npm run dev       Start the dev server at http://localhost:5173
  npm run build     Build the production site into dist/
  npm run preview   Serve the production build at http://localhost:4173
  npm run lint      Run ESLint
`);
