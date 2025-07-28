import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://app.eklipse.gg/login');
  }

  async fillEmail(email: string) {
    await this.page.fill('input[name="username"]', email);
  }

  async fillPassword(password: string) {
    await this.page.fill('input[name="password"]', password);
  }

  async submit() {
    await this.page.click('button:has-text("Sign In")');
  }

  async isLoggedIn(){
    await this.page.locator('text=Generate Stream Highlights').isVisible();
    await this.page.locator('text=Connect for the Ultimate Experience').isVisible();
    await this.page.locator('text=Generate from External Source').isVisible();
    await this.page.locator('text=Premium Exclusive Games').isVisible();
    await this.page.locator('text=Community Highlights').isVisible();
  }

  async isInvalidLoggedIn(){
    await this.page.locator('text=Login Failed Your account or password is incorrect. Reset or change your password.').isVisible();
  }

  async lupaPasswordBtn(){
    await this.page.click('text=Forgot your password?');
  }

  async lupaPasswordText(){
    await this.page.locator('text=Forgot your password? Please fill in the email that you used to register. We will send you an email that will allow you to reset your password.').isVisible();
  }

  async errorEmptyField(){
    await this.page.locator('text=Please fill in this field').isVisible();
  }

  async signUpBtn(){
    await this.page.click('text=Sign Up');
  }

  async signUpPage(){
    await this.page.locator('text=Get started on Eklipse').isVisible();
  }

  // account setting 
  async profileBtn(){
    const userIcon = this.page.locator("xpath=//li[@class='dropdown show nav-item']//i[@class='ic-user']");
    await userIcon.click() 
   }

   async accountSetBtn(){
    await this.page.click('button:has-text("Account Settings")');
   }

   async personalDetails(){
    const userIcon = this.page.locator("xpath=//p[.='Personal Details']");
    await userIcon.click() 
    await this.page.locator('text=Connected Account').isVisible();
   }

   async pluginSetting(){
    const userIcon = this.page.locator("xpath=//p[.='Plugin Setting']");
    await userIcon.click() 
    await this.page.locator('text=Let your clips being played on your Twitch Stream!').isVisible();
   }

   async gameSetting(){
    const userIcon = this.page.locator("xpath=//p[.='Game Setting']");
    await userIcon.click() 
    await this.page.locator('text=League of Legend').isVisible();
    await this.page.locator('text=Valorant').isVisible();

   }
}
