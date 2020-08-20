import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

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



class Dashboard {
	@Given("User is on dashboard page")
	public void user_is_on_dashboard_page() {
		WebUI.click(findTestObject('Object Repository/Pro_Acc_Dashboard/a_Dashboard'))
	}

	@When("User has to select project name and instance from dropdown list")
	public void user_has_to_select_project_name_and_instance_from_dropdown_list() {
		WebUI.selectOptionByLabel(findTestObject('Object Repository/Pro_Acc_Dashboard/select_-Project'),
				'Tin Pilot Phase Test', true)
		WebUI.selectOptionByLabel(findTestObject('Object Repository/Pro_Acc_Dashboard/select_-Instance'), 'T01',
				true)
		WebUI.click(findTestObject('Object Repository/Pro_Acc_Dashboard/button_Select Instance'))
	}

	@Then("User has able to see the recent updates on task")
	public void user_has_able_to_see_the_recent_updates_on_task() {
		WebUI.delay(8)
		
		WebUI.scrollToElement(findTestObject('Object Repository/Pro_Acc_Dashboard/Element_scroll'), 4)
		WebUI.delay(8)
		
		WebUI.click(findTestObject('Object Repository/Pro_Acc_Logout/User_Click'))
		
					WebUI.click(findTestObject('Object Repository/Pro_Acc_Logout/Logout'))
	}
}
