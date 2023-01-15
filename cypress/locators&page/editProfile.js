import actionsObj from '../utility/actions';

class editProfileobj1{
    get editProfile(){
        return cy.xpath("//a[text()='Edit Profile']")
    }
    get Title(){
        return cy.get("#user_title")
    }
    get Firstname(){
        return cy.get("#user_firstname")
    }
    get lastName(){
        return cy.get("#user_surname")
    }
    get Phone(){
        return cy.get("#user_phone")
    }
    get dateOfBirth(){
        return cy.xpath("//label[text()='Dateofbirth']/../select")
    }
    get licType(){
        return cy.get("#user_licencetype_f")
    }
    get licPeriod(){
        return cy.get("#user_licenceperiod")
    }
    get OccupationCmb(){
        return cy.get("#user_occupation_id")
    }
    get street(){
        return cy.get("#user_address_attributes_street")
    }
    get city(){
        return cy.get("#user_address_attributes_city")
    }
    get country(){
        return cy.get("#user_address_attributes_county")
    }
    get pinCode(){
        return cy.get("#user_address_attributes_postcode")
    }
    get updateBtn(){
        return cy.get("[onclick='updateInfo();getUser();return false;']")
    }
    get UpdatedText(){
        return cy.get("#updatedText")
    }
    navigateEditProfile(){
        cy.wait(2000)
        actionsObj.buttonClick(this.editProfile)
    }
    titleDrop(value){
        actionsObj.dropDown(this.Title,value)
    }
    FirstnameTxt(value){
        actionsObj.inputText(this.Firstname,value)
    }
    lastnameTxt(value){
        actionsObj.inputText(this.lastName,value)
    }
    Phone_txt(value){
        actionsObj.inputText(this.Phone,value)

    }
    DOBcmb(dob){
        dob=dob.split("/")
        actionsObj.dropDown(this.dateOfBirth.eq(0),dob[0])
        actionsObj.dropDown(this.dateOfBirth.eq(1),dob[1])
        actionsObj.dropDown(this.dateOfBirth.eq(2),dob[2])
    }
    licenceType(){
        actionsObj.buttonClick(this.licType)
    }
    licPeriodCmb(value){
        actionsObj.dropDown(this.licPeriod,value)
    }
    Occupation(value){
        actionsObj.dropDown(this.OccupationCmb,value)
    }
    adress(street,city,country,pincode){
        actionsObj.inputText(this.street,street)
        actionsObj.inputText(this.city,city)
        actionsObj.inputText(this.country,country)
        actionsObj.inputText(this.pinCode,pincode)
    }
    updateBtnClick(){
        actionsObj.buttonClick(this.updateBtn)
    }
    assertUpdated(value){
        cy.get(this.UpdatedText).invoke('attr','name').then(attr=>{
            console.log()
        })
    }
}
let editProfileObj =new editProfileobj1()
export default editProfileObj