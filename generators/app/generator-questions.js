/**
 * @author qianqing
 * @create by 16-2-2
 * @description Set up function for the client ran configuration setup for the generator
 */
var _s = require('underscore.string');

module.exports = function() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'appName',
      message: 'What is your application\'s name?'
    },
    {
      name: 'description',
      message: 'What is your application\'s description?'
    }
  ];

  this.prompt(prompts, function (props) {
    this.appName = _s.slugify(props.appName);
    this.description = _s.slugify(props.description);

    cb();
  }.bind(this));
};
