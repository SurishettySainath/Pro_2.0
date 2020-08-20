$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/proAcc_Featurefile/Home_Page/Dashboard.feature");
formatter.feature({
  "name": "To view all the details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User should navigate to ProAcc page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on LOG IN button",
  "keyword": "When "
});
formatter.step({
  "name": "User will be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Tin_PM",
        "a12345@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User should navigate to ProAcc page",
  "keyword": "Given "
});
formatter.match({
  "location": "LogintoProAcc_StepDef.user_should_navigate_to_ProAcc_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Tin_PM and a12345@",
  "keyword": "And "
});
formatter.match({
  "location": "LogintoProAcc_StepDef.user_enters(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on LOG IN button",
  "keyword": "When "
});
formatter.match({
  "location": "LogintoProAcc_StepDef.user_clicks_on_LOG_IN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LogintoProAcc_StepDef.user_will_be_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Dashboard.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to select project name and instance from dropdown list",
  "keyword": "When "
});
formatter.match({
  "location": "Dashboard.user_has_to_select_project_name_and_instance_from_dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has able to see the recent updates on task",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.user_has_able_to_see_the_recent_updates_on_task()"
});
formatter.result({
  "status": "passed"
});
});