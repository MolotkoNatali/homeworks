import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext, chromium } from '@playwright/test';

export class CustomWorld extends World {
    private browser?: Browser;
    private context?: BrowserContext;
    private _page?: Page;
    public homePage: import('c:/Users/user/Desktop/sources/Homework/homework_cucumber_20/src/pages/home-page').HomePage;

    public constructor(options: IWorldOptions) {
        super(options);
    }

    /**
     * Launches the browser and initializes context + page.
     */
    public async openBrowser(headless = false): Promise<void> {
        this.browser = await chromium.launch({ headless });
        this.context = await this.browser.newContext();
        this._page = await this.context.newPage();
    }

    /**
     * Closes browser resources after test.
     */
    public async closeBrowser(): Promise<void> {
        try {
            await this._page?.close();
            await this.context?.close();
            await this.browser?.close();
        } catch (error) {
            console.error('Error while closing browser:', error);
        }
    }

    /**
     * Getter for the Playwright page instance.
     */
    public get page(): Page {
        if (!this._page) {
            throw new Error('Page is not initialized. Make sure to call openBrowser() before accessing page.');
        }
        return this._page;
    }
}
setWorldConstructor(CustomWorld);
