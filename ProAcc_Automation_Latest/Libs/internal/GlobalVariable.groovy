package internal

import com.kms.katalon.core.configuration.RunConfiguration
import com.kms.katalon.core.main.TestCaseMain


/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */
public class GlobalVariable {
     
    /**
     * <p></p>
     */
    public static Object Url
     
    /**
     * <p></p>
     */
    public static Object userName
     
    /**
     * <p></p>
     */
    public static Object password
     
    /**
     * <p></p>
     */
    public static Object uc
     
    /**
     * <p></p>
     */
    public static Object pc
     
    /**
     * <p></p>
     */
    public static Object userprojectmanager
     
    /**
     * <p></p>
     */
    public static Object passwordprojectmanager
     
    /**
     * <p></p>
     */
    public static Object userconsultant
     
    /**
     * <p></p>
     */
    public static Object passwordconsultant
     
    /**
     * <p></p>
     */
    public static Object useradmin
     
    /**
     * <p></p>
     */
    public static Object passwordadmin
     
    /**
     * <p></p>
     */
    public static Object userconsultant_Abap
     
    /**
     * <p></p>
     */
    public static Object userconsultant_Functional
     

    static {
        try {
            def selectedVariables = TestCaseMain.getGlobalVariables("default")
			selectedVariables += TestCaseMain.getGlobalVariables(RunConfiguration.getExecutionProfile())
            selectedVariables += RunConfiguration.getOverridingParameters()
    
            Url = selectedVariables['Url']
            userName = selectedVariables['userName']
            password = selectedVariables['password']
            uc = selectedVariables['uc']
            pc = selectedVariables['pc']
            userprojectmanager = selectedVariables['userprojectmanager']
            passwordprojectmanager = selectedVariables['passwordprojectmanager']
            userconsultant = selectedVariables['userconsultant']
            passwordconsultant = selectedVariables['passwordconsultant']
            useradmin = selectedVariables['useradmin']
            passwordadmin = selectedVariables['passwordadmin']
            userconsultant_Abap = selectedVariables['userconsultant_Abap']
            userconsultant_Functional = selectedVariables['userconsultant_Functional']
            
        } catch (Exception e) {
            TestCaseMain.logGlobalVariableError(e)
        }
    }
}
