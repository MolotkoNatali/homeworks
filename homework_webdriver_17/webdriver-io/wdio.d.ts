declare module '@wdio/globals' {
    export function $(selector: string): ChainablePromiseElement<WebdriverIO.Element>;
    export function $$(selector: string): ChainablePromiseElement<WebdriverIO.Element>[];

    // Add the type declaration for the addToCartButton function (no implementation here)
    export function addToCartButton(selector: string): ChainablePromiseElement<WebdriverIO.Element>;

    export const browser: WebdriverIO.Browser;
}
