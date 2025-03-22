"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryPage {
    get categoryList() {
        return $('ul.sidebar-theme');
    }
    get firstCategory() {
        return $('ul.sidebar-theme > li:first-child');
    }
    get productTiles() {
        return $$('li.portal-grid__cell');
    }
    open() {
        browser.url('/');
    }
    navigateToFirstCategory() {
        this.firstCategory.click();
    }
}
exports.default = new CategoryPage();
