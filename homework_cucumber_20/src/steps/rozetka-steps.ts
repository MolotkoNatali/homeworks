import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/home-page.js';
import { SearchResultsPage } from '../pages/search-results-page.js';
import { CustomWorld } from '../worlds/world.js';

Given('I am on the Rozetka home page', { timeout: 20000 }, async function (this: CustomWorld) {
    await this.openBrowser();
    const homePage = new HomePage(this.page);
    await homePage.goTo();
    this.homePage = homePage;
});

When('I go to the first category', async function () {
    const homePage = new HomePage(this.page);
    await homePage.goToFirstCategory();
});

Then('I should see the list of category products', async function () {
    const searchResultsPage = new SearchResultsPage(this.page);
    await searchResultsPage.waitForCategoryProducts();
    const isVisible = await searchResultsPage.isProductListVisible();
    expect(isVisible).toBe(true);
});

When('I add the first product to the cart', async function () {
    const homePage = new HomePage(this.page);
    await homePage.addFirstProductToCart();
});

Then('I should see the cart badge visible', async function () {
    const homePage = new HomePage(this.page);
    const isVisible = await homePage.isCartBadgeVisible();
    expect(isVisible).toBe(true);
});
