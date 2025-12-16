import {test,expect} from '@playwright/test';

test('verifyfacebookfunction', async({page}) =>{

    let URL='https://www.facebook.com/login.php/';

    await page.goto(URL);

    const emailtextbox = page.locator('input[class="inputtext _55r1 inputtext _1kbt inputtext _1kbt"]');
    const password = page.locator("#pass");
    const loginbutton = page.locator('button[class="_42ft _4jy0 _52e0 _4jy6 _4jy1 selected _51sy"]');
    

    await emailtextbox.fill('uday408040@gmail.com');
    await page.waitForTimeout(4000);

    await password.fill('Udayuday@');
    await page.waitForTimeout(4000);

    
    
    
    await loginbutton.click();
    await page.waitForTimeout(8000);

    
});
