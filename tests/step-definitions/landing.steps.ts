import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Landing } from "../pages/landing";
import { page } from "../support/hooks";

let landing: Landing;

Given('I open website eklipse', async () => {
  landing = new Landing(page);
  console.log('Opening web page...');
  await landing.goto();
  console.log('Login web opened!');
});

Then('I success open the page', async () =>{
    await landing.successOpen();
})

Then('Success open header section', async () =>{
    await landing.successOpen();
})

// sign-up btn
// When('User click Sign Up For Free btn', async () =>{
//     await landing.signUpBtn();
// })

// Then('User redirect to Sign-Up Page', async () =>{
//     await landing.successSignUpPage();
// })

// sign-in btn
// When('User click Sign In button', async () =>{
//     await landing.signInBtn();
// })

// Then('User redirect to Sign-In Page', async () =>{
//     await landing.successSignIpPage();
// })