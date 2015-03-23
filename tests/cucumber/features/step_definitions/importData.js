module.exports = function() {

  var helper = this;

  this.Given(/^I am a system$/, function(callback) {
    callback();
  });

  this.When(/^I get the JSON file$/, function(callback) {
    callback();
  });

  this.When(/^I import it to the database$/, function(callback) {
    callback();
  });

  this.Then(/^I can have the imported database$/, function(callback) {
    callback.pending();
  });

  this.Then(/^user can see the data$/, function(callback) {
    callback.pending();
  });
};
