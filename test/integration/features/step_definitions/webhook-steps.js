import {When} from 'cucumber';

When(/^the (.+) webhook is received$/, async function (action) {
  await this.app.receive({
    name: action,
    payload: {}
  });
});
