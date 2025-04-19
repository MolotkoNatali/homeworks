import { Locator, Page } from '@playwright/test';
import { waitForElement } from 'src/helpers/expect';

export class RozetkaSearchElements {
    public constructor(private page: Page) {}

    public get searchInput(): Locator {
        return this.page.locator('input.search-form__input');
    }

    public get searchButton(): Locator {
        return this.page.locator('button.search-form__submit');
    }

    public async searchProduct(query: string): Promise<void> {
        await this.page.waitForLoadState('load', { timeout: 15000 });
        await this.page.waitForTimeout(10000);
        await waitForElement(this.searchInput);
        await waitForElement(this.searchButton);
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }
}
