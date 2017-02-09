# React web
Project was generated with Yeoman generator
[generator-react-web](https://www.npmjs.com/package/generator-react-web)

# Requirements
- NodeJS v6.0 or newer
- npm v3.10 or newer
- yarn

# Install dependencies for development
## New project / repository
- create git repository: run `git init` in terminal
- install git hooks: run `yarn run hooks:install` in terminal

## Existing project / repository
- clone repository
- install all dependencies: run `yarn` in terminal

# Root folders
```
.
├─── src     : source code
├─── test    : unit tests
├─── teste2e : e2e tests
└─── tools   : build tools
```

# 'src' folder
```
.
├─── app                     : react app
├─── assets                  : assets
│   ├─── fonts                 : fonts
│   ├─── images                : images
│   └─── scssSprite            : scss that contains images encoded in base64, loaded with PreloadJS
│       └─── images              : images for scssSprite
├─── copy                    : app copy
└─── entry                   : app entry point (starts loader and run react app)
 ├─── data                     : loader configuration
 ├─── style                    : global scss
 │   ├─── global                 : global styles shared across the whole app
 │   └─── shared                 : scss for defining shared scss variables and mixins
 ├─── utils                    : app utils
 └─── views                    : app entry views (loader, incompatible browser ...)
```

# Tasks
```
yarn run bump major    : bump major version
yarn run bump minor    : bump minor version
yarn run bump patch    : bump patch version
yarn run build         : build for production
yarn run server        : run server to test production build
yarn run start         : start dev server and rebuild on file change
yarn run lint:html     : run HTML linter
yarn run lint:style    : run style linter
yarn run lint:all      : run all linters (HTML, style, JavaScript)
yarn run lint          : run JavaScript linter
yarn test              : run unit tests
yarn run test:watch    : run unit tests in watch mode
yarn run e2e           : run e2e tests
yarn run hooks:install : install git hooks
```

# Webpack
## Installing JavaScript libraries
- Install libraries with yarn.

## Installing JavaScript libraries with broken module style
- If new installed library doesn't work properly with webpack read more about shimming modules
  [here](http://webpack.github.io/docs/shimming-modules.html).

## Installing JavaScript libraries not published in npm
- If you want to install library not published in npm but with `package.json` inside git repository
  you can install package from git repository. Read [here](https://docs.npmjs.com/cli/install) how to
  install it.
- If you want to install library not published in npm and without `package.json` you can install it
  from git repository with [`napa`](https://github.com/shama/napa).
    - More information how to use `napa` can be found [here](https://github.com/shama/napa).
    - Probably you will need to set `resolve.alias` and `loaders` inside `webpack.config.js` for
      libraries not published in npm.

# CSS Modules
- This project uses CSS Modules
- Read more about CSS Modules [here](https://github.com/css-modules/css-modules)
    - "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default."

# SCSS Source maps
- Source maps are disabled for SCSS files because of an issue with style-loader
  ([read more here](https://github.com/webpack/style-loader/issues/93)). As a workaround add to each
  SCSS file a comment containing its module name.
- In case SCSS source map are necessary for debugging
    - set `publicPath` inside `webpack.config.js` file to `http://localhost:3000/`
    - enable source maps inside `webpack.config.js` as described
      [here](https://github.com/jtangelder/sass-loader#source-maps)
    - important: before committing revert these changes, do not push enabled source maps to the repo

# Modernizr configuration
- To configure modernizr change its settings inside `.modernizrrc`.
- List of all available settings:
  [show](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json)

# CSS compatibility configuration
- To set autoprefixer for CSS set `autoprefixer` variable inside `config.json`.
- Default value: `['last 2 versions']`.
- List of available values: [show](https://github.com/ai/browserslist#queries)

# Config file 'config.json'
```
buildDir     : Directory where built page will be placed (default 'dist')
autoprefixer : Configuration of autoprefixer
```

# Build version
To hide build version info set `renderVersionInfo` to `false` inside `src/entry/utils/AppSettings.js` file.
To bump version use yarn task `yarn run bump [ major | minor | patch ]`

# Linting
Use linter in your text editor for JavaScript and SCSS.

## JavaScript
- For JavaScript use [ESLint](http://eslint.org/). The project contains ESLint configuration
  file `.eslintrc`
- ESLint for Atom - [show](https://github.com/AtomLinter/linter-eslint)
- ESLint for Sublime Text - [show](https://github.com/roadhump/SublimeLinter-eslint)

## SCSS
- For SCSS use [stylelint](https://github.com/stylelint/stylelint). The project contains stylelint
  configuration file `.stylelintrc`
- stylelint for Atom - [show](https://github.com/AtomLinter/linter-stylelint)
- stylelint for Sublime Text - [show](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)

## HTML
- For HTML use [HTMLHint](https://github.com/yaniswang/HTMLHint). The project contains HTMLHint
  configuration file `.htmlhintrc`
- HTMLHint for Atom - [show](https://github.com/AtomLinter/linter-htmlhint)
- HTMLHint for Sublime Text - [show](https://github.com/mmaday/SublimeLinter-contrib-htmlhint)

# Image sprite-sheet
- Inside directory `src/app/assets/scssSprite` there are `scss` files that handle
  generating image sprite-sheet. To add image to sprite-sheet use `retina-inline-asset`
  mixin inside `_assets.scss` file.

# Assets mixins
- `@include retina-inline-asset($name, $ext: 'png')` mixin for generating css with background
  image encoded in base64 for non-retina and retina screens used in scssSprite.
- `@include retina-asset($name, $ext: 'png')` mixin for generating stile with background
  image for non-retina and retina screens.
