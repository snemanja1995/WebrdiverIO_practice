import { Given, When, Then } from "@wdio/cucumber-framework";

import AboutUs from '../pageobjects/aboutus.js'
import HomePage from '../pageobjects/homepage.js'


Given(/^User is on login page$/, async () => {
	await browser.url('/');
});

When(/^User enters username and password$/, async () => {
	await AboutUs.userNameAndPassword();
});

When(/^User clicks login button$/, async () => {
	await AboutUs.clicksLoginButton();
});

Then(/^User is on home page$/, async () => {
    await HomePage.burgerElements();
	
});

When(/^User clicks on burger menu$/, async () => {
	await AboutUs.clicksBurgerButton();
});

When(/^User clicks About Us option$/, async () => {
	await AboutUs.clicksAboutUsOption();
});

Then(/^User is on About Us page$/, async () => {
	await HomePage.aboutUsElements();
});
