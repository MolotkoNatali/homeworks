import { $, $$, browser } from '@wdio/globals';

export class RozetkaPage {
    private get searchInput(): WebdriverIO.Element {
        return $('input.search-form__input');
    }

    private get searchButton(): WebdriverIO.Element {
        return $('button.search-form__submit');
    }

    public get productList(): WebdriverIO.Element[] {
        return $$('div.goods-tile');
    }

    private get categoryList(): WebdriverIO.Element[] {
        return $$('ul.sidebar-theme li');
    }

    public get cartBadge(): WebdriverIO.Element {
        return $('rz-header-cart .header-cart__button .badge');
    }

    public async goTo(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');
        await this.searchInput.waitForExist({ timeout: 15000 });
        await this.searchInput.waitForDisplayed({ timeout: 15000 });

        const header = await $('header');
        await header.waitForExist({ timeout: 15000 });
        await header.waitForDisplayed({ timeout: 15000 });
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

    public async getProductsCount(): Promise<number> {
        const categoryProducts = await $$('li.portal-grid__cell');
        return categoryProducts.length;
    }

    public async addToCartByIndex(index: number): Promise<void> {
        await browser.waitUntil(async () => {
            const products = await $$('rz-product-tile[_ngcontent-rz-client-c632725229]');
            return products.length > 0;
        }, { timeout: 15000, timeoutMsg: 'No products found on the page.' });

        const products = await $$('rz-product-tile[_ngcontent-rz-client-c632725229]');
        const product = products[index];
        if (!product) {
            throw new Error(`Product at index ${index} does not exist.`);
        }

        const addToCartButton = await product.$('button.buy-button');
        await addToCartButton.waitForExist({ timeout: 15000 });
        await addToCartButton.click();
    }

    public async waitForCartUpdate(): Promise<void> {
        await this.cartBadge.waitForExist({ timeout: 10000 });
    }
}
