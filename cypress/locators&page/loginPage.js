import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class loginPage{
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
        return cy.get("[value='Log in']")
    }
    get errorSpan(){
        return cy.xpath("//span//b[contains(text(),'correct')]")
    }
    get logoutBtn1(){
        return cy.get("[value='Log out']")
    }
    launchApp(url){
        actionsObj.launchUrl(url)
        assertionObj.assertUrl(url)
    }
    assertHeading(value){
        assertionObj.assertText(this.headerH3,value)
    }
    enterUser(value){
        actionsObj.inputText(this.userNameTxt,value)
    }
    enterPassword(value){
        actionsObj.inputText(this.passwordTxt,value)
    }
    clickLoginbtn(){
        actionsObj.buttonClick(this.loginBtn)
    }
    assertDash(url){
        assertionObj.assertUrl(url)
    }
    assertErrorSpan(){
        assertionObj.assertVisibility(this.errorSpan)
    }
    logout(){
        actionsObj.buttonClick(this.logoutBtn1)
        
    }
    assertcurrentUrl(url){
        assertionObj.assertUrl(url)
    }
}
let loginPageObj=new loginPage()
export default loginPageObj