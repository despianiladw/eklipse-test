Feature: Landing page

# @TC-Landing-001
  Scenario: Ensure as a user, I can login with valid credential
    Given I open website eklipse
    Then I success open the page

# @TC-Landing-002
  Scenario: Ensure as user, I can see top section
    Given I open website eklipse
    Then Success open header section

#@TC-Landing-003
#  Scenario: Ensure as a user, I can access signup page
#    Given I open website eklipse
#    When User click Sign Up For Free btn
#    Then User redirect to Sign-Up Page

# @TC-Landing-004
#   Scenario: Ensure as a user, I can access sign-in page
#     Given I open website eklipse
#     When User click Sign In button
#     Then User redirect to Sign-In Page