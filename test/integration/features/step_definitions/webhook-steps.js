import {Then, When} from 'cucumber';

When(/^the (.+) webhook is received$/, async function (action) {
  await this.app.receive({
    name: action,
    payload: {}
  });
});

Then(/^the webhook response indicates that the webhook will be skipped$/, async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
