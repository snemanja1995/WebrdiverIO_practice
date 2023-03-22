class OrderProduct {
  get usernameField() {
    return $("//input[@id='user-name']");
  }
  get passwordField() {
    return $("//input[@id='password']");
  }
  get submitButton() {
    return $('input[type="submit"]');
  }
  get orderButton1() {
    return $("//button[@id='add-to-cart-sauce-labs-backpack']");
  }
  get orderButton2() {
    return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
  }
  get orderButton3() {
    return $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
  }
  get cartIcon() {
    return $("//a[@class='shopping_cart_link']");
  }
  get checkoutButton() {
    return $("//button[@id='checkout']");
  }
  get firstnameField() {
    return $("//input[@id='first-name']");
  }
  get lasttnameField() {
    return $("//input[@id='last-name']");
  }
  get postalcodeField() {
    return $("//input[@id='postal-code']");
  }
  get continueButton() {
    return $("//input[@id='continue']");
  }
  get finishButton() {
    return $("//button[@id='finish']");
  }
  get textMessage() {
    return $("//h2[text()='Thank you for your order!']");
  }

  async enterUsernameandPassword(username,password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
  }
  async clickLoginButton() {
    await this.submitButton.click();
  }
  async clickOrderButton1() {
    await this.orderButton1.click();
  }
  async clickOrderButton2() {
    await this.orderButton2.click();
  }
  async clickOrderButton3() {
    await this.orderButton3.click();
  }
  async clickCartIcon() {
    await this.cartIcon.click();
  }
  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
  async enterFirstNameandLastNameandPostalCode(firstName, lastName, number) {
    await this.firstnameField.setValue(firstName);
    await this.lasttnameField.setValue(lastName);
    await this.postalcodeField.setValue(number);
  }
  async clickContinueButton() {
    await this.continueButton.click();
  }
  async clickFinishButton() {
    await this.finishButton.click();
  }
  async getTextMessage() {
    await this.textMessage.getText();
  }
}
export default new OrderProduct();
