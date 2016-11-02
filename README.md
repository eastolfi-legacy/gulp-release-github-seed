# Gulp Release Github Seed

First, clone this repository:
```bash
git clone https://github.com/eastolfi/gulp-release-github-seed new_project
cd new_project
```
And delete the git reference:
```bash
rm -rf ./.git
```
Then init the package, and install all the required dependencies:
```bash
npm init
```
Gulp generic dependencies:
```bash
npm install -D gulp run-sequence require-dir del gulp-util
```
Gulp building dependencies
```bash
npm install -D gulp-babel gulp-minify browserify gulp-sourcemaps vinyl-source-stream vinyl-buffer
```
Gulp testing dependencies
```bash
npm install -D gulp-mocha gulp-coveralls gulp-mocha-phantomjs
```
Gulp documentation dependencies
```bash
npm install -D gulp-rename gulp-jsdoc3 jsdoc-to-markdown gulp-jsdoc-to-markdown gulp-conventional-changelog
```
Gulp releasing dependencies
```bash
npm install -D gulp-bump minimist conventional-github-releaser
```

And the you can init your new repository:
```bash
git init
```