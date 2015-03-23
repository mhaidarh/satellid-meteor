Feature: Run on supported platform

  As a system
  I need to be run on supported platform or browser via a network
  So that I can be used by user

  Scenario: System accessed through the home page
    Given I am a system
    When I navigate to the home page
    Then I am running on the platform or browser
