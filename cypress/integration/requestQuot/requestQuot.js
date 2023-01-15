import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps"
import navigationObj from "../../locators&page/navigation"
import requQuotObj from "../../locators&page/reqQuot";
let url;
var loginData
var reqQuotData
before(()=>{
    url=Cypress.config().baseUrl+'index.php'
    cy.fixture('login').then((data)=>{
        loginData=data
    })
    cy.fixture('reqQuot').then((data)=>{
        reqQuotData=data
    })
})
Given("I login to DemoGuru insurance Site",()=>{
    navigationObj.launchApp(url,loginData.emailId,loginData.password)

})
And("I Navigate to Request Quotation Section",()=>{
    requQuotObj.reqSecClick()
})
And("I enter all fileds",()=>{
    requQuotObj.breakDownCmb(reqQuotData.breakDown)
    requQuotObj.yesRadio()
    requQuotObj.incidenTxt(reqQuotData.incident)
    requQuotObj.regTxt(reqQuotData.registration)
    requQuotObj.annualTxt(reqQuotData.annualMilage)
    requQuotObj.esitimateTxt(reqQuotData.estimateValue)
    requQuotObj.parkingCmb(reqQuotData.parkinPLace)
    requQuotObj.dateCombo(reqQuotData.year,reqQuotData.month,reqQuotData.date)
})
When("I Click on calculate Premium Button",()=>{
    requQuotObj.calculateBt()
})
Then("I see calculated Percentage on UI",()=>{
    requQuotObj.premiumTxt_p()
})

When("I Click on reset Button",()=>{
    requQuotObj.resetBt()
})
Then("I see all text area are blank",()=>{
requQuotObj.verifyEmtytext1()

})
When("I Click on save Button",()=>{
requQuotObj.saveQuotBtn()
})
Then("I navigate to saved details page",()=>{
    
})
