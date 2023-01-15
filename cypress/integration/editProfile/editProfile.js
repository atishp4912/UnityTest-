import {
  And,
  Given,
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps';

import editProfileObj from '../../locators&page/editProfile';
import navigationObj from '../../locators&page/navigation';

let url;
var loginData;
var profileData
before(()=>{
    url=Cypress.config().baseUrl+'index.php'
    cy.fixture('login').then((data)=>{
        loginData=data
    })
    cy.fixture('profile').then((data)=>{
        profileData=data
    })
})
Given("I login to DemoGuru insurance Site",()=>{
    navigationObj.launchApp(url,loginData.emailId,loginData.password)

})
And("I navigate to Edit Profile Section",()=>{
    editProfileObj.navigateEditProfile()
});
And("I enter all required Button",()=>{
    editProfileObj.titleDrop(profileData.Title)
    editProfileObj.lastnameTxt(profileData.Surname)
    editProfileObj.FirstnameTxt(profileData.Firstname)
    editProfileObj.Phone_txt(profileData.Phone)
    editProfileObj.DOBcmb(profileData.Dataofbirth)
    editProfileObj.licenceType()
    editProfileObj.licPeriodCmb(profileData.LicensePeriod)
    editProfileObj.Occupation(profileData.Occupation)
    editProfileObj.adress(profileData.ADDRESS.street,profileData.ADDRESS.city,profileData.ADDRESS.country,profileData.ADDRESS.pinCode)
});

//Bug #bugID123
When("I click on Save Button",()=>{
    editProfileObj.updateBtnClick()
});

//Blocked because of bug #bugID123
Then("I see Profile Updated Message",()=>{
    editProfileObj.assertUpdated('updated Profile')
});