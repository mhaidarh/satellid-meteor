var assert = require('assert');

module.exports = function() {

  var helper = this;

  this.Given(/^I am on the running app$/, function(callback) {
    callback();
  });

  this.When(/^I type a letter "([^"]*)" into the search bar$/,
    function(typedLetter, callback) {
      console.log(typedLetter);
      // helper.world.browser.
      // setValue('input#search', letter).
      // call(callback);
      callback.pending();
    });

  this.Then(/^I can instantly see a knowledge that contain letter "([^"]*)"$/,
    function(expectedLetter, callback) {
      console.log(expectedLetter);
      // helper.world.browser.
      // getText('.knowledge span', function(error, actualLetter) {
      // assert.equal(expectedLetter, actualLetter);
      // callback();
      // });
      // callback();
      callback.pending();
    });

};
