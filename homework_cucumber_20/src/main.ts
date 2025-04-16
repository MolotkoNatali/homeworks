import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './worlds/world';
import { browserHooks } from 'src/hooks/hooks';

setDefaultTimeout(60 * 1000);
setWorldConstructor(CustomWorld);
browserHooks();
