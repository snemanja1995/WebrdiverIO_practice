import { Given, When, Then } from '@wdio/cucumber-framework';

import LockedOutUser from '../pageobjects/lockedout.user.js';
import ErrorMessage from '../pageobjects/lockedout.assert.js'

Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters invalid username and valid password$/, async () => {
    await LockedOutUser.enterUsernameandPassword();
});

When(/^Clicks login button$/, async () => {
    await LockedOutUser.clickLoginButton();
});

Then(/^User is not logged in$/, async () => {
    await ErrorMessage.getErrorMessage();
    await browser.pause(2000);
});
