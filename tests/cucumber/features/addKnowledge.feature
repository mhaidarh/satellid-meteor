Feature: Add a knowledge based on context

  As a User
  I can add a new knowledge based on context
  So that I can manage them structured

  # Basic:
  # Add a new knowledge based on its context
  # User complete the new Knowldge
  # If new Knowledge is successfully inputted
  # Then System store the new Knowledge into the System

  Scenario: User want to add their knowledge with add button
    Given I am on the running app
     When I click the add button
     Then I see the knowledge form

  Scenario: User choose a context
    Given I see the knowledge form
     When I click the context dropdown
      And I choose one of them
     Then I see the knowledge form more revealed

  Scenario: User save their knowledge with save button
    Given I see the knowledge form
     When I click the save button
     Then the knowledge is saved
