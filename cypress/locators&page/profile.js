import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"

class Profileobj1{
    get editProfile(){
        return cy.xpath("//a[text()='Profile']")
    }
    get Title(){
        return cy.get("#showtitle")
    }
    get Firstname(){
        return cy.get("#showfirstname")
    }
    get lastName(){
        return cy.get("#showsurname")
    }
    get Phone(){
        return cy.get("#showphone")
    }
    get dateOfBirth(){
        return cy.get("#Dataofbirth")
    }
    get licType(){
        return cy.get("#showlicencetype")
    }
    get licPeriod(){
        return cy.get("#showlicenceperiod")
    }
    get OccupationCmb(){
        return cy.get("#showoccupation")
    }
    get street(){
        return cy.get("#showstreet")
    }
    get city(){
        return cy.get("#showcity")
    }
    get country(){
        return cy.get("#showcounty")
    }
    get pinCode(){
        return cy.get("#showpostcode")
    }
   
    navigateEditProfile(){
        cy.wait(2000)
        actionsObj.buttonClick(this.editProfile)
    }
    titleDrop(value){
        assertionObj.assertText(this.Title,value)
    }
    FirstnameTxt(value){
        assertionObj.assertText(this.Firstname,value)
    }
    lastnameTxt(value){
        assertionObj.assertText(this.lastName,value)
    }
    Phone_txt(value){
        assertionObj.assertText(this.Phone,value)

    }
    DOBcmb(dob){

        assertionObj.assertText(this.dateOfBirth.eq,dob)
 
    }
    licenceType(){
        assertionObj.assertText(this.licType)
    }
    licPeriodCmb(value){
        assertionObj.assertText(this.licPeriod,value)
    }
    Occupation(value){
        assertionObj.assertText(this.OccupationCmb,value)
    }
    adress(street,city,country,pincode){
        assertionObj.assertText(this.street,street)
        assertionObj.assertText(this.city,city)
        assertionObj.assertText(this.country,country)
        assertionObj.assertText(this.pinCode,pincode)
    }

}
let ProfileObj =new Profileobj1()
export default ProfileObj