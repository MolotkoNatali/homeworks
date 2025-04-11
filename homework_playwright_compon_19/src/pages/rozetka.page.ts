import { Page, Locator } from '@playwright/test';
import { RozetkaSearchElements } from 'src/elements/rozetka-search-elements';
import { RozetkaProductListElements } from 'src/elements/rozetka-product-list-elements';
import { RozetkaCategoryElements } from 'src/elements/rozetka-category-elements';
import { RozetkaCartElements } from 'src/elements/rozetka-cart-elements';
import { waitForElement } from 'src/helpers/expect';

export class RozetkaPage {
    private searchElements: RozetkaSearchElements;
    private productListElements: RozetkaProductListElements;
    private categoryElements: RozetkaCategoryElements;
    private cartElements: RozetkaCartElements;

    public constructor(private readonly page: Page) {
        this.searchElements = new RozetkaSearchElements(page);
        this.productListElements = new RozetkaProductListElements(page);
        this.categoryElements = new RozetkaCategoryElements(page);
        this.cartElements = new RozetkaCartElements(page);
    }

    private get widgetListLocator(): Locator {
        return this.page.locator('rz-widget-list:nth-child(3)');
    }

    private get searchInput(): Locator {
        return this.searchElements.searchInput;
    }

    private get productListLocator(): Locator {
        return this.productListElements.productListLocator;
    }

    public get cartBadge(): Locator {
        return this.cartElements.cartBadge;
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/');
        await waitForElement(this.searchInput);
        await waitForElement(this.page.locator('header'));
    }

    public async searchProduct(query: string): Promise<void> {
        await this.searchElements.searchProduct(query);
    }

    public async waitForSearchResults(): Promise<void> {
        await this.productListElements.waitForProductList();
    }

    public async goToFirstCategory(): Promise<void> {
        await this.categoryElements.goToFirstCategory();
    }

    public async waitForCategoryProducts(): Promise<void> {
        await this.widgetListLocator.waitFor({ state: 'visible', timeout: 15000 });
    }

    public async waitForProductListVisibility(): Promise<void> {
        await this.widgetListLocator.waitFor({ state: 'visible', timeout: 15000 });
    }

    public async isProductListVisible(): Promise<boolean> {
        const productListSelector = 'rz-widget-list:nth-child(3)';
        const productListLocator = this.page.locator(productListSelector);
        await productListLocator.waitFor({ state: 'visible', timeout: 15000 });
        return await productListLocator.isVisible();
    }

    public async addToCartByIndex(index: number): Promise<void> {
        const products = this.page.locator('rz-product-tile');
        const product = products.nth(index);
        const addToCartButton = await product.locator('button.buy-button');
        await waitForElement(addToCartButton);
        await addToCartButton.click();
    }

    public async waitForCartUpdate(): Promise<void> {
        await this.cartElements.waitForCartUpdate();
    }

    public get productList(): Locator {
        return this.productListLocator;
    }

    public get cart(): Locator {
        return this.cartBadge;
    }
}
