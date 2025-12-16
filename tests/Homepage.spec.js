import{expect,test} from '@playwright/test';
import{Homepage} from '..\\PAGES\\Homepage.js';

test('verify the Homepage functionality of prople hrms', async({page}) =>{
    await page.waitForTimeout(3000);
    const loginpage = new Homepage (page);

    await page.waitForTimeout(3000);

    await loginpage.launchApplication();
    await loginpage.loginApplication();
});