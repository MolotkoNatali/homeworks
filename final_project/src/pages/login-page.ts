import { Locator, Page } from '@playwright/test';
import { LoginElements } from 'src/elements/loging-elements';
import { waitForElement } from 'src/helpers/expect';

export class LoginPage {
    private loginElements: LoginElements;

    public constructor(private readonly page: Page) {
        this.loginElements = new LoginElements(page);
    }

    private get emailInput(): Locator {
        return this.loginElements.emailInput;
    }

    private get passwordInput(): Locator {
        return this.loginElements.passwordInput;
    }

    private get loginButton(): Locator {
        return this.loginElements.loginButton;
    }

    public async goToLoginPage(): Promise<void> {
        await this.page.goto('https://practice.expandtesting.com/notes/app/login');
    }

    public async login(email: string, password: string): Promise<void> {
        await waitForElement(this.emailInput);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
