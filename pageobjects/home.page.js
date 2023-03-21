import { strict as assert } from "node:assert";

class HomePage {
  get cartOption() {
    return $("//a[@class='shopping_cart_link']");
  }

  get productText() {
    return $("//span[@class='title']");
  }
  get removeButton() {
    return $("//button[@id='remove-sauce-labs-backpack']");
  }

  async checkIfUserIsLogIn() {
    assert.strictEqual(await this.cartOption.isDisplayed(), true);
    assert.strictEqual(await this.productText.getText(), "Products");
    assert.strictEqual(
      await browser.getUrl(),
      "https://www.saucedemo.com/inventory.html"
    );
  }
}

export default new HomePage();
