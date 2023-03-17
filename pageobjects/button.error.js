import { strict as assert } from 'node:assert';

class ErrorButton {

    get addCartButtonError() {
        return$("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
  
    }
    async addCartButtonError() {
        assert.strictEqual(await this.addCartButtonError(), false);
    }
}

export default new ErrorButton();