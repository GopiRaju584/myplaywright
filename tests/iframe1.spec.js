import {test ,expect } from '@playwright/test';

test('has title', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const frameName = page.frameLocator('#courses-iframe');

    await frameName.getByText('Register').click();

    await frameName.getByText('VIEW ALL COURSES').click();

    await frameName.locator('[href="https://courses.rahulshettyacademy.com/sign_in"]').click();

    await frameName.getByText("Contact Us").click();

    await frameName.locator('[href="/about-my-mission"]').click();

    await frameName.getByText("Privacy Policy").click();

});