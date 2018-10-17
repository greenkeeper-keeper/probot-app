Feature: Checks

  @wip
  Scenario: check_run event received
    Given the app is available
    When the check_run webhook is received
    Then the PR is accepted
