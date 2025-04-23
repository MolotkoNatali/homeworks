import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration
 * More on configuration options at: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './tests/e2e',
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html'], ['allure-playwright']],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://practice.expandtesting.com',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        headless: process.env.HEADLESS ? true : false,

        // Artifacts
        screenshot: 'on',
        video: 'on'
        // storageState: 'browser-context.json'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'practice.expandtesting.com',
            use: {
                ...devices['Desktop Chrome']
            },
            testMatch: '**/*.spec.ts'
        }

        // More projects for other browsers can be added here
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] }
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['iPhone SE'] }
        // }
    ]
});
