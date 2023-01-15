Feature: Edit profile 

Scenario: Edit Profile Functionality Test
    Given I login to DemoGuru insurance Site
    And I navigate to Edit Profile Section
    And I enter all required Button
    When I click on Save Button
    Then I see Profile Updated Message  