import {test,expect} from'@playwright/test';

const fs = require('fs');
const XLSX = require('xlsx');

function readExcelToJSON(filepath, sheetName= 'Sheet1'){

    const workbook = XLSX.readFile(filepath);
    const workSheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(workSheet);
    return jsonData;
}

test('Login to application',async ({page}) =>{
    const exceldata = readExcelToJSON('C:\\PLAYWRIGHT AUTOMATION\\myplaywright\\testdata\\TestData.xlsx', 'Sheet1');

    for(const row of exceldata){
        const URL = row['URL'];
        const username = row['username'];
        const password = row['password'];
        await page.goto(URL);
        await page.getByPlaceholder('john@company.com').fill(username);
        await page.getByPlaceholder('••••••••').fill(password);
        await page.getByRole('button',{name:"Sign In"}).click();
       // console.log(`username: ${username}, password: ${password}, URL: ${URL}`);
    }

});

