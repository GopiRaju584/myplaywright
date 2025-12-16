import{test,expect} from '@playwright/test';
const fs = require('fs');

const loginData = JSON.parse(
    fs.readFileSync('C:\\PLAYWRIGHT AUTOMATION\\myplaywright\\Testdata\\login1.JSON', 'utf-8')
);

for(const data of loginData){
    test('TC-01 login to application',  async ({page}) =>{
        const{url,username, password} = data;
        await page.goto(url);
        await page.getByPlaceholder("Username").fill(username);
        await page.getByPlaceholder("Password").fill(password);
        await page.locator("#login-button").click();

    });
}