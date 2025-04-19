import { Locator, Page } from '@playwright/test';

export class RozetkaCategoryElements {
    private categoryList: Locator;

    public constructor(private page: Page) {
        this.categoryList = this.page.locator('ul.sidebar-theme li');
    }

    public async goToFirstCategory(): Promise<void> {
        const firstCategory = this.categoryList.first();
        await firstCategory.click();
    }
}
