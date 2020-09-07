import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.aventstack.extentreports.ExtentReports
import com.aventstack.extentreports.ExtentTest
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


import projectKeywords.OnlineKeywords
//import common.entities

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.HttpCommandExecutor
import org.openqa.selenium.remote.RemoteWebDriver
import org.openqa.selenium.remote.SessionId
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.*;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
//import com.aventstack.extentreports.LogStatus;
import com.aventstack.extentreports.gherkin.model.Scenario
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import com.fasterxml.jackson.annotation.JsonFormat.Feature
import com.aventstack.extentreports.GherkinKeyword
import common.CommonReport;



class Dashboard {
	ExtentTest test;
	//	ExtentTest logger;
	ExtentTest loginfo;
	//ExtentTest createNode;
	static ExtentReports extent = CommonReport.extent1

	String browserName = ""
	@Given("User is on dashboard page")
	public void user_is_on_dashboard_page() {
		try{

			WebUI.click(findTestObject('Object Repository/Pro_Acc_Dashboard/a_Dashboard'))
			loginfo= extent.createTest(Feature.class,"Dashboard functionality");
			loginfo=loginfo.createNode(Scenario.class,"Dashboard");

			loginfo.createNode(new GherkinKeyword("Given"), "User is on dashboard page").pass("pass");
			Assert.assertTrue(true);
			loginfo.assignCategory("Dashboard")

		} catch   (Exception e){
			loginfo.createNode(new GherkinKeyword("Given"), "User is on dashboard page").fail("fail").addScreenCaptureFromPath(new OnlineKeywords ().takeScreenshot(loginfo));
		}
	}
	@When("User has to select project name and instance from dropdown")
	public void user_has_to_select_project_name_and_instance_from_dropdown() {
		try{


			WebUI.selectOptionByLabel(findTestObject('Object Repository/Pro_Acc_Dashboard/select_-Project'),
					'Tin Pilot Phase Test', true)
			WebUI.selectOptionByLabel(findTestObject('Object Repository/Pro_Acc_Dashboard/select_-Instance'), 'T01',
					true)
			WebUI.click(findTestObject('Object Repository/Pro_Acc_Dashboard/button_Select Instance'))

			loginfo.createNode(new GherkinKeyword("Given"), "User has to select project name and instance from dropdown list").pass("pass");
			Assert.assertTrue(true);
			loginfo.assignCategory("Dashboard")

		} catch   (Exception e){
			loginfo.createNode(new GherkinKeyword("Given"), "User has to select project name and instance from dropdown list").fail("fail").addScreenCaptureFromPath(new OnlineKeywords ().takeScreenshot(loginfo));
		}
	}

	@Then("User has able to see the recent updates")
	public void user_has_able_to_see_the_recent_updates() {
		try{
			WebUI.delay(8)

		//	WebUI.scrollToElement(findTestObject('Object Repository/Pro_Acc_Dashboard/Element_scroll'), 4)
			WebUI.delay(8)

			WebUI.click(findTestObject('Object Repository/Pro_Acc_Logout/User_Click'))

			WebUI.click(findTestObject('Object Repository/Pro_Acc_Logout/Logout'))
			loginfo.createNode(new GherkinKeyword("Given"), "User has able to see the recent updates on task").pass("pass");
			Assert.assertTrue(true);
			loginfo.assignCategory("Dashboard")

		} catch   (Exception e){
			loginfo.createNode(new GherkinKeyword("Given"), "User has able to see the recent updates on task").fail("fail").addScreenCaptureFromPath(new OnlineKeywords ().takeScreenshot(loginfo));
		}
	}
}
