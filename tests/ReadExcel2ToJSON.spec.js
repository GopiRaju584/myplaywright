import{test,expect} from '@playwright/test';

const fs = require('fs');
const XLSX = require('xlsx');

function readExcel2ToJSON(filename, sheetName = 'Sheet1'){

    const workbook = XLSX.readFile(filename);
    const worksheet = workbook.Sheets[sheetName];
    const jsondata = XLSX.utils.sheet_to_json(worksheet);
    return jsondata;
}

test('login with application', async ({page}) =>{
    const exceldata = readExcel2ToJSON('C:\\PLAYWRIGHT AUTOMATION\\myplaywright\\Testdata\\saucedemo.xlsx', 'Sheet1');

        for(const row of exceldata){
            const URL = row['URL'];
            const username = row['username'];
            const password = row['password'];
            await page.goto(URL);
            await page.getByPlaceholder("Username").fill(username);
            await page.getByPlaceholder("Password").fill(password);
            await page.locator('#login-button').click();

            //console.log(`username: ${username}, password: ${password}, URL: ${URL}`);

        }
});