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

  this.Then(/^I can see the edit button$/, function(callback) {
    callback.pending();
  });

  this.Given(/^I see the knowledge form$/, function(callback) {
    callback();
  });

  this.When(/^I click the save button$/, function(callback) {
    // helper.world.browser.
    // click('input#add');
    callback.pending();
  });

  this.Then(/^the knowledge is saved$/, function(callback) {
    callback.pending();
  });

};
