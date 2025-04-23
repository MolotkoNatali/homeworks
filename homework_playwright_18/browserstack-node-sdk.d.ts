declare module 'browserstack-node-sdk' {
    type ModifyPlaywrightFn = () => void;
    interface BrowserstackSDK {
        _modifyPlaywright: ModifyPlaywrightFn;
    }
    const sdk: BrowserstackSDK;
    export default sdk;
}
