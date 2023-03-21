Feature: Saucedemo website remove funcionality

  @RemoveItem
  Scenario: Remove item from cart

    Given User is on login page
    When User enters username and password
    And Clicks login button
    Then User is logged in
    When User add item to cart
    When User open cart
    When User click button remove
    Then Item is removed