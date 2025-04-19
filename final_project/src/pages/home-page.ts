import { Page, Locator } from '@playwright/test';
import { RozetkaSearchElements } from 'src/elements/rozetka-search-elements';
import { RozetkaCategoryElements } from 'src/elements/rozetka-category-elements';
import { RozetkaCartElements } from 'src/elements/rozetka-cart-elements';
import { waitForElement } from 'src/helpers/expect';

export class HomePage {
    private searchElements: RozetkaSearchElements;
    private categoryElements: RozetkaCategoryElements;
    private cartElements: RozetkaCartElements;

    public constructor(private readonly page: Page) {
        this.searchElements = new RozetkaSearchElements(page);
        this.categoryElements = new RozetkaCategoryElements(page);
        this.cartElements = new RozetkaCartElements(page);
    }

    private get searchInput(): Locator {
        return this.searchElements.searchInput;
    }

    private get cartBadge(): Locator {
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

    public async goToFirstCategory(): Promise<void> {
        await this.categoryElements.goToFirstCategory();
    }

    public async addFirstProductToCart(): Promise<void> {
        const product = this.page.locator('rz-product-tile').first();
        const addToCartButton = product.locator('button.buy-button');
        await waitForElement(addToCartButton);
        await addToCartButton.click();
    }

    public async waitForCartUpdate(): Promise<void> {
        await this.cartElements.waitForCartUpdate();
    }

    public async isCartBadgeVisible(): Promise<boolean> {
        await this.cartBadge.waitFor({ state: 'visible', timeout: 15000 });
        return await this.cartBadge.isVisible();
    }
}
