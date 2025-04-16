import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        screenshot: 'on',
        video: 'on',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome']
    }
});
