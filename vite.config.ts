name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # Use Bun if your project has bun.lockb (yours does)
      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: "latest"

      - run: bun install
      - run: bun run build

      # This tells GitHub “we’re deploying to Pages”
      - uses: actions/configure-pages@v5

      # Upload the built site (Vite default output = dist)
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
