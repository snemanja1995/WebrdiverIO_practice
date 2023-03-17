import { strict as assert } from 'node:assert'

class HomePage {
    get BurgerButton() {
        return $("//button[@id='react-burger-menu-btn']");
    }
    get BurgerButtonText() {
        return $("//div[@class='bm-menu']");
    }
    get MenuList() {
        return $("//div[@class='css-19diydd']");
    }

    get MainText() {
        return $("//div[@class='MuiBox-root css-mntjpt']");
    }
    async burgerElements() {
        assert.strictEqual(await this.BurgerButton.isDisplayed(), true);
        assert.strictEqual(await this.BurgerButtonText.isDisplayed(), true);
    }
    async aboutUsElements() {
        assert.strictEqual(await this.MenuList.isDisplayed(), true);
        assert.strictEqual(await this.MainText.isDisplayed(), true);
    }


}
export default new HomePage();