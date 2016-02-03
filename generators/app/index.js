'use strict';
var util = require('util');
var path = require('path');
var generators = require('yeoman-generator');
var glob = require('glob');
var slugify = require('underscore.string/slugify');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    // add option to skip install
    this.option('skip-install');

    this.slugify = slugify;
  },
  prompting: {
    dir: function () {

      if (this.options.createDirectory !== undefined) {
        return true;
      }

      var done = this.async();
      var prompt = [{
        type: 'confirm',
        name: 'createDirectory',
        message: 'Would you like to create a new directory for your project?'
      }];

      this.prompt(prompt, function (response) {
        this.options.createDirectory = response.createDirectory;
        done();
      }.bind(this));
    },
    dirname: function () {

      if (!this.options.createDirectory || this.options.dirname) {
        return true;
      }

      var done = this.async();
      var prompt = [
        {
          type: 'input',
          name: 'dirname',
          message: 'Enter directory name'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter project description'
        },
        {
          type: 'input',
          name: 'author',
          message: 'Enter project author name'
        }];

      this.prompt(prompt, function (response) {
        this.options.dirname = response.dirname;
        this.options.description = response.description;
        this.options.author = response.author;
        done();
      }.bind(this));
    }
  },
  writing: {
    buildEnv: function () {

      // create directory
      if (this.options.createDirectory) {
        this.destinationRoot(this.options.dirname);
        this.appName = this.options.dirname;
      }

      this.description = this.options.description;
      this.author = this.options.author;

      // shared across all generators
      this.sourceRoot(path.join(__dirname, 'templates'));
      glob.sync('**', {cwd: this.sourceRoot()}).map(function (file) {
        this.template(file, file.replace(/^_/, ''));
      }, this);
    },
    assetsDirs: function () {
      mkdirp.sync('public/components');
      mkdirp.sync('public/img');
    }
  },
  install: function () {
    if (!this.options['skip-install']) this.installDependencies();
  }
});
