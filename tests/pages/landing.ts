import { Page } from '@playwright/test';

export class Landing {
  constructor(private page: Page) {}
  
  async goto() {
    await this.page.goto('https://eklipse.gg/');
  }

  async successOpen(){
    await this.page.locator('text=10× faster with AI! Highlights ready in minutes, not hours').isVisible();
  }

  async hearderSection(){
    await this.page.locator('text=FEATURES').isVisible();
    await this.page.locator('text=USE CASE').isVisible();
    await this.page.locator('text=DISCOVERY').isVisible();
    await this.page.locator('text=PREMIUM').isVisible();
    await this.page.locator('text=Sign In').isVisible();
    await this.page.locator('text=Sign Up For Free').isVisible();
  }

}