import { expect, test } from '@playwright/test';
import { FutunaturaPage } from '../src/pages/futunatura.page';

test.describe('Futunatura Website Tests', () => {
    let futunaturaPage: FutunaturaPage;

    test.beforeEach(async ({ page }) => {
        futunaturaPage = new FutunaturaPage(page);
        await futunaturaPage.goTo();
    });

    test('Search for "kolagen" and verify list of items', async () => {
        const searchTerm = 'kolagen';
        const expectedItemsSelector = 'div.row.gx-3';
        await futunaturaPage.searchForTerm(searchTerm);
        const itemsContainer = futunaturaPage.getPage().locator(expectedItemsSelector);
        await expect(itemsContainer).toBeVisible();
    });

    test('Select product category and verify page content', async () => {
        await futunaturaPage.selectCategory();
        const bestSellerSection = futunaturaPage.getBestSellerSection();
        await expect(bestSellerSection).toBeVisible();

    });

    test('Click on a banner, select first product, and add to cart', async () => {
        await futunaturaPage.clickBanner();
        const firstProduct = await futunaturaPage.getFirstProduct();
        await firstProduct.click();

        const addToCartButton = await futunaturaPage.getAddToCartButton();
        await addToCartButton.waitFor({ state: 'visible', timeout: 5000 });
        await expect(addToCartButton).toBeVisible();
        await addToCartButton.click();

    });
});
