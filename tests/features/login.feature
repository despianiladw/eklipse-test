Feature: Login

#@TC-Login-001
  Scenario: Ensure as a user, I can login with valid credential
    Given I open the login page
    When I login with email "dwidespi@gmail.com" and password "Valid123"
    Then I should see the homepage

# @TC-Login-002
  Scenario: Ensure as a user, I can't login with valid email and invalid password
    Given I open the login page
    When I login with email "dwidespi@gmail.com" and password "Valid123--"
    Then I can see error message failed account

# @TC-Login-003
  Scenario: Ensure as a user, I can access lupa password
    Given I open the login page
    When I click lupa password
    Then I will see lupa pasword page

 # @TC-Login-004
  Scenario: Ensure as a user, I can't submit login with empty fields
    Given I open the login page
    When I click submit button
    Then I will see error message empty field



