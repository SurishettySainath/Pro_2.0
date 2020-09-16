
/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */

import com.kms.katalon.core.testobject.TestObject

import com.aventstack.extentreports.ExtentTest

import java.lang.String

import org.openqa.selenium.WebDriver

import java.lang.Throwable

import com.applitools.eyes.RectangleSize

import com.applitools.eyes.selenium.Eyes



def static "projectKeywords.OnlineKeywords.getBrowserName"() {
    (new projectKeywords.OnlineKeywords()).getBrowserName()
}


def static "projectKeywords.OnlineKeywords.Assessment_monitor"(
    	TestObject Element_Click	) {
    (new projectKeywords.OnlineKeywords()).Assessment_monitor(
        	Element_Click)
}


def static "projectKeywords.OnlineKeywords.takeScreenshot"(
    	ExtentTest test	) {
    (new projectKeywords.OnlineKeywords()).takeScreenshot(
        	test)
}


def static "projectKeywords.OnlineKeywords.captureScreenShot"() {
    (new projectKeywords.OnlineKeywords()).captureScreenShot()
}


def static "projectKeywords.OnlineKeywords.getcurrentdateandtime"() {
    (new projectKeywords.OnlineKeywords()).getcurrentdateandtime()
}


def static "projectKeywords.OnlineKeywords.countRowsPerPage"(
    	String xpath	) {
    (new projectKeywords.OnlineKeywords()).countRowsPerPage(
        	xpath)
}


def static "projectKeywords.OnlineKeywords.testStepHandle"(
    	String teststatus	
     , 	WebDriver driver	
     , 	ExtentTest extenttest	
     , 	Throwable throwable	) {
    (new projectKeywords.OnlineKeywords()).testStepHandle(
        	teststatus
         , 	driver
         , 	extenttest
         , 	throwable)
}


def static "com.kms.katalon.keyword.applitools.BasicKeywords.checkWindow"(
    	String testName	) {
    (new com.kms.katalon.keyword.applitools.BasicKeywords()).checkWindow(
        	testName)
}


def static "com.kms.katalon.keyword.applitools.BasicKeywords.checkTestObject"(
    	TestObject testObject	
     , 	String testName	) {
    (new com.kms.katalon.keyword.applitools.BasicKeywords()).checkTestObject(
        	testObject
         , 	testName)
}


def static "com.kms.katalon.keyword.applitools.EyesKeywords.eyesOpenWithBaseline"(
    	String baselineName	
     , 	String testName	
     , 	RectangleSize viewportSize	) {
    (new com.kms.katalon.keyword.applitools.EyesKeywords()).eyesOpenWithBaseline(
        	baselineName
         , 	testName
         , 	viewportSize)
}


def static "com.kms.katalon.keyword.applitools.EyesKeywords.eyesClose"(
    	Eyes eyes	) {
    (new com.kms.katalon.keyword.applitools.EyesKeywords()).eyesClose(
        	eyes)
}


def static "com.kms.katalon.keyword.applitools.EyesKeywords.eyesOpen"(
    	String testName	
     , 	RectangleSize viewportSize	) {
    (new com.kms.katalon.keyword.applitools.EyesKeywords()).eyesOpen(
        	testName
         , 	viewportSize)
}


def static "com.kms.katalon.keyword.applitools.EyesKeywords.eyesInit"() {
    (new com.kms.katalon.keyword.applitools.EyesKeywords()).eyesInit()
}
