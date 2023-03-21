import { strict as assert } from "node:assert";

class RemoveItemFalse {
  get removeButton() {
    return $("//button[@id='remove-sauce-labs-backpack']");
  }
  async noRemoveButton() {
    assert.strictEqual(await this.removeButton.isDisplayed(), false);
  }
}

export default new RemoveItemFalse();
