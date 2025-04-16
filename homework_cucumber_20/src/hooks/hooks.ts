import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/world';

export function browserHooks(): void {
    Before(async function (this: CustomWorld) {
        await this.openBrowser();
    });

    After(async function (this: CustomWorld) {
        await this.closeBrowser();
    });
}
