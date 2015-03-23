Feature: Connect with database

  As a system
  I can connect to the database
  So that I can communicate with it

  Scenario: System initially connect with database
    Given I am a system
    When I try to connect with database
    Then I can connect with database
    And I can read the data inside database
