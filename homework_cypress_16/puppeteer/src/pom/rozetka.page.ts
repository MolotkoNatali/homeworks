import { Page } from 'puppeteer';

export class RZTKPage {
    private searchInputSelector = '[name="search"]';
    private searchButtonSelector = 'button[type="submit"]:has-text("Знайти")';
    private goodsSelector = '.goods-tile__title';

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/');
        await this.page.waitForSelector(this.searchInputSelector);
    }

    public async fillSearchInput(value: string): Promise<void> {
        await this.page.click(this.searchInputSelector, { clickCount: 3 });
        await this.page.type(this.searchInputSelector, value);
    }

    public async clickSearchButton(): Promise<void> {
        await this.page.click(this.searchButtonSelector);
    }

    public async waitForSearchResults(): Promise<void> {
        await this.page.waitForSelector(this.goodsSelector);
    }

    public async getSearchResults(): Promise<string[]> {
        const goods = await this.page.$$(this.goodsSelector);
        const goodsText: string[] = [];

        for (const good of goods) {
            const text = await good.evaluate((el) => el.textContent);
            goodsText.push(text ? text.trim() : '');
        }

        return goodsText;
    }
}
