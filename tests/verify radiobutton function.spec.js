import { test,expect } from '@playwright/test';

test ('verify RadioButton function', async ({page}) =>{

    let URL='https://rahulshettyacademy.com/AutomationPractice/';

    await page.goto(URL);

    const RadioButton1=page.locator('input[value="radio1"]');
    const RadioButton2=page.locator('input[value="radio2"]');

    //click first radio button
    await  RadioButton1.click();

    await expect(RadioButton1).toBeChecked();

    //click second radio button
    await RadioButton2.click();

    await expect(RadioButton2).toBeChecked();

    //verify that radiobutton1 is unchecked after selecting radiobutton2
    await expect(RadioButton1).not.toBeChecked();

    
});