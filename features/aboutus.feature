Feature: Saucedemo website adds

    Scenario: Check About Us option

    Given User is on login page
    When User enters username and password
    When User clicks login button
    Then User is on home page
    When User clicks on burger menu
    When User clicks About Us option
    Then User is on About Us page