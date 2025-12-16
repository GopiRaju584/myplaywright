import {test,expect } from '@playwright/test';
import {DashBoardpage} from '..\\PAGES\\DashBoardpage.js';

test('verify the login functionality of prople HRMS', async({page}) =>{
    await page.waitForTimeout(7000);
    const loginpage = new DashBoardpage (page);

    await loginpage.lanchApplication();
    await page.waitForTimeout(7000);
    await loginpage.loginApplication();
    await page.waitForTimeout(7000);

});
