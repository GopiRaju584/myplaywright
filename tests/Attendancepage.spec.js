import {test,expect } from '@playwright/test';
import { Attendancepage } from '..\\PAGES\\Attendancepage.js';

test('verify the login functionality of prople HRMS', async ({page})=>{

        const loginpage = new Attendancepage (page);

        await loginpage.lanchApplication();
        await page.waitForTimeout(3000);
        await loginpage.loginApplication();
        await page.waitForTimeout(4000);


});
