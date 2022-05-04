# Docusaurus

To test docusaurus

## Get started

```shell
# create website
npx create-docusaurus@latest my-website classic --typescript

# Install for typescript
npm install --save-dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus

# Install base plugins
npm install --save @docusaurus/plugin-content-blog
npm install --save @docusaurus/plugin-content-docs
npm install --save @docusaurus/theme-live-codeblock
npm install --save docusaurus-lunr-search # search

# Swizzle
npm run swizzle @docusaurus/theme-classic -- --typescript
```


## How to run

- `npm start`: Starts the development server.
- `npm run build`: Bundles your website into static files for production.
- `npm run serve`: Serves the built website locally.
- `npm deploy`: Publishes the website to GitHub pages.

## Useful links

Docusaurus test site: https://docusaurus.io/tests/docs/category/tests
Docusaurus plugins: https://docusaurus.io/docs/advanced/plugins
Docusaurus Client API: https://docusaurus.io/docs/docusaurus-core#link
Infima (Docusaurus theme): https://infima.dev/docs/components/badge
