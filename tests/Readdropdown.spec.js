import{test,expect} from '@playwright/test'; 

test('handle dropdown using loops',async ({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

const dropdown = page.locator('#dropdown-class-example');

const options = await dropdown.locator("Option").allTextContents();

for(const listData of options){
    console.log(listData);
}
    
});

