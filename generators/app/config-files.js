/**
 * @author qianqing
 * @create by 16-2-2
 * @description
 */
/**
 * config-files.js
 * Sets up the config files templates for the generator
 */
module.exports = function() {
  this.template('_package.json', 'package.json');

  /* #travis */
  this.copy('travis.yml', '.travis.yml');

  /* #jshint */
  this.copy('jshintrc', '.jshintrc');

  /* #git */
  this.copy('gitignore', '.gitignore');

  /* #editor */
  this.copy('editorconfig', '.editorconfig');
}
