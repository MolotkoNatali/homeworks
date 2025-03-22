import { $, $$, browser } from '@wdio/globals';

export class RozetkaPage {
    public searchInput = $('input.search-form__input');
    private searchButton = $('button.search-form__submit');
    private productList = $$('div.goods-tile');
    private categoryList = $$('ul.sidebar-theme li');
    public cartBadge = $('rz-header-cart .header-cart__button .badge');

    public async goTo(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');
    }

    public async searchProduct(query: string): Promise<void> {
        await this.searchInput.setValue(query);
        await this.searchButton.click();
    }

    public async waitForSearchResults(): Promise<void> {
        await this.productList[0].waitForExist({ timeout: 15000 });
    }

    public async goToFirstCategory(): Promise<void> {
        await this.categoryList[0].waitForExist({ timeout: 15000 });
        await this.categoryList[0].click();
    }

    public async waitForCategoryProducts(): Promise<void> {
        const categoryProducts = $$('li.portal-grid__cell');
        await categoryProducts[0].waitForExist({ timeout: 15000 });
    }

    public async addToCart(): Promise<void> {
        const firstProduct = await this.productList[0];
        await firstProduct.waitForExist({ timeout: 15000 });

        const addToCartButton = await firstProduct.$('button.buy-button');
        await addToCartButton.waitForExist({ timeout: 15000 });
        await addToCartButton.click();
    }

    public async waitForCartUpdate(): Promise<void> {
        await this.cartBadge.waitForExist({ timeout: 10000 });
    }
}
