#---------------------------------------------------------------------------------------------------------------------------------
# Authors : Harsh Bhatt						  																							Reviewed By: Monica                                                     
# Date   :   15/05/2020                                                           Reviewed On:                                                        
# Last Updated By:
# Last Updated On:
# Feature Name: To view all the details  
# Feature Description: View deatils on dashboard
#---------------------------------------------------------------------------------------------------------------------------------


Feature: To view all the details

 @SmokeTest
  Scenario Outline: Login to application
    Given User should navigate to ProAcc page
    And User enters <username> and <password>
    When User clicks on LOG IN button
    Then User will be logged in successfully

    Examples: 
      | username | password |
      | Tin_PM   | a12345@  |

  @SmokeTest
  Scenario: 
    Given User is on dashboard page
    When User has to select project name and instance from dropdown list
    Then User has able to see the recent updates on task
