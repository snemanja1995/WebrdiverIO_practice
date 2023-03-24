import userData from "../data/user_data.js"
class LoginPage {
    
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }


    async enterUsernameAndPassword(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
}

export default new LoginPage();