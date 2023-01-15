import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class navigation{
    get headerH3(){
        return cy.xpath("//h3")
    }
    get userNameTxt(){
        return cy.get("#email")
    }
    get passwordTxt(){
        return cy.get("#password")
    }
    get loginBtn(){
        return cy.get("[value=\"Log in\"]")
    }
    
    launchApp(url,userName,Password){
        actionsObj.launchUrl(url)
        assertionObj.assertUrl(url)
        actionsObj.inputText(this.userNameTxt,userName)
        actionsObj.inputText(this.passwordTxt,Password)
        actionsObj.buttonClick(this.loginBtn)
    }
    assertHeading(value){
        assertionObj.assertText(this.headerH3,value)
    }
        
    assertDash(url){
        assertionObj.assertUrl(url)
    }
    
}
let navigationObj=new navigation()
export default navigationObj