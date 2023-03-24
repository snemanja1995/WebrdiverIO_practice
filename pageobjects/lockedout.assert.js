import { strict as assert } from "node:assert";

class ErrorMessage {
  get errorMessageText() {
    return $("//h3[@data-test='error']");
  }

  async getErrorMessage() {
    assert.strictEqual(await this.errorMessageText.isDisplayed(), true);
    assert.strictEqual(
      await this.errorMessageText.getText(),
      "Epic sadface: Sorry, this user has been locked out."
    );
  }
}

export default new ErrorMessage();
