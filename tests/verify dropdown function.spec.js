import { test,expect } from '@playwright/test';

test('verify dropdown function', async ({page}) =>{
try{

    let URL='https://rahulshettyacademy.com/AutomationPractice/';

    

    await page.goto(URL);
    

    const DropDown =await page.locator('select[id="dropdown-class-example"]');
    

    await DropDown.selectOption("Option1");
    


    await DropDown.selectOption("Option2");
    

    await DropDown.selectOption("Option3");
    

    await page.pause();
}catch(error){
    await console.log('an error occure:',error);
}
finally{
    await console.log('Next steps will be displayed');

    let name = "hello"
    await console.log(name);
}

});