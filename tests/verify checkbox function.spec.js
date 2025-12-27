import { test,expect } from '@playwright/test';

test('verify checkbox function',  async ({page}) =>{
try{
    let URL='https://rahulshettyacademy.';

    await page.goto(URL);

    const CheckBox1= page.locator('input[id="checkBoxOption1"]');
    await page.waitForTimeout(6000);

    await CheckBox1.click();

    await expect(CheckBox1).toBeChecked();
}catch(error){
    console.error('an error occure:',error);
}
finally{
await console.log('Next step after the checkbox is checked');

let name = "hello world";
await console.log(name);
}
});
