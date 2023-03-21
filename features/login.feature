Feature: Saucedemo website login funcionality

  @Login
  Scenario: Check login with valid credentials

    Given User is on login page
    When User enters username and password
    And Clicks login button
    Then User is logged in

  @InvalidLogin
  Scenario: Check login with invalid credentials

    Given User is on login page
    When User enters invalid username and password
    And Clicks login button
    Then User should not be login