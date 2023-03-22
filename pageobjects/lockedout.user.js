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


    async enterUsernameandPassword(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
}

export default new LockedOutUser();