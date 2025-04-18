import { Page, Locator } from '@playwright/test';
import { RozetkaProductListElements } from '../elements/rozetka-product-list-elements.js';

export class SearchResultsPage {
    private productListElements: RozetkaProductListElements;

    public constructor(private readonly page: Page) {
        this.productListElements = new RozetkaProductListElements(page);
    }

    private get widgetListLocator(): Locator {
        return this.page.locator('rz-widget-list:nth-child(3)');
    }

    public async waitForCategoryProducts(): Promise<void> {
        await this.widgetListLocator.waitFor({ state: 'visible', timeout: 20000 });
    }

    public get productListLocator(): Locator {
        return this.productListElements.productListLocator;
    }

    public async waitForProductListVisibility(): Promise<void> {
        await this.widgetListLocator.waitFor({ state: 'visible', timeout: 20000 });
    }

    public async isProductListVisible(): Promise<boolean> {
        const productListLocator = this.page.locator('rz-widget-list:nth-child(3)');
        await productListLocator.waitFor({ state: 'visible', timeout: 20000 });
        return await productListLocator.isVisible();
    }

    public async getFirstProductTile(): Promise<Locator> {
        const productTiles = this.productListLocator.locator('rz-product-tile');
        return productTiles.first();
    }

    public async isFirstProductVisible(): Promise<boolean> {
        const firstProductTile = await this.getFirstProductTile();
        return await firstProductTile.isVisible();
    }
}
