/**
 * @author qianqing
 * @create by 16-2-2
 * @description Set up function for the client ran configuration setup for the generator
 */
module.exports = function() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'appName',
      message: 'What is your application\'s name?'
    }
  ];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};
