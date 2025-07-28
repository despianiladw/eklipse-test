import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { page } from "../support/hooks";

let loginPage: LoginPage;

Given('I open the login page', async () => {
  loginPage = new LoginPage(page);
  console.log('Opening login page...');
  await loginPage.goto();
  console.log('Login page opened!');

});

When('I login with email {string} and password {string}', async (email: string, password: string) => {
  await loginPage.fillEmail(email);
  await loginPage.fillPassword(password);
  await loginPage.submit();
});

Then('I should see the homepage', async () => {
    await loginPage.isLoggedIn();
});

// invalid login
Then ('I can see error message failed account', async() =>{
    await loginPage.isInvalidLoggedIn();
});

// forgot password
When ('I click lupa password', async() =>{
    await loginPage.lupaPasswordBtn();
})

Then ('I will see lupa pasword page', async() =>{
    await loginPage.lupaPasswordText();
})

// error submit
When ('I click submit button', async() =>{
    await loginPage.submit();
})

Then ('I will see error message empty field', async() =>{
    await loginPage.errorEmptyField();
})

// // sign-up button
// When ('I click sign-up button', async() =>{
//     await loginPage.signUpBtn();
// })

// Then ('I will redierct to sign up page', async() =>{
//     await loginPage.signUpPage();
// })

// account setting
// Given('I click profile menu', async () =>{
//     await loginPage.profileBtn();
// })

// When('I click account setting', async () =>{
//     await loginPage.accountSetBtn();

// })

// Then('I should see the account setting', async () =>{
//     await loginPage.personalDetails();
//     await loginPage.pluginSetting();
//     await loginPage.gameSetting();

// })
