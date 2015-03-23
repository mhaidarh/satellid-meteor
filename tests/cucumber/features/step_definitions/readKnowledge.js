module.exports = function() {

  var helper = this;

  this.Given(/^I am on the running app$/, function(callback) {
    callback();
  });

  this.When(/^I see it running$/, function(callback) {
    callback.pending();
  });

  this.Then(/^I retrieve the knowledge$/, function(callback) {
    callback.pending();
  });

  this.Given(/^I have retrieved the knowledge$/, function(callback) {
    callback.pending();
  });

  this.Then(/^I can read the knowledge$/, function(callback) {
    callback.pending();
  });
};
