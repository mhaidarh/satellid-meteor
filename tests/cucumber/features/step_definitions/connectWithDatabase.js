module.exports = function() {

  var helper = this;

  this.Given(/^I am a system$/, function(callback) {
    callback();
  });

  this.When(/^I try to connect with database$/, function(callback) {
    callback();
  });

  this.Then(/^I can connect with database$/, function(callback) {
    callback.pending();
  });

  this.Then(/^I can read the data inside database$/, function(callback) {
    callback.pending();
  });
};
