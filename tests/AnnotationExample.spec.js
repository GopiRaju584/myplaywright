const {test,expect} = require('@playwright/test');

test('TC-01 Excute only this test cases', async({page}) =>{
    console.log('test1')
});

test.skip('TC-02 Excute only this test cases', async({page}) =>{
    console.log('test2')
});

test.skip('TC-03 Excute only this test cases', async({page}) =>{
    console.log('test3')
    if(browserName === 'chromium'){
        test.skip(true);
    }
});

test.fail('TC-04 Excute only this test cases ', async({page}) =>{
    console.log('test4')
});