import {
  And,
  Given,
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps';
var loginData;
import loginPageObj from '../../locators&page/loginPage';

let url
before(()=>{
    url=Cypress.config().baseUrl
    cy.fixture('login').then((data)=>{
        loginData=data
    })
})
Given("I launch login page of DemoGuru",()=>{
    loginPageObj.launchApp(url+'index.php')
})
And("I enter Valid Email id",()=>{
    loginPageObj.enterUser(loginData.emailId)
})
And("I enter invalid Email id",()=>{
    loginPageObj.enterUser(loginData.emailId+'1245')
})
And("I enter Valid Password",()=>{
    loginPageObj.enterPassword(loginData.password)
})
When("I click on Login Button",()=>{
    loginPageObj.clickLoginbtn()
})
Then("I see header in url",()=>{
    loginPageObj.assertDash('header.php')
})
Then("I see error Message",()=>{
    loginPageObj.assertErrorSpan()
})
Then("I Logout Application",()=>{
    loginPageObj.logout()
    loginPageObj.assertcurrentUrl(url+'index.php')
})