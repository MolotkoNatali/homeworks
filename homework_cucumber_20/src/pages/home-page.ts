import { Page, Locator } from '@playwright/test';
import { RozetkaCategoryElements } from '../elements/rozetka-category-elements.js';
import { RozetkaCartElements } from '../elements/rozetka-cart-elements.js';
import { waitForElement } from '../helpers/expect.js';

export class HomePage {
    private categoryElements: RozetkaCategoryElements;
    private cartElements: RozetkaCartElements;

    public constructor(private readonly page: Page) {
        this.categoryElements = new RozetkaCategoryElements(page);
        this.cartElements = new RozetkaCartElements(page);
    }

    private get cartBadge(): Locator {
        return this.cartElements.cartBadge;
    }

    public async open(): Promise<void> {
        await this.goTo();
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/', { timeout: 10000 });
        await waitForElement(this.page.locator('input.search-form__input'), 10000); // поле поиска
        await waitForElement(this.page.locator('header'), 10000); // хедер
    }

    public async goToFirstCategory(): Promise<void> {
        await this.categoryElements.goToFirstCategory();
    }

    public async addFirstProductToCart(): Promise<void> {
        const product = this.page.locator('rz-product-tile').first();
        await product.waitFor({ state: 'visible', timeout: 20000 }); // Увеличено с 10000 → 20000

        const addToCartButton = product.locator('button.buy-button');
        await addToCartButton.waitFor({ state: 'visible', timeout: 20000 }); // Увеличено с 10000 → 20000

        await addToCartButton.click();
    }

    public async waitForCartUpdate(): Promise<void> {
        await this.cartElements.waitForCartUpdate();
    }

    public async isCartBadgeVisible(): Promise<boolean> {
        await this.cartBadge.waitFor({ state: 'visible', timeout: 20000 }); // Увеличено с 15000 → 20000
        return await this.cartBadge.isVisible();
    }
}
