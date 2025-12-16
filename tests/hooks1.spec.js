import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('verify the regression suite ', () => {

test.beforeAll( async () => {
   console.log("****all are visible****");
});

test.beforeEach( async ({page}) => {
  await page.goto("https://prople.pro/hr-software#/login");
  //await page.getByRole('textbox', { name: 'john@company.com' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).fill('praveen.m@spearsoftech.com');
 // await page.getByText('Password', { exact: true }).click();
  //await page.getByRole('textbox', { name: '••••••••' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).fill('Vihansh77**');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('Verify Dashboard page navigation', async ({ page }) => {
await page.getByRole('link', { name: 'Dashboard' }).isVisible();
});

test('verify Leave Request page navigation', async ({ page }) => {
//await page.getByRole('link', { name: 'Leave Requests' }).click();
await page.getByRole('heading', { name: 'My Leaves' }).isVisible();

});

test('verify Finance Page navication', async ({ page }) => {
//await page.getByRole('link', { name: 'Finance' }).click();
await page.getByRole('heading', { name: 'My Finance' }).isVisible();
});


test.afterEach( async ({page}) => {
 
});

test.afterAll( async () => {
  console.log("**** deleting all cookies ****");        

});

});
