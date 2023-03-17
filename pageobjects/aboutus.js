class AboutUs {

    get usernameField() {
        return $("//input[@id='user-name']");
    }
    get passwordField() {
        return $("//input[@id='password']");
    }
    get loginButton() {
        return $("//input[@id='login-button']");
    }
    get burgerButton() {
        return $("//button[@id='react-burger-menu-btn']");
    }
    get aboutUsOption() {
        return $("//a[@id='about_sidebar_link']");
    }
    async userNameAndPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("secret_sauce");
    }
    async clicksLoginButton() {
        await this.loginButton.click();
    }
    async clicksBurgerButton() {
        await this.burgerButton.click();
    }
    async clicksAboutUsOption() {
        await this.aboutUsOption.click();
    }
}
export default new AboutUs();