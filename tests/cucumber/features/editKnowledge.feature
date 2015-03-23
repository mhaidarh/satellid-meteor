Feature: Edit a stored knowledge

  As a User
  I can edit a stored knowledge
  So that I edit or update the knowledge content

  # Basic:
  # Edit an existing knowledge
  # User edit the Knowldge
  # If the Knowledge is successfully edited
  # Then System store the edited Knowledge into the System

  Scenario: User see that they are able to edit
    Given I have see my knowledge collection
    When I hover a knowledge card
    Then I can see the edit button

  Scenario: User save their edited knowledge with save button
    Given I see the knowledge form
    When I click the save button
    Then the knowledge is saved
