import {When} from 'cucumber';

When('the check_run webhook is received', async function () {
  await this.app.receive({
    name: 'check_run.created',
    payload: {}
  });
});
