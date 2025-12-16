import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  //const tableName = await page.locator('table[name="courses"] tbody tr');
  //const rowNum = await tableName.count();
  //await console.log("Number of rows in the table: " + rowNum);
    const tableName = await page.locator('xpath = //table[@name="courses"]//tbody');
    //const rows =tableName.locator('tr');
    //const rowcount = await rows.count();
    //console.log(rowcount);

    //how to count columns
    //const firstRowColumncount = await rows.nth(0).locator('th').count();
    //console.log(`Number of columns in 1st row: ${firstRowColumncount}`);
    //for(let i=0; i<rowcount; i++){
     // const rowData = await rows.nth(i).locator('td,th');
     // const colCount = await rowData.count();
      //console.log('Number of column in rows ' + i + '  '+  colCount);
    //}

    for (let i=0; i<await tableName.count(); i++){
      const rowData = await tableName.nth(i).locator('td').allTextContents();
      console.log(rowData);
    }
  
});



