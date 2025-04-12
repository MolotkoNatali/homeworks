import { test, expect, Browser, Page } from '@playwright/test';
import { HomePage } from 'src/pages/home-page';
import { SearchResultsPage } from 'src/pages/search-results-page';

test.describe('Rozetka Website Tests', () => {
    let page: Page;
    let browser: Browser;
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;

    test.beforeEach(async ({ browser: testBrowser }) => {
        browser = testBrowser;
        page = await browser.newPage();
        await page.setViewportSize({ width: 1200, height: 800 });

        homePage = new HomePage(page);
        searchResultsPage = new SearchResultsPage(page);

        await homePage.goTo();
    });

    test.afterAll(async () => {
        console.log('Deleting session...');
        await browser.close();
    });

    test('Case 1: Search for "iPhone" and verify list of items', async () => {
        const searchTerm = 'iPhone';

        await homePage.searchProduct(searchTerm);
        await searchResultsPage.waitForSearchResults();

        const productTiles = await searchResultsPage.productListLocator;
        const isProductVisible = await productTiles.first().isVisible();
        expect(isProductVisible).toBe(true);
    });

    test('Case 2: Go to first category and verify product list is visible', async () => {
        await homePage.goToFirstCategory();
        await searchResultsPage.waitForCategoryProducts();
        await searchResultsPage.waitForProductListVisibility();
        const isProductListVisible = await searchResultsPage.isProductListVisible();
        expect(isProductListVisible).toBe(true);
    });

    test('Case 3: Add first product on home page to cart', async () => {
        await homePage.addFirstProductToCart();
        const isCartVisible = await homePage.isCartBadgeVisible();
        expect(isCartVisible).toBe(true);
    });
});
