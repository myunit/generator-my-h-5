/**
 * @author qianqing
 * @create by 16-2-2
 * @description Sets up and generates the basic file structure
 */
module.exports = function() {
  /* #bin */
  this.directory('bin');

  /* #public */
  this.directory('public');

  /* #routes */
  this.directory('routes');

  /* #views */
  this.directory('views');

  this.copy('app.js', 'app.js');
};
