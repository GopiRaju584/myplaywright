import{test,expect} from '@playwright/test';

const fs = require('fs');
const XLSX  = require('xlsx');

function readExcel1ToJSON(filename, sheetName='Sheet1'){

    const workbook = XLSX.readFile(filename);
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return jsonData;
}

test('login to application', async ({page}) =>{
    const exceldata = readExcel1ToJSON('C:\\PLAYWRIGHT AUTOMATION\\myplaywright\\Testdata\\facebook.xlsx', 'Sheet1');

    for(const row of exceldata){
        const URL = row['URL'];
        const username = row['username'];
        const password = row['password'];

        console.log(`username: ${username}, password: ${password}, URL: ${URL}`);
    }
});