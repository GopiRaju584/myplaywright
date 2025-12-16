import{test,expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', {name:"Username"}).fill("Praveentest");
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox',{name:"Password"}).fill("hello@123");
  await page.locator('span').nth(4).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.pause();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).uncheck();
  await page.getByRole('button', { name: 'Sign in' }).click();
  

});