module.exports = function() {

  var helper = this;

  this.Given(/^I have see my knowledge collection$/, function(callback) {
    callback();
  });

  this.When(/^I hover a knowledge card$/, function(callback) {
    // helper.world.browser.
    // hover('.knowledge');
    callback.pending();
  });

  this.Then(/^I can see the delete button$/, function(callback) {
    callback.pending();
  });

};
