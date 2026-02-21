import {test, expect} from '@playwright/test';

test('verifyflipkartfunction', async({page}) =>{
try{
    let URL='https://www.flipkart.com/';
    await page.goto(URL);
    
    const applogo = page.locator('[src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"]');
    const cart = page.getByText('Cart');
    const Login = page.getByRole('link',{name: 'Login',exact:true});
    const Becomeaseller = page.getByRole('link',{name:'Become a Seller'}).first(); 

    //await expect(applogo).toBeVisible();
    await expect(cart).toBeVisible();
    //await expect(Login).toBeVisible(); 
    await expect(Becomeaseller).toBeVisible();
}catch(errot){
    await console.error('an error occure:',error);
}
finally{
    await console.log('Next steps will be visible');

    let name = "world"
    await console.log(name);
}

    

    
});




 