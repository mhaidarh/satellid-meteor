Feature: Authorable Home Page

  As an author
  I want to curate a home page
  So that I can entice people to know the app

  Scenario: Visitors can see the app heading
    Given I am a new visitor
    When I navigate to the home page
    Then I see the heading "Satellid"
