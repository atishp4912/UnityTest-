import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import retriveQuotObj from '../../locators&page/retrive';
import navigationObj from "../../locators&page/navigation"
var logincred
let url;
var retId
var tableData
before(()=>{
    url=Cypress.config().baseUrl+'index.php'
    cy.fixture('login').then((el)=>{
        logincred=el
    })
    cy.fixture('id').then((id)=>{
        retId=id
    })
    cy.fixture('retrive').then((tdata)=>{
        tableData=tdata
    })
})
Given("I login to DemoGuru insurance Site",()=>{
    navigationObj.launchApp(url,logincred.emailId,logincred.password)

})
And("I Navigate to retrive Quotation Section",()=>{
    retriveQuotObj.navRetrive()
})
And("i Enter quotation id",()=>{
    retriveQuotObj.enterId(retId.id)
})
When("i click on retrive button",()=>{
    retriveQuotObj.clickRetriveBtn()
})
Then("i see retrived table on UI",()=>{
    tableData.tableData.forEach(element => {
        retriveQuotObj.assertTable(element.field,element.data)
    });
})
