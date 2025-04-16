Feature: Rozetka Website Testing

  Background:
    Given I am on the Rozetka home page

  Scenario: Go to first category and verify product list is visible
    When I go to the first category
    Then I should see the list of category products

  Scenario: Add first product on home page to cart
    When I add the first product to the cart
    Then I should see the cart badge visible