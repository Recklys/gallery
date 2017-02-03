# Image gallery
Simple image gallery that allows drag and drop of images given in a JSON array.
JSON array is initialized in src/js/app.js

## Viewing
Everything is already compiled with webpack, so it should be runnable in a regular server or just via the filesystem.

## Use webpack-dev-server (probably overkill just to view, but it was used for development)
```shell
npm install
npm install webpack -g
npm install webpack-dev-server -g
webpack-dev-server --inline
```