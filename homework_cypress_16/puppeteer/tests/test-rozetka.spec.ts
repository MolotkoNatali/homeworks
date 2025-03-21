import { expect } from 'chai';
import puppeteer, { Browser, Page } from 'puppeteer';
import { RZTKPage } from 'src/pom/rozetka.page';

describe('Rozetka Category Navigation and Product Detail Tests', function () {
    let browser: Browser;
    let page: Page;
    let rzPage: RZTKPage;

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 800}});
        page = await browser.newPage();
        rzPage = new RZTKPage(page);
    });

    after(async () => {
        await browser.close();
    });

    describe('Case 2: Перехід до категорії товарів', function () {
        it('should navigate to the first category and display products', async function () {
            await rzPage.goTo();

            const categoryListSelector = 'ul.sidebar-theme';
            await page.waitForSelector(categoryListSelector);

            const firstCategorySelector = 'ul.sidebar-theme > li:first-child';
            await page.click(firstCategorySelector);

            const productGridSelector = 'li.portal-grid__cell';
            await page.waitForSelector(productGridSelector);

            const products = await page.$$(productGridSelector);
            expect(products.length).to.be.greaterThan(0);
        });
    });

    describe('Case 4: Перехід до детальної інформації товару', function () {
        it('should navigate to the product detail page', async function () {
            await rzPage.goTo();

            const firstProductSelector = 'rz-product-tile.item:first-child';
            await page.waitForSelector(firstProductSelector);

            const productDescriptionSelector = 'a.title.black-link.text-base';
            await page.click(productDescriptionSelector);

            const productCharacteristicsSelector = 'rz-product-characteristics-list';
            await page.waitForSelector(productCharacteristicsSelector);

            const productDetails = await page.$(productCharacteristicsSelector);
            expect(productDetails).to.not.be.null;
        });
    });
});
