import{test,expect} from '@playwright/test';

test('verify the login the prople hrms', async({page}) =>{

    await page.goto ('https://prople.pro/login#/login');

    await page.locator('xpath=//input[@name="email"]').fill('praveen.m@spearsoftech.com');
    await page.locator('xpath=//input[@name="password"]').fill('Vihansh77**');
    await page.locator('xpath=//button[@type="submit"]').click();
});