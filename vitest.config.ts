// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import swc from "unplugin-swc";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "./",
    globals: true,
    isolate: false,
    passWithNoTests: true,
    include: ["tests/unit/**/*.test.ts"],
    env: loadEnv("test", process.cwd(), ""),
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage/unit",
      include: ["src/**/*.ts"],
    },
  },
  plugins: [swc.vite({ module: { type: "es6" } })],
});
