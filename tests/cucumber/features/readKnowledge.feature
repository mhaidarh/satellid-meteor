Feature: Retrieve then read the stored knowledge

  As a User
  I can retrieve then read the knowledge that already stored
  So that I can remember and manage them

  Scenario: A user retrieve the knowledge
    Given I am on the running app
    When I see it running
    Then I retrieve the knowledge

  Scenario: A user read the knowledge
    Given I have retrieved the knowledge
    Then I can read the knowledge
