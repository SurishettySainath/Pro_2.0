#---------------------------------------------------------------------------------------------------------------------------------
# Authors : Seena k Janardhanana						  																							Reviewed By: Monica
# Date   :   15/05/2020                                                                     Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Activity Creation
# Feature Description:Creating Activity
#---------------------------------------------------------------------------------------------------------------------------------
Feature: Activity Creation


  @SmokeTest
  Scenario Outline: Creating Activity
    Given User is on create activity page
    When User has to fill the fields like Task<Task>,ApplicationArea<ApplicationArea>,Phase<Phase>,Role<Role>,BuildingBlock<BuildingBlock>,Est Hrs<EstHrs>
    And User has to click on create button for create activity and need to select task
    Then User can search for created activity in list<Activitysearch>

    Examples: 
      | Task                              | ApplicationArea        | Phase           | Role       | Activitysearch                    | BuildingBlock                 | EstHrs |
      | Alexa Custom Code Assessment      | Technical - ABAP       | Assessment      | Functional | Alexa Custom Code Assessment      | Application Overview          | 10:43  |
      | Alexa Custom Code Pre_Conversion  | Functional / Technical | Pre Conversion  | Functional | Alexa Custom Code Pre_Conversion  | Data Consistency Verification | 11:34  |
      | Alexa Custom Code Conversion      | Technical - Security   | Conversion      | BASIS      | Alexa Custom Code Conversion      | Custom Adoption               | 12:34  |
      | Alexa Custom Code Post_Conversion | Functional - All / PMO | Post Conversion | Functional | Alexa Custom Code Post_Conversion | Application Overview          | 45:32  |
