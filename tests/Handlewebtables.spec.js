import{test,expect} from '@playwright/test';

test('has title',async ({page}) =>{
    await page.goto('https://cosmocode.io/automation-practice-webtable/');

    const tableName = await page.locator("xpath=//table[@id='countries']//tbody");

    for(let i=0; i<await tableName.count(); i++){
        const rowData = await tableName.nth(i).locator('td').allTextContents();
        console.log(rowData);
    }

    //for(let i=0; i<rowcount; i++){
        //const rowData = await rows.nth(i).locator('td,th');
       // const colCount = await rowData.Count();
       // console.lod('Nummber of columns in row' + i +  ' ' + colCount);
    //}
});