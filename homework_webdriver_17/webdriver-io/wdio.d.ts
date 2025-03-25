declare module '@wdio/globals' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export function $(selector: string): any; // Allow `$` to return `any`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export function $$(selector: string): any; // Allow `$$` to return `any`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const browser: any; // Allow `browser` to be of type `any`
}
