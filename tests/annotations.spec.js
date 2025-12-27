import {test,expect} from '@playwright/test';
test.only ('test login functionality', async({page})=>{
    await page.goto('https://www.agoda.com/?ds=nGcW3G45QHuiOPhQ');
    await page.locator('//input[@aria-label="Enter a destination or property"]').fill('hyderabad');
    await page.locator('//div[@data-selenium="checkInText"]').click();
    await page.locator('//span[@data-selenium-date="2026-01-09"]').click();
    await page.locator('//span[@data-selenium-date="2026-01-12"]').click();
    await page.waitForTimeout(5000);
    const rooms = ('1 to 10');
    for(let i=1; i<rooms.length; i++){
        await page.locator('')
    }
    
});

    