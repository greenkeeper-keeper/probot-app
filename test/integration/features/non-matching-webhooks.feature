Feature: Non-matching webhooks

  @wip
  Scenario: incorrect webhook event
    Given the app is available
    And the PR was submitted by the greenkeeper integration
    When the issues.opened webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: incorrect webhook action
    Given the app is available
    And the PR was submitted by the greenkeeper integration
    When the pull_request.foo webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: non-greenkeeper user
    Given the app is available
    And the PR was submitted by a non-greenkeeper user
    When the webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: Non-success status event
    Given the app is available
    When the status.pending webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: Status event with no matching PRs
    Given the app is available
    And the commit is only on one, non-master branch
    And no open PRs exist for the commit
    When the status.success webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: Status event for commit on `master`
    Given the app is available
    And the commit is on the master branch
    When the status.success webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: Status event for commit in multiple branches
    Given the app is available
    And the commit is on multiple branches
    When the status.success webhook is received
    Then the webhook response indicates that the webhook will be skipped

  @wip
  Scenario: Success status-event for head commit of non-greenkeeper PR
    Given the app is available
    And the commit is only on one, non-master branch
    And an open PR exists for the commit
    But the PR was submitted by a non-greenkeeper user
    When the status.success webhook is received
    Then the webhook response indicates that the webhook will be skipped
