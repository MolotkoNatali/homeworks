import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Location of your test files
  testDir: './tests',
  
  testIgnore: ['**/*.test.js'],

  // Run tests in each file sequentially (set to true for parallel)
  fullyParallel: false,

  // Fail the test suite if `test.only` accidentally left in code (on CI)
  forbidOnly: !!process.env.CI,

  // Retries failed tests up to 2 times in CI
  retries: process.env.CI ? 2 : 0,

  // Use a single worker (test runner) in CI to avoid race conditions
  workers: process.env.CI ? 1 : undefined,

  // Reporters: generate both HTML and Allure reports
  reporter: [['html'], ['allure-playwright']],

  use: {
    /**
     * Base URL for all `page.goto()` calls
     * Now you can use `await page.goto('/')` instead of hardcoding URLs
     * 
     * Why localhost:3000? This is the default port for:
     * - Vite
     * - Create React App
     * - Next.js (in dev mode)
     * - Your app appears to run at this port
     */
    baseURL: 'http://localhost:3000',

    // Collect trace only when a test fails on first retry (debugging)
    trace: 'on-first-retry',

    // Set to `true` to run without UI
    headless: false,

    // Automatically capture screenshot on failure
    screenshot: 'on',

    // Record a video for every test
    video: 'on'
  },

  // Browser-specific configuration (currently only Chromium)
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      },
      testMatch: '**/*.spec.ts' // Match only *.spec.ts files in testDir
    }

    // To add more devices/browsers:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['iPhone SE'] }
    // },
  ],

  /**
   * Optional: Automatically start your dev server before tests
   * If your app needs to be running at localhost:3000, this ensures it is
   */
  // webServer: {
  //   command: 'npm run dev', // Adjust if you use yarn or another command
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI // Reuse server locally to speed up
  // }
});
