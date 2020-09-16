$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/proAcc_Featurefile/Configuration/CreateInstance.feature");
formatter.feature({
  "name": "Create Instance",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "CreaHarryg New Instance",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create instance page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter instance name\u003cInstancename\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User has to select project from dropdown\u003cprojecHarrystancename\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click on create button for create instance",
  "keyword": "And "
});
formatter.step({
  "name": "User can search for created instance in list\u003cInstancesearch\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Instancename",
        "projecHarrystancename",
        "Instancesearch"
      ]
    },
    {
      "cells": [
        "S01",
        "Tin Pilot Phase Test",
        "H01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CreaHarryg New Instance",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on create instance page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addinstancetoproject.user_is_on_project_instance_configuration_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method createNode() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat proAcc_Stepdef.Addinstancetoproject.user_is_on_project_instance_configuration_page(CreateInstance_StepDef.groovy:98)\r\n\tat ✽.User is on create instance page(Include/features/proAcc_Featurefile/Configuration/CreateInstance.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to enter instance nameS01",
  "keyword": "When "
});
formatter.match({
  "location": "Addinstancetoproject.user_has_to_enter_instance_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to select project from dropdownTin Pilot Phase Test",
  "keyword": "And "
});
formatter.match({
  "location": "Addinstancetoproject.user_has_to_select_project_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to click on create button for create instance",
  "keyword": "And "
});
formatter.match({
  "location": "Addinstancetoproject.user_click_on_create_button_and_navigate_to_view_project_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can search for created instance in listH01",
  "keyword": "Then "
});
formatter.match({
  "location": "Addinstancetoproject.user_can_search_for_instance(String)"
});
formatter.result({
  "status": "skipped"
});
});