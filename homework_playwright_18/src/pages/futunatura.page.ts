import { Locator, Page } from '@playwright/test';

export class FutunaturaPage {
    private page: Page;

    private searchInput: Locator;
    private addToCartButton: Locator;
    private firstProduct: Locator;
    private banner: Locator;
    private bestSellerSection: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('input[type="search"][name="search"]');
        this.addToCartButton = page.locator('#button-cart');
        this.firstProduct = page.locator('.product-item:first-child');
        this.banner = page.locator('img[src*="banner"]');
        this.bestSellerSection = page.locator('#embla-best-seller');
    }

    public getSearchInput(): Locator {
        return this.searchInput;
    }

    public getAddToCartButton(): Locator {
        return this.addToCartButton;
    }

    public async getFirstProduct(): Promise<Locator> {
        const firstProductSelector = '#main1 > div > div:nth-child(1)';
        const firstProduct = this.page.locator(firstProductSelector);
        await firstProduct.waitFor({ state: 'visible' });
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
    }

    public async searchForTerm(searchTerm: string): Promise<void> {
        const searchField = this.getSearchInput();
        await searchField.fill(searchTerm);
        await searchField.press('Enter');
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
