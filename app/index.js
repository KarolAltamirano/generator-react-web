/**
 * @file        Main file of Yeoman generator for React web
 * @author      Karol Altamirano <karlos.altamirano@gmail.com>
 * @copyright   2016 - 2017 Karol Altamirano
 * @license     MIT
 */

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the ${chalk.green('React Web')} Generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name (use kebab-case)',
        default: _.kebabCase(this.appname),
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    // copy all files except .gitignore and package.json
    this.fs.copy(
      this.templatePath('**/!(.gitignore|.npmignore|package.json)'),
      this.destinationPath(), { globOptions: { dot: true } }
    );

    // copy .gitignore
    if (this.fs.exists(this.templatePath('.npmignore'))) {
      this.fs.copy(
        this.templatePath('.npmignore'),
        this.destinationPath('.gitignore')
      );
    } else {
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
    }

    // copy package.json
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: _.kebabCase(this.props.name) }
    );
  }

  install() {
    this.yarnInstall(null, null, () => {
      this.spawnCommandSync('flow-typed', ['install']);
    });
  }
};
