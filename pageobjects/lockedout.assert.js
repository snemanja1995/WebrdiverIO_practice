import { strict as assert } from 'node:assert';

class ErrorMessage {

    get errorMessageText() {
        return $("//h3[@data-test='error']");
    }

    async getErrorMessage() {
        assert.strictEqual(await this.errorMessageText.isDisplayed(), true);
        assert.strictEqual(await this.errorMessageText.getText(),'Epic sadface: Username and password do not match any user in this service')
    }

}

export default new ErrorMessage();