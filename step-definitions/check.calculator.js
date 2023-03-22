import { Given, When, Then } from "@wdio/cucumber-framework";
import CalculatorCheck from "../pageobjects/calculator.check.js";
import CalculatorPrice from "../pageobjects/check.calculator.price.js";
import userData from '../data/user_data.js'

Given(/^User is on login page$/, async () => {
  await browser.url("/");
});

When(/^User enters username and password$/, async () => {
  await CalculatorCheck.enterUsernameAndPassword(userData.username, userData.password);
});

When(/^Clicks login button$/, async () => {
  await CalculatorCheck.clickLoginButton();
});

Then(/^User is logged in$/, async () => {
  await browser.getUrl();
});
When(/^User order products$/, async () => {
  await CalculatorCheck.clickOrderButtona();
  await CalculatorCheck.clickOrderButtonb();
  await CalculatorCheck.clickOrderButtonc();
});

When(/^User clicks on cart icon$/, async () => {
  await CalculatorCheck.clickCartIcon();
});

When(/^User clicks on checkout button$/, async () => {
  await CalculatorCheck.clickCheckoutButton();
});

When(/^User fill data user fields$/, async () => {
  await CalculatorCheck.enterFirstNameandLastNameandPostalCode();
});

When(/^User clicks on continue button$/, async () => {
  await CalculatorCheck.clickContinueButton();
});

Then(/^Calculator accuray should be correct$/, async () => {
  await CalculatorPrice.checkCalculatorAccuray();
});
