Feature: Browse or search knowledge and search result

  As a user that have signed in
  I can browse or search knowledge and browse the search result
  So that I can retrieve then read my knowledge

  # Basic:
  # Search a Knowledge based on typed text string
  # System search for matching text instantly
  # If matched Text is found, System show the search result
  # User get the found Knowledge

  Scenario: User browse their knowledge by search
    Given I am on the running app
    When I type a letter "a" into the search bar
    Then I can instantly see a knowledge that contain letter "a"
