import { Given, When, Then } from "@wdio/cucumber-framework";

import BugButton from '../pageobjects/button.bug.js'

import HomePage from '../pageobjects/home.page.js'

import ErrorButton from '../pageobjects/button.error.js'


Given(/^User is on the login page$/, async () => {
	await browser.url('/');
});

When(/^User enters username and password$/, async () => {
	await BugButton.enterUsernameandPassword();
});


When(/^User clicks login button$/, async () => {
	await BugButton.clickLoginButton();
});

Then(/^User is on home page$/, async () => {
	await HomePage.checkIfUserIsLogIn()
});

When(/^User clicks on 'add to cart' button$/, async () => {
	await BugButton.addButton();
});

Then(/^Button does not responding$/, async () => {
	await ErrorButton.addCartButtonError();
});


