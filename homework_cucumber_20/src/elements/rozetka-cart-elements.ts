import { Locator, Page } from '@playwright/test';

export class RozetkaCartElements {
    public cartBadge: Locator;

    public constructor(private page: Page) {
        this.cartBadge = this.page.locator('rz-header-cart .header-cart__button .badge');
    }

    public async waitForCartUpdate(): Promise<void> {
        await this.cartBadge.waitFor({ state: 'visible' });
    }
}
