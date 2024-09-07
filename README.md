<p align="center">
  <a href="https://github.com/actuarysailor/github-action-nodejs-local-file-copy" target="blank"><img src="images/logo.png" alt="Local File Copy Action" width="512" /></a>
</p>

<h1 align="center">⭐ Local File Copy Action ⭐</h1>

<p align="center">
<!-- action-docs-description source="action.yml" -->
### Description

A NodeJS GitHub action to search for files matching a regex pattern
and copy them to another folder, with options to retain the
directory structure or flatten it.
<!-- action-docs-description source="action.yml" -->
Copyright (C) 2024  actuarysailor

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
</p>

<p align="center">
  <a href="https://github.com/actuarysailor/github-action-nodejs-local-file-copy/actions/workflows/node.yml?branch=main"><img src="https://github.com/actuarysailor/github-action-nodejs-local-file-copy/actions/workflows/node.yml/badge.svg?branch=main" alt="nodejs"/></a>
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.x-green.svg" alt="node"/></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/supported_node-18.x_--_20.x-forestgreen.svg" alt="supported node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
</p>

<!-- action-docs-usage source="action-file.yml" project="actuarysailor/github-action-nodejs-local-file-copy" version="v0.11.1" x-release-please-version --> 
## 👀 Usage

Bellow is a simple example how to use this action

```yaml
name: github-action-nodejs-local-file-copy

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛬
        uses: actions/checkout@v4
      - name: Github action template 🤩
        uses: actuarysailor/github-action-nodejs-local-file-copy@v0
```
<!-- action-docs-usage source="action-file.yml" project="actuarysailor/github-action-nodejs-local-file-copy" version="v0.11.1" x-release-please-version --> 

## 💅 Customizing

<!-- action-docs-inputs source="action.yml" -->
### Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `source-directory` | <p>Source directory to copy files from</p> | `false` | `./tests/source` |
| `destination-directory` | <p>Target directory to copy files to</p> | `true` | `./tests/destination` |
| `file-filter` | <p>Regex pattern  to use in filtering files to be copied</p> | `false` | `[^\r\n\t\f]+` |
| `flatten-directories` | <p>Boolean value to determine whether to retain directory tree or flatten to a single folder</p> | `false` | `false` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
### Outputs

| name | description |
| --- | --- |
| `copied-files` | <p>List of files copied and their paths</p> |
<!-- action-docs-outputs source="action.yml" -->

<!-- action-docs-runs source="action.yml" -->
### Runs

This action is a `node20` action.
<!-- action-docs-runs source="action.yml" -->

## 😎 Contributing

You're thinking about contributing to this project? Take a look at our [contribution guide](docs/CONTRIBUTING.md).
