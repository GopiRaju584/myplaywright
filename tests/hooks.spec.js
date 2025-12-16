import{test,expect} from '@playwright/test';

test('verify the regression suite', () =>{

test.beforeAll( async () =>{
    console.log("**** before all hook ****");
});

test.beforeEach(async ({page}) =>{
    console.log("**** before each hook ****");
});

test('TC01', async ({page}) =>{
    console.log("**** login ****");
    console.log("**** Add to cart ****");
    console.log("**** Logout ****");
});

test('TC02', async({page}) => {
    console.log("**** login ****");
    console.log("**** cancel order ****");
    console.log("**** logout ****");
});

test('TC03', async({page}) =>{
    console.log("**** login ****");
    console.log("**** payment ****");
    console.log("**** logout ****");
});

test.afterEach( async ({page}) =>{
    console.log("**** after each hook ****")
});

test.afterAll( async () =>{
    console.log("**** after all hook ****")
});



});