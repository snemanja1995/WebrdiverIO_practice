class BugButton {
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }
    get addButton () {
        return $("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    }


    async enterUsernameandPassword() {
        await this.usernameField.setValue("problem_user");
        await this.passwordField.setValue("secret_sauce");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async buttonNotResponding() {
        await this.addButton.click();
    }
}

export default new BugButton();