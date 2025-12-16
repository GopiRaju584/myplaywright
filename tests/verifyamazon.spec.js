import { test,expect } from '@playwright/test';

test('verify amazon function', async ({page}) =>{

    let URL='https://www.amazon.com/';
    await page.goto(URL);
    test.slow();  //defalt time 3 times.....
    test.setTimeout(10000); //set times 10 ms

    const header = page.locator("#nav-logo-sprites");
    const signin = page.locator("#nav-link-accountList-nav-line-1");
    const orderbutton = page.getByText("& Orders");
    await page.pause();
    const searchbutton = page.locator("#twotabsearchtextbox");
    

    await expect(header).toBeVisible();
    await expect(signin).toBeVisible();
    await expect(orderbutton).toBeVisible();
    await expect(searchbutton).toBeVisible();
    

});