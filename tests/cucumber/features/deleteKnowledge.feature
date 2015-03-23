Feature: Delete or remove a stored knowledge

  As a User
  I can delete remove a stored knowledge
  So that I relieve the thing that does not needed

  # Basic:
  # Delete an existing knowledge
  # If the Knowledge is confirmed to be deleted
  # Then System delete the Knowledge from the System

  Scenario: User User want to remove their knowledge with delete button
    Given I have see my knowledge collection
    When I hover a knowledge card
    Then I can see the delete button
