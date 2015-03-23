Feature: Import the data

  As a system
  I can import the the data without the app opened
  So that user can immediately try the app

  Scenario: System import the data from JSON file
    Given I am a system
    When I get the JSON file
    And I import it to the database
    Then I can have the imported database
    And user can see the data
