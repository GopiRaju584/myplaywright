import{ test,expect } from '@playwright/test';

test('verify CheckBox2 function', async ({page}) =>{

    let URL='https://rahulshettyacademy.com/AutomationPractice/';

    await page.goto(URL);

    const CheckBox2=page.locator('input[id="checkBoxOption2"]');
    const CheckBox3=page.locator('input[id="checkBoxOption3"]');

    await CheckBox2.click();

    await expect(CheckBox2).toBeChecked();

    await CheckBox3.click();

    await expect(CheckBox3).toBeChecked();
});