import { Locator, Page } from '@playwright/test';

export class FutunaturaPage {
    private get searchInput(): Locator {
        return this.page.locator('input[type="search"][name="search"]');
    }

    private get addToCartButton(): Locator {
        return this.page.locator('#button-cart.add_btn');
    }

    private get firstProduct(): Locator {
        return this.page.locator('#main1 > div > div:nth-child(1)');
    }

    private get banner(): Locator {
        return this.page.locator('img[src*="banner"]');
    }

    private get bestSellerSection(): Locator {
        return this.page.locator('#embla-best-seller');
    }

    public constructor(private page: Page) {}

    public async waitForPageReady(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.page.waitForSelector('body');
    }

    public getSearchInput(): Locator {
        return this.searchInput;
    }

    public async getAddToCartButton(): Promise<Locator> {
        const addToCartButton = this.page.locator('#button-cart.add_btn');
        await addToCartButton.waitFor({ state: 'visible', timeout: 5000 });
        return addToCartButton;
    }

    public async waitForAddToCartButton(): Promise<void> {
        await this.addToCartButton.waitFor({ state: 'visible', timeout: 5000 });
    }

    public async getFirstProduct(): Promise<Locator> {
        const firstProduct = this.firstProduct;
        await firstProduct.waitFor({ state: 'visible', timeout: 5000 });
        return firstProduct;
    }

    public getBanner(): Locator {
        return this.banner;
    }

    public getBestSellerSection(): Locator {
        return this.bestSellerSection;
    }

    public getPage(): Page {
        return this.page;
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.futunatura.si/');
        await this.waitForPageReady();
    }

    public async searchForTerm(searchTerm: string): Promise<void> {
        const searchField = this.getSearchInput();
        await searchField.fill(searchTerm);
        await searchField.press('Enter');
    }

    public async expectSearchResultsToBeVisible(): Promise<void> {
        const itemsContainer = this.page.locator('div.row.gx-3');
        await itemsContainer.waitFor({ state: 'visible' });
    }

    public async addProductToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    public async selectCategory(): Promise<void> {
        await this.page.locator('.menu_wrapper ul > li:nth-child(3)').click();
    }

    public async clickBanner(): Promise<void> {
        await this.page.locator('div.main-banner-btn:has-text("Na ponudbo")').click();
    }
}
