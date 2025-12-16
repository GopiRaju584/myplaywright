import{ test,expect } from '@playwright/test';
import{LoginPage} from '..\\PAGES\\LoginPage.js';
test('verify the login functionality of prople HRMS', async ({page}) =>{

    const loginpage = new LoginPage (page);

    await loginpage.lanchApplication();
    await loginpage.loginApplication();
    await page.waitForTimeout(4000); 
});