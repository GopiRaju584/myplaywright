import { test,expect } from '@playwright/test';

test('verify Sign In functionality', async ({page}) =>{

    let URL='https://www.prople.pro/login';
    await page.goto(URL);

    let pageTile = await page.title();

    await expect(pageTile).toBe('PROPLE - HRMS');

    let urtlOfThepage = page.url();
    await expect(URL).toBe(urtlOfThepage);


    const appLogo = page.locator('[src="https://www.prople.pro/assets/prople_1-DBiwz8Hf.png"]');
    const welcomeBack = page.getByRole('heading', {name: 'Welcome Back'});
    const BankSecurity = page.getByRole('heading',{name:'Bank-Grade Security'});
    const usernametextbox = page.getByPlaceholder("john@company.com");
    

    await expect(appLogo).toBeVisible();
    await expect(welcomeBack).toBeVisible();
    await expect(BankSecurity).toBeVisible();
    await expect(usernametextbox).toBeVisible();
    
    

    
});