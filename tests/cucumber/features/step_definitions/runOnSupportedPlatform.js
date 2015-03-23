module.exports = function() {

  var helper = this;

  this.Given(/^I am a system$/, function(callback) {
    callback();
  });

  this.When(/^I navigate to the home page$/, function(callback) {
    helper.world.browser.
    url(helper.world.mirrorUrl).
    call(callback);
  });

  this.Then(/^I am running on the platform or browser$/, function(callback) {
    // TODO
    callback();
  });

};
