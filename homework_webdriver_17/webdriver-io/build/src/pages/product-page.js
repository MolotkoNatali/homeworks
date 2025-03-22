"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductPage {
    get firstProductLink() {
        return $('a.title.black-link.text-base');
    }
    get productDetails() {
        return $('rz-product-characteristics-list');
    }
    open() {
        browser.url('/');
    }
    navigateToProductDetail() {
        this.firstProductLink.click();
    }
    verifyProductDetailPage() {
        this.productDetails.waitForExist();
    }
}
exports.default = new ProductPage();
