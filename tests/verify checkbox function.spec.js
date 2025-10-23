import { test,expect } from '@playwright/test';

test('verify checkbox function',  async ({page}) =>{

    let URL='https://rahulshettyacademy.com/AutomationPractice/';

    await page.goto(URL);

    const CheckBox1= page.locator('input[id="checkBoxOption1"]');

    await CheckBox1.click();

    await expect(CheckBox1).toBeChecked();
});
