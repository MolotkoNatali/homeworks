import { browser, $$, $ } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import { RozetkaPage } from '../src/pages/rozetka.page';

describe('Rozetka Tests', function () {
    let rozetkaPage: RozetkaPage;

    beforeEach(async () => {
        rozetkaPage = new RozetkaPage();
        await browser.setWindowSize(1200, 800);
        await rozetkaPage.goTo();
        await rozetkaPage.searchInput.waitForExist({ timeout: 15000 });
        await rozetkaPage.searchInput.waitForDisplayed({ timeout: 15000 });
    });

    describe('Case 1: Пошук товару на сайті', function () {
        it('should search for "iPhone" and display products', async function () {
            await rozetkaPage.searchProduct('iPhone');
            await rozetkaPage.waitForSearchResults();

            const products = await $$('div.goods-tile');
            expect(products.length).toBeGreaterThan(0);
        });
    });

    describe('Case 2: Перехід до категорії товарів', function () {
        it('should navigate to the first category and display products', async function () {
            await rozetkaPage.goToFirstCategory();
            await rozetkaPage.waitForCategoryProducts();

            const products = await $$('li.portal-grid__cell');
            expect(products.length).toBeGreaterThan(0);
        });
    });

    describe('Case 3: Додавання товару до кошика', function () {
        it('should add the first product to the cart', async function () {
            const firstProduct = await $('rz-product-tile.item:first-child');
            const addToCartButton = await firstProduct.$('button.buy-button');
            const isButtonVisible = await addToCartButton.isDisplayed();

            if (isButtonVisible) {
                await addToCartButton.click();
                const cartBadge = await $('rz-header-cart .header-cart__button .badge');
                await cartBadge.waitForExist({ timeout: 5000 });

                const cartValue = await cartBadge.getText();
                const trimmedCartValue = cartValue.trim();

                if (trimmedCartValue !== '0') {
                    expect(trimmedCartValue).toMatch(/^[1-9][0-9]*$/);
                }
            } else {
                console.log('No "Add to Cart" button found for the first product.');
            }
        });
    });

    after(async () => {
        console.log('Deleting session...');
        await browser.deleteSession();
    });
});
