class LockedOutUser {
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }


    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("locked_out_user");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
}

export default new LockedOutUser();