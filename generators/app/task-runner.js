/**
 * @author qianqing
 * @create by 16-2-2
 * @description Configures and sets up the preferred generated task runner
 */
module.exports = function() {
  switch (this.taskRunner) {
    /* #gulp */
    case 'gulp':
    default:
      this.template('_gulpfile.js', 'gulpfile.js');
      // this.directory('gulp-configuration');
      break;
  }
};
