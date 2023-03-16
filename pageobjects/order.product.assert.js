import {strict as assert} from 'node:assert';

class OrderPage{

    get itemName1() {    
        return $("//div/a[@id='item_4_title_link']");
    }
    get itemName2() {
        return $("//div/a[@id='item_0_title_link']");
    }
    get itemName3() {
        return $("//div/a[@id='item_1_title_link']");
    }

    async orderItemsName() {
        assert.strictEqual(await this.itemName1.getText(), "Sauce Labs Backpack");
        assert.strictEqual(await this.itemName2.getText(), "Sauce Labs Bike Light")
        assert.strictEqual(await this.itemName3.getText(), "Sauce Labs Bolt T-Shirt");
        
    }

}
export default new OrderPage();