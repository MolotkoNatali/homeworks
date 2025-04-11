import { Locator } from '@playwright/test';

export const waitForElement = async (locator: Locator, timeout = 15000): Promise<void> => {
    await locator.waitFor({ state: 'visible', timeout });
};
