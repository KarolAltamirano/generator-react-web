# React web
Project was generated with Yeoman generator
[generator-react-web](https://www.npmjs.com/package/generator-react-web)

# Requirements
- NodeJS v6.0 or newer
- npm v3.10 or newer
- yarn (to install run `npm install --global yarn`)
- flow-typed (to install run `npm install -g flow-typed`)

# Install dependencies for development
## New repository
- create git repository: run `git init` in terminal
- install git hooks: run `yarn run hooks:install` in terminal

## Existing repository
- clone repository
- install all dependencies: run `yarn` in terminal

# Development
- Run: `yarn run start` to start dev server and watch for file changes
- Run: `yarn run build` to build for production

# Folders
```
.
├─── flow       : flow configuration files
├─── flow-typed : flow configuration files installed with flow-typed
├─── src        : source code
├─── test       : unit tests
├─── teste2e    : e2e tests
└─── tools      : build tools
```

# Tasks
```
yarn run bump major       : bump major version
yarn run bump minor       : bump minor version
yarn run bump patch       : bump patch version
yarn run build            : build for production
yarn run server           : run server to test production build
yarn run start            : start dev server and rebuild on file change
yarn run lint             : run JavaScript linter
yarn run lint:html        : run HTML linter
yarn run lint:all         : run all linters (HTML, JavaScript)
yarn run flow             : run flow
yarn test                 : run unit tests
yarn run test:watch       : run unit tests in watch mode
yarn run e2e              : run e2e tests
yarn run leasot           : print all TODOs and FIXMEs to the console
yarn run check:all        : run lint:all, flow and test tasks
yarn run hooks:install    : install git hooks
yarn run selenium:install : install selenium for e2e tests
yarn run selenium:start   : start selenium for e2e tests
```

# Modernizr configuration
- To configure modernizr change its settings inside `.modernizrrc`.
- List of all available settings:
  [show](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json)

# Config file 'config.json'
```
build    : Version information, this property is automatically updated when running yarn run bump task
buildDir : Directory where built page will be placed (default 'dist')

```

# Build version
To hide build version info set `renderVersionInfo` to `false` inside `src/utils/AppSettings.js` file.
To bump version use yarn task `yarn run bump [ major | minor | patch ]`

# Linting
Use linter in your text editor for JavaScript.

## JavaScript
- For JavaScript use [ESLint](http://eslint.org/). The project contains ESLint configuration
  file `.eslintrc`
- ESLint for Atom - [show](https://github.com/AtomLinter/linter-eslint)
- ESLint for Sublime Text - [show](https://github.com/roadhump/SublimeLinter-eslint)

## Flow
- Information about flow integrations for code editors can be found [here](https://flow.org/en/docs/editors/)

## HTML
- For HTML use [HTMLHint](https://github.com/yaniswang/HTMLHint). The project contains HTMLHint
  configuration file `.htmlhintrc`
- HTMLHint for Atom - [show](https://github.com/AtomLinter/linter-htmlhint)
- HTMLHint for Sublime Text - [show](https://github.com/mmaday/SublimeLinter-contrib-htmlhint)
