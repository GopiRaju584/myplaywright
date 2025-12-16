import{test, expect} from '@playwright/test'

test('verify the instagram login functionality', async({page}) =>{

    await page.goto('https://www.instagram.com/');

    const email = page.getByRole('Textbox',{name: 'Phone number, username, or email'});
    const password = page.getByRole('Textbox',{name:'Password'});
    const login = page.getByRole('button',{name:'Log in', exact:true});


    await (email).fill('gopi');
    await (password).fill('hello@123');
    await (login).click();
});