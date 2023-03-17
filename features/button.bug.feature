Feature: Saucedemo ProblemUser

    Scenario: Button 'add to cart' not responding

        Given User is on the login page
        When User enters username and password
        When User clicks login button
        Then User is on home page
        When User clicks on 'add to cart' button
        Then Button does not responding