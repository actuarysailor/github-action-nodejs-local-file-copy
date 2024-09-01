// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
const config = {
  "**/*.{ts?(x),mts}": () => "tsc -p tsconfig.prod.json --noEmit",
  "*.{js,jsx,mjs,cjs,ts,tsx,mts}": ["npm run lint", "vitest related --run"],
  "*.{md,json}": "prettier --write",
  "*": "npm run typos",
  "*.{yml,yaml}": "npm run lint:yaml",
};

export default config;
