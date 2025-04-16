import { Locator, Page } from '@playwright/test';

export class RozetkaCategoryElements {
    private categoryList: Locator;

    public constructor(private page: Page) {
        this.categoryList = this.page.locator('ul.sidebar-theme li:first-child');
    }

    public async goToFirstCategory(): Promise<void> {
        const firstCategory = this.categoryList;
        await firstCategory.click();
    }
}
