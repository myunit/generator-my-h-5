'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var MYunGenerator = module.exports = function MYunGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MYunGenerator, yeoman.generators.Base);

MYunGenerator.prototype.askFor = require('./generator-questions');
MYunGenerator.prototype.fileStructure = require('./file-structure');
MYunGenerator.prototype.taskrunner = require('./task-runner');
MYunGenerator.prototype.configfiles = require('./config-files');
