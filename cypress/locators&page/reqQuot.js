import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class reqObj {
    get reqQuotSec() {
        return cy.get("#ui-id-2")
    }
    get reqHeading() {
        return cy.get("#tabs-2 h2")
    }
    get breakDownCOverCmb() {
        return cy.get("#quotation_breakdowncover")
    }
    get yesRadioBtn() {
        return cy.xpath("//label[text()='YES']")
    }
    get incidentTxt1() {
        return cy.get("#quotation_incidents")
    }
    get regTxt1() {
        return cy.get("#quotation_vehicle_attributes_registration")
    }
    get annualTxt1() {
        return cy.get("#quotation_vehicle_attributes_mileage")
    }
    get estimateTxt1() {
        return cy.get("#quotation_vehicle_attributes_value")
    }
    get parkingCmb1() {
        return cy.get("#quotation_vehicle_attributes_parkinglocation")
    }
    get dateCmb() {
        return cy.xpath("//h5[contains(text(),'Start')]/select")
    }
    get calculateBtn() {
        return cy.get("[value=\"Calculate Premium\"]")
    }
    get resetBtn() {
        return cy.get("#resetquote")
    }
    get saveBtn() {
        return cy.get("[value='Save Quotation']")
    }
    get premiumtxt1(){
        return cy.get("#calculatedpremium")
    }
    get reQIdframe(){
        return cy.get("#Your App: 'Testunity Assignment'")
    }
    reqSecClick() {
        actionsObj.buttonClick(this.reqQuotSec)
    }
    breakDownCmb(value) {
        actionsObj.dropDown(this.breakDownCOverCmb, value)
    }
    yesRadio() {
        actionsObj.buttonClick(this.yesRadioBtn)
    }
    incidenTxt(value) {
        actionsObj.inputText(this.incidentTxt1, value)
    }
    regTxt(value) {
        actionsObj.inputText(this.regTxt1, value)
    }
    annualTxt(value) {
        actionsObj.inputText(this.annualTxt1, value)
    }
    esitimateTxt(value) {
        actionsObj.inputText(this.estimateTxt1, value)
    }
    parkingCmb(value) {
        actionsObj.dropDown(this.parkingCmb1, value)
    }
    dateCombo(year, month, day) {
        actionsObj.dropDown(this.dateCmb.eq(0), year)
        actionsObj.dropDown(this.dateCmb.eq(1), month)
        actionsObj.dropDown(this.dateCmb.eq(2), day)
    }
    calculateBt() {
        actionsObj.buttonClick(this.calculateBtn)
    }
    resetBt() {
        actionsObj.buttonClick(this.resetBtn)
    }
    saveQuotBtn() {
        cy.intercept(Cypress.config().baseUrl+'new_quotation.php').as('reqId')
        actionsObj.buttonClick(this.saveBtn)
        cy.wait('@reqId').then(({response})=>{
            cy.writeFile("cypress/fixtures/id.json",{id:response.body.split('</b>')[2].split('<br/>')[0]})
        })
    }
    premiumTxt_p(){
        assertionObj.assertVisibility(this.premiumtxt1)
    }
    verifyEmtytext1(){
        assertionObj.assertEmpty(this.incidentTxt1)
    }
    verifyEmtytext2(){
        assertionObj.assertEmpty(this.registration_txt)
    }
    reqId(){
    }
    
}
let requQuotObj=new reqObj()
export default requQuotObj