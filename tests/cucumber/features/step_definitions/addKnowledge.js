module.exports = function() {

  var helper = this;

  // Scenario: User want to add their knowledge with add button

  this.Given(/^I am on the running app$/, function(callback) {
    callback();
  });

  this.When(/^I click the add button$/, function(callback) {
    // helper.world.browser.
    // click('input#add');
    callback.pending();
  });

  this.Then(/^I see the knowledge form$/, function(callback) {
    callback.pending();
  });

  // Scenario: User choose a context

  this.Given(/^I see the knowledge form$/, function(callback) {
    callback();
  });

  this.When(/^I click the context dropdown$/, function(callback) {
    // helper.world.browser.
    // click('input#add');
    callback.pending();
  });

  this.When(/^I choose one of them$/, function(callback) {
    // helper.world.browser.
    // click('input#add');
    callback.pending();
  });

  this.Then(/^I see the knowledge form more revealed$/, function(callback) {
    callback.pending();
  });

  // Scenario: User save their knowledge with save button

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
