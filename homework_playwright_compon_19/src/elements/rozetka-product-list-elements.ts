import { Locator, Page } from '@playwright/test';

export class RozetkaProductListElements {
    private productList: Locator;
    public constructor(private page: Page) {
        this.productList = this.page.locator('rz-category-goods');
    }

    public get productListLocator(): Locator {
        return this.productList;
    }

    public async waitForProductList(): Promise<void> {
        await this.productList.waitFor({ state: 'visible' });
    }
}
