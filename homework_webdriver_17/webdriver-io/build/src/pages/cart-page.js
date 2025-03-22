"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartPage {
    get cartButton() {
        return $('rz-header-cart .header-cart__button .badge');
    }
    get firstProductCartButton() {
        return $('button.buy-button:first-child');
    }
    open() {
        browser.url('/');
    }
    addFirstProductToCart() {
        this.firstProductCartButton.click();
    }
    verifyProductAddedToCart() {
        this.cartButton.waitForExist();
        this.cartButton.getText().should.not.equal('0');
    }
}
exports.default = new CartPage();
