import { test, expect, Browser, Page } from '@playwright/test';
import { RozetkaPage } from '../src/pages/rozetka.page';

test.describe('Rozetka Website Tests', () => {
    let rozetkaPage: RozetkaPage;
    let page: Page;
    let browser: Browser;

    test.beforeEach(async ({ browser: testBrowser }) => {
        browser = testBrowser;
        page = await browser.newPage();
        await page.setViewportSize({ width: 1200, height: 800 });

        rozetkaPage = new RozetkaPage(page);
        await rozetkaPage.goTo();
    });

    test.afterAll(async () => {
        console.log('Deleting session...');
        await browser.close();
    });

    test('Case 1: Search for "iPhone" and verify list of items', async () => {
        const searchTerm = 'iPhone';
        await rozetkaPage.searchProduct(searchTerm);
        await rozetkaPage.waitForSearchResults();
        const productTiles = await rozetkaPage.productList;
        const isProductVisible = await productTiles.first().isVisible();
        expect(isProductVisible).toBe(true);
    });

    test('Case 2: Go to first category and verify product count', async () => {
        await rozetkaPage.goToFirstCategory();
        await rozetkaPage.waitForCategoryProducts();
        await rozetkaPage.waitForProductListVisibility();
        const isProductListVisible = await rozetkaPage.isProductListVisible();
        expect(isProductListVisible).toBe(true);
    });

    test('Case 3: Add product to cart', async () => {
        await rozetkaPage.addToCartByIndex(0);
        await rozetkaPage.waitForCartUpdate();
        await expect(rozetkaPage.cartBadge).toBeVisible();
    });
});
