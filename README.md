<p align="center">
  <a href="https://github.com/actuarysailor/github-action-nodejs-local-file-copy" target="blank"><img src="images/logo.png" alt="Local File Copy Action" width="512" /></a>
</p>

<h1 align="center">⭐ Local File Copy Action ⭐</h1>

<p align="center">
<!-- action-docs-description source="action.yml" -->
### Description

Template for new Github Actions based on Typescript with the Best Practices and Ready to be Released
<!-- action-docs-description source="action.yml" -->
</p>

<p align="center">
  <a href="https://github.com/actuarysailor/github-action-nodejs-local-file-copy/actions/workflows/node.yml?branch=main"><img src="https://github.com/actuarysailor/github-action-nodejs-local-file-copy/actions/workflows/node.yml/badge.svg?branch=main" alt="nodejs"/></a>
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.x-green.svg" alt="node"/></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/supported_node-18.x_--_20.x-forestgreen.svg" alt="supported node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
</p>

<!-- action-docs-usage source="action-file.yml" project="actuarysailor/github-action-nodejs-local-file-copy" version="v0.11.0" x-release-please-version --> 
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
<!-- action-docs-usage source="action-file.yml" project="actuarysailor/github-action-nodejs-local-file-copy" version="v0.11.0" x-release-please-version --> 

## 💅 Customizing

<!-- action-docs-inputs source="action.yml" -->
### Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `name` | <p>Name the action will use to say Hello.</p> | `false` | `""` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
### Outputs

| name | description |
| --- | --- |
| `message` | <p>Hello world message</p> |
<!-- action-docs-outputs source="action.yml" -->

<!-- action-docs-runs source="action.yml" -->
### Runs

This action is a `node20` action.
<!-- action-docs-runs source="action.yml" -->

## 😎 Contributing

You're thinking about contributing to this project? Take a look at our [contribution guide](docs/CONTRIBUTING.md).
