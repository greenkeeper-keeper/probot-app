import {Application} from 'probot';
import {After, Given} from 'cucumber';
import gkkApp from '../../../../src';

After(function () {
  this.app = null;
});

Given(/^the app is available$/, async function () {
  this.app = new Application();
  this.app.auth = () => Promise.resolve();
  this.app.load(gkkApp);
});
