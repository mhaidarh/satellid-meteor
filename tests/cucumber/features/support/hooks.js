module.exports = function() {

  var helper = this;

  // trigger this function before the callback
  this.Before(function() {
    var world = helper.world;
    var callback = arguments[arguments.length - 1];
    world.browser.
    init().
    call(callback);
  });

  // trigger this function after the callback
  this.After(function() {
    var world = helper.world;
    var callback = arguments[arguments.length - 1];
    world.browser.
    end().
    call(callback);
  });

};
