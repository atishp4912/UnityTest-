import {
  And,
  Given,
} from 'cypress-cucumber-preprocessor/steps';

import navigationObj from '../../locators&page/navigation';
import ProfileObj from '../../locators&page/profile';

let url;
var profileData
var loginData
before(()=>{
    url=Cypress.config().baseUrl+'index.php'
    cy.fixture('login').then((data)=>{
        loginData=data
    })
    cy.fixture('profile').then((data)=>{
        profileData=data
    })
})
/*Note: these test cases will fail beacuase there is no data on UI */
Given("I login to DemoGuru insurance Site",()=>{
    navigationObj.launchApp(url,loginData.emailId,loginData.password)

})
And("I navigate to Profile Section",()=>{
    ProfileObj.navigateEditProfile()
});

And("I check all User Details",()=>{
    ProfileObj.titleDrop(profileData.Title)
    ProfileObj.lastnameTxt(profileData.Surname)
    ProfileObj.FirstnameTxt(profileData.Firstname)
    ProfileObj.Phone_txt(profileData.Phone)
    ProfileObj.DOBcmb(profileData.Dataofbirth)
    ProfileObj.licenceType()
    ProfileObj.licPeriodCmb(profileData.LicensePeriod)
    ProfileObj.Occupation(profileData.Occupation)
    ProfileObj.adress(profileData.ADDRESS.street,profileData.ADDRESS.city,profileData.ADDRESS.country,profileData.ADDRESS.pinCode)

})