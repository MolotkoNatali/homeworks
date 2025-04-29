import { Locator, Page } from '@playwright/test';

export class LoginElements {
    public emailInput: Locator;
    public passwordInput: Locator;
    public loginButton: Locator;

    public constructor(page: Page) {
        this.emailInput = page.locator('input[data-testid="login-email"]');
        this.passwordInput = page.locator('input[data-testid="login-password"]');
        this.loginButton = page.locator('button[data-testid="login-submit"]');
    }
}
