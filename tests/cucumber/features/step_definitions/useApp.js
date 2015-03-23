module.exports = function() {

  var helper = this;

  this.Given(/^I am signed in$/, function(callback) {
    callback();
  });

  this.Given(/^I access the app via browser$/, function(callback) {
    callback();
  });

  this.When(/^I have the app fully loaded$/, function(callback) {
    helper.world.browser.
    waitForExist('body', 5000).
    waitForVisible('body').
    call(callback);
  });

  this.Then(/^I am ready to manage my knowledge$/, function(callback) {
    callback.pending();
  });
};
