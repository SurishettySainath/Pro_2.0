$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/proAcc_Featurefile/Configuration/ActivityCreation.feature");
formatter.feature({
  "name": "Activity Creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Creating Activity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create activity page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to fill the fields like Task\u003cTask\u003e,ApplicationArea\u003cApplicationArea\u003e,Phase\u003cPhase\u003e,Role\u003cRole\u003e,BuildingBlock\u003cBuildingBlock\u003e,Est Hrs\u003cEstHrs\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User has to click on create button for create activity and need to select task",
  "keyword": "And "
});
formatter.step({
  "name": "User can search for created activity in list\u003cActivitysearch\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Task",
        "ApplicationArea",
        "Phase",
        "Role",
        "Activitysearch",
        "BuildingBlock",
        "EstHrs"
      ]
    },
    {
      "cells": [
        "Alexa Custom Code Assessment",
        "Technical - ABAP",
        "Assessment",
        "Functional",
        "Alexa Custom Code Assessment",
        "Application Overview",
        "10:43"
      ]
    },
    {
      "cells": [
        "Alexa Custom Code Pre_Conversion",
        "Functional / Technical",
        "Pre Conversion",
        "Functional",
        "Alexa Custom Code Pre_Conversion",
        "Data Consistency Verification",
        "11:34"
      ]
    },
    {
      "cells": [
        "Alexa Custom Code Conversion",
        "Technical - Security",
        "Conversion",
        "BASIS",
        "Alexa Custom Code Conversion",
        "Custom Adoption",
        "12:34"
      ]
    },
    {
      "cells": [
        "Alexa Custom Code Post_Conversion",
        "Functional - All / PMO",
        "Post Conversion",
        "Functional",
        "Alexa Custom Code Post_Conversion",
        "Application Overview",
        "45:32"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating Activity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create activity page",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_is_on_create_activity_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill the fields like TaskAlexa Custom Code Assessment,ApplicationAreaTechnical - ABAP,PhaseAssessment,RoleFunctional,BuildingBlockApplication Overview,Est Hrs10:43",
  "keyword": "When "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_fill_the_fields_like_Task_Sequence_ApplicationArea_Phase_and_Role(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click on create button for create activity and need to select task",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_click_on_create_button_for_create_activity_and_need_to_select_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can search for created activity in listAlexa Custom Code Assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_can_search_for_created_activity_in_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating Activity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create activity page",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_is_on_create_activity_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill the fields like TaskAlexa Custom Code Pre_Conversion,ApplicationAreaFunctional / Technical,PhasePre Conversion,RoleFunctional,BuildingBlockData Consistency Verification,Est Hrs11:34",
  "keyword": "When "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_fill_the_fields_like_Task_Sequence_ApplicationArea_Phase_and_Role(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click on create button for create activity and need to select task",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_click_on_create_button_for_create_activity_and_need_to_select_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can search for created activity in listAlexa Custom Code Pre_Conversion",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_can_search_for_created_activity_in_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating Activity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create activity page",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_is_on_create_activity_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill the fields like TaskAlexa Custom Code Conversion,ApplicationAreaTechnical - Security,PhaseConversion,RoleBASIS,BuildingBlockCustom Adoption,Est Hrs12:34",
  "keyword": "When "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_fill_the_fields_like_Task_Sequence_ApplicationArea_Phase_and_Role(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click on create button for create activity and need to select task",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_click_on_create_button_for_create_activity_and_need_to_select_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can search for created activity in listAlexa Custom Code Conversion",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_can_search_for_created_activity_in_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating Activity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create activity page",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_is_on_create_activity_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill the fields like TaskAlexa Custom Code Post_Conversion,ApplicationAreaFunctional - All / PMO,PhasePost Conversion,RoleFunctional,BuildingBlockApplication Overview,Est Hrs45:32",
  "keyword": "When "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_fill_the_fields_like_Task_Sequence_ApplicationArea_Phase_and_Role(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click on create button for create activity and need to select task",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_has_to_click_on_create_button_for_create_activity_and_need_to_select_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can search for created activity in listAlexa Custom Code Post_Conversion",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityCreation_StepDef.user_can_search_for_created_activity_in_list(String)"
});
formatter.result({
  "status": "passed"
});
});