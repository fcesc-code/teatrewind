# TEATRE

## Purpose

The aim of this PEC3 is to create a site for a small amateur theatre group using [UOC boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate/) as a basis. This exercise is part of a University
[Web apps and sites development Master](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio)
by [Universitat Oberta de Catalunya](http://uoc.edu). \
Subject: HTML and CSS tools II. December 2021.

## Curriculum project

### Repo

A Git repository can be found at [tebarriwind](https://github.com/fcesc-code/teatrewind.git)
Deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/5a617cf8-fd7b-4a04-9a5b-c2928fd8ba85/deploy-status)](https://app.netlify.com/sites/tebarriwind/deploys)

### Public web

The app can be accessed via following links:

- [Netlify prod environment](https://netlify.com/)
- [Local dev environment](http://localhost:8123/) only local dev environment

### Tech stack

- [Parcel](https://parceljs.org) bundler
- [Babel](https://babeljs.io/) to transpile javascript to ES5 in production builds
- [Jest](https://jestjs.io/)
- [sass](https://sass-lang.com/)
- [Github](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [Netlify](https://www.netlify.com/)
- [sonarqube](https://www.sonarqube.org/)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es)
- [VSCode](https://code.visualstudio.com/)
- [ESLint](https://eslint.org/) for linting of html and javascript files
- [Stylelint](https://stylelint.io/) for linting sass files
- [Prettier](https://prettier.io/) as code formatter
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [PostCSS](https://www.npmjs.com/package/postcss)
- [PurgeCSS](https://purgecss.com/)
- [Tailwindcss](https://tailwindcss.com/) as a utility-first library
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [HTML](https://html.spec.whatwg.org/)
- [YAML](https://yaml.org/) for GitHub actions

### VSCode extensions

- [Codemetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics) Computes complexity for JS and TS files
- [Errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) Highlights errors and warnings in editor
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Linting for JS and TS files in editor
- [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) AI suggesting github code
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) To live open coverage html file while running dev server, for example
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) Linting for markdown files in editor
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Formats code in editor
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) Sass syntax highlighter and formatter
- [Styleling](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) Linting for sass/scss/css files in editor
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Intellisense for Tailwind CSS
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-auto-rename-tag) Auto rename tag for html/xml files in editor

### Sass utils

- [Squoosh](https://squoosh.app/) Compress and export images

### Quality gate

Results from 29th December 2021:

- [HTML Validator](https://jigsaw.w3.org/css-validator/): 0 errors
- [WAVE](https://wave.webaim.org/) accessibility validator: 6 errors (due to undefined links in this mock site, so ok)
- [Jest](https://jestjs.io/): no tests passed - no js functionality in this site to test
  | statements | branches | lines | functions |
  | ---------- | -------- | ----- | --------- |
  | na | na | na | na |
- [Sonarqube](https://www.sonarqube.org/): x bugs | x code smells | x vulnerabilities | x security hotspots | x% code duplication - not applied since no js
- [css validator](https://jigsaw.w3.org/css-validator/) used with the build css: 0 errors
- Github [Dependabot security alerts](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/): 0 warnings.
- [CodeQL](https://github.com/github/codeql) from Github: 0 alerts
- [ESLint](https://eslint.org/) (html and js): 0 warnings 0 errors
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) metrics
  | accessibility | performance | good practices | SEO |
  | ------------- | ----------- | -------------- | --- |
  | 87 / 100 | 62 / 100 | 100 / 100 | 92 / 100 |

### Content

- [Pexels](https://www.pexels.com/)

### Project

- [Trello](https://trello.com/)

### Requirements

- [Node.js](http://nodejs.org/) >= 16.10.0

### Code

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- Common [Software Design patterns](https://en.wikipedia.org/wiki/Software_design_pattern)

### Continuous delivery

Automated testing in every pull request or merge to the main branch.
Automated code scanning to measure code quality, pull requests cannot be merged if quality is not met.
Automated security alerts for the repository.

## Releases

| Version | Date             | Status       | Content         |
| ------- | ---------------- | ------------ | --------------- |
| 0.0.1   | 29 Desember 2021 | Released     | Initial version |

### Version 0.0.1

1. ✔️ Initial version

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

## Features

- Uses [Parcel v2](https://v2.parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).
  - Automatically minify and optimize CSS code on production build with `@parcel/optimizer-cssnano`.
- [PurgeCSS](https://purgecss.com/) to remove unused CSS rules.
- [Tailwind CSS](https://tailwindcss.com/) as a utility-first css framework.

### Scripts

- Allow for modern JavaScript (ES201x/ES8/ES7/ES6…) which is automatically transpiled to ES5 and minifed in production builds, with [Babel](https://babeljs.io/).

### Images

- Image transformation with [`@parcel/transformer-image`](https://v2.parceljs.org/recipes/image/) (based on [`sharp`](https://sharp.pixelplumbing.com/)). Do not use on this version since it may cause crashes on Netlify deployments.

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this code

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage. |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders. |
| `npm run lint` | Runs ESLint for javascript and html files, showing a report. If you are using VSCode, the extension for ESLint works too. |
| `npm run lintfix`| Runs ESLint aud automatically fixes the warnings and errors that can be fixed. |
| `npm run test`  | Displays a success message if everything is working as expected. |
| `npm run twatch` | Runs jest in watch mode, so that tests are re-run if a file is modified. |
| `npm run tcoverage` | Runs jest and produces a coverage report. |
| `npm run tdev` | Runs jest in watch mode and produces a coverage report as well. |

## Contributions

### Philosophy

This software is currently developed :construction: with educational purposes and is open source. The code is published in this public repository.

### :fire: Issues

Do you want to suggest :bulb: a new feature? Open an [issue](https://github.com/fcesc-code/teatrewind/issues).
Please, keep it short, descriptive and concise :smiley:

### Security

Check out the how to report a vulnerability in our supported versions in the [SECURITY](https://github.com/fcesc-code/teatrewind/blob/main/SECURITY.md) :open_book:.

## Credits

Assistant professor Jordi Tarrida.
Wherever appropriate, credit is given to author as a comment in specific file.

## Author

Francesc Brugarolas, [Github repo](https://github.com/fcesc-code/)
