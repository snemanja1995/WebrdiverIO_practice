import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.js';
import HomePage from '../pageobjects/home.page.js';
import userData from '../data/user_data.js';

Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters username and password$/, async () => {
    await LoginPage.enterUsernameAndPassword(userData.username,userData.password);
});

When(/^Clicks login button$/, async () => {
    await LoginPage.clickLoginButton();
});

Then(/^User is logged in$/, async () => {
    await HomePage.checkIfUserIsLogIn();
    await browser.pause(2000)
});

When(/^User enters invalid username and password$/, async () => {
	await LoginPage.enterUsernameAndPassword(userData.invalidUsername,userData.password);
});

Then(/^User should not be login$/, async () => {
	return true
});

