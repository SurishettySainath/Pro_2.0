$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/proAcc_Featurefile/Configuration/PMTaskCreation.feature");
formatter.feature({
  "name": "PMTaskCreation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Creating new task for Project Manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on PM Task Creation page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to select task category\u003cTaskCategory\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User has to write task name\u003cTaskName\u003eand est hrs\u003cEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click on create button for task creation",
  "keyword": "And "
});
formatter.step({
  "name": "User can search for created task in list\u003cTaskName\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TaskCategory",
        "TaskName",
        "EST"
      ]
    },
    {
      "cells": [
        "Plan Project",
        "D011",
        "11:00"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating new task for Project Manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on PM Task Creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "PMTaskCreation_StepDef.user_is_on_PM_Task_Creation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to select task categoryPlan Project",
  "keyword": "When "
});
formatter.match({
  "location": "PMTaskCreation_StepDef.user_has_to_select_task_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to write task nameD011and est hrs11:00",
  "keyword": "And "
});
formatter.match({
  "location": "PMTaskCreation_StepDef.user_has_to_write_task_name_and_est_hrs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click on create button for task creation",
  "keyword": "And "
});
formatter.match({
  "location": "PMTaskCreation_StepDef.user_has_to_click_on_create_button_for_task_creation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can search for created task in listD011",
  "keyword": "Then "
});
formatter.match({
  "location": "PMTaskCreation_StepDef.user_can_search_for_created_task_in_list(String)"
});
formatter.result({
  "status": "passed"
});
});