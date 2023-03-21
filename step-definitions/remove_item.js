import { Given,  When, Then } from "@wdio/cucumber-framework";
import RemoveItem from '../pageobjects/remove_item.js'
import RemoveItemFalse from '../pageobjects/remove_assert.js'


When(/^User add item to cart$/, async () => {
	await RemoveItem.clickAddToCart();
});

When(/^User open cart$/, async () => {
	await RemoveItem.clickCartOption();
});

When(/^User click button remove$/, async () => {
	await RemoveItem.clickRemoveButton();
});

Then(/^Item is removed$/, async () => {
	await RemoveItemFalse.noRemoveButton();
    await browser.pause(2000);
});
