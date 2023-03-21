import userData from "../data/users_data.js"
class RemoveItem {
    
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }
    get addToCart () {
        return $("//button[@id='add-to-cart-sauce-labs-backpack']");
    }
    get cartOption () {
        return $("//a[@class='shopping_cart_link']");
    }
    get removeButton () {
        return $("//button[@id='remove-sauce-labs-backpack']");
    }


    async enterUsernameAndPassword(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async clickAddToCart() {
        await this.addToCart.click();
    }
    async clickCartOption() {
        await this.cartOption.click();
    }
    async clickRemoveButton() {
        await this.removeButton.click();

    }
}

export default new RemoveItem();