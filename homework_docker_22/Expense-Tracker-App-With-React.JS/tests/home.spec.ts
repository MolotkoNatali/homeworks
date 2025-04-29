import { expect } from 'chai';
import { chromium, Browser, Page } from 'playwright';
import { HomePage } from './pages/home-page';
import { after, before, beforeEach, describe, it } from 'node:test';

describe('Expense Tracker UI - Mocha Suite', function () {
  let browser: Browser;
  let page: Page;
  let home: HomePage;

  before(async () => {
    browser = await chromium.launch();
  });

  beforeEach(async () => {
    const context = await browser.newContext();
    page = await context.newPage();
    home = new HomePage(page);
    await home.goto();
  });

  after(async () => {
    await browser.close();
  });

  it('1. Page loads with correct title', async () => {
    const title = await page.title();
    expect(title).to.match(home.title);
  });

  it('2. Add income transaction updates list and balance', async () => {
    await home.addTransaction('Salary', '5000');
    const transaction = home.transactionItemByText('Salary');
    expect(await transaction.isVisible()).to.be.true;
    const balance = await home.getBalance();
    expect(balance ?? '').to.include('5000');
  });

  it('3. Add expense transaction updates list and balance', async () => {
    await home.addTransaction('Groceries', '-150');
    const transaction = home.transactionItemByText('Groceries');
    expect(await transaction.isVisible()).to.be.true;
    const balance = await home.getBalance();
    expect(balance ?? '').to.include('-');
  });

  it('4. Income and expense values are calculated correctly', async () => {
    await home.addTransaction('Freelance', '300');
    await home.addTransaction('Rent', '-100');
    const income = await home.getIncome();
    const expense = await home.getExpense();
    expect(income ?? '').to.equal('300.00');
    expect(expense ?? '').to.equal('100.00');
  });

  it('5. Transaction is listed and can be deleted', async () => {
    await home.addTransaction('Temp Item', '50');
    const item = home.transactionItemByText('Temp Item');
    expect(await item.isVisible()).to.be.true;
    await item.locator('button.delete-btn').click();
    expect(await item.isVisible()).to.be.false;
  });

  it('6. Form does not submit with empty fields', async () => {
    await home.addButton.click();
    const isValid = await home.isFormValid();
    expect(isValid).to.be.false;
  });
});
