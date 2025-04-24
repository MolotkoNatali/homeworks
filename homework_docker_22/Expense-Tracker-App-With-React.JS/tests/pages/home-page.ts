import { Page, Locator } from 'playwright/test';

export class HomePage {
  readonly page: Page;
  readonly title = /Expense Tracker/i;

  readonly descriptionInput: Locator;
  readonly amountInput: Locator;
  readonly addButton: Locator;
  readonly balanceText: Locator;
  readonly incomeText: Locator;
  readonly expenseText: Locator;
  readonly transactionList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.descriptionInput = page.locator('input#description');
    this.amountInput = page.locator('input#transactionamount');
    this.addButton = page.locator('button:has-text("Add Transaction")');
    this.balanceText = page.locator('#balance');
    this.incomeText = page.locator('.money.plus');
    this.expenseText = page.locator('.money.minus');
    this.transactionList = page.locator('ul.list');
  }

  private readonly baseUrl = 'http://localhost:3000';
  async goto() {
    await this.page.goto(this.baseUrl);
  }

  async addTransaction(desc: string, amount: string) {
    await this.descriptionInput.fill(desc);
    await this.amountInput.fill(amount);
    await this.addButton.click();
    await this.transactionItemByText(desc).waitFor();
  }

  transactionItemByText(text: string): Locator {
    return this.page.locator(`ul.list > li:has-text("${text}")`);
  }

  async isFormValid(): Promise<boolean> {
    return this.page.evaluate(() => {
      return document.querySelector('form')!.checkValidity();
    });
  }

  async getBalance(): Promise<string> {
    return (await this.balanceText.textContent()) ?? '';
  }

  async getIncome(): Promise<string> {
    return (await this.incomeText.textContent()) ?? '';
  }

  async getExpense(): Promise<string> {
    return (await this.expenseText.textContent()) ?? '';
  }
}
