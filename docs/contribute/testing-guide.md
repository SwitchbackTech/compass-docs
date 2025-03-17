# Testing Guide

This doc explains how to write tests during development. For information on running tests, see the [Testing Guide](../guides/test.md).

## Write tests. Mostly unit. ~~Some integration.~~

Tests should be

1. **Understandable**: It should be relatively easy for a newcomer to read the tests, understand their intent, make changes, and write similar tests
2. **Focused**: The view should be decoupled/abstracted from the test as much as possible. The tests should work whether we're snapping on a 7 day week, a 4 day week, or a day view. Minimal changes and setup are acceptable, but out tests and implementation shouldn't be tightly connected to our current view.
3. **Mostly unit**: Since our UI is going to change frequently, let's just focus on the logic. No need to write interaction or e2e tests for these. Those'll come in a separate effort.
4. ~~**Some integration**: If you're testing a feature that spans multiple units, it's okay to write an integration test. But try to keep it to a minimum. We want to keep our tests fast and focused.~~
   > Integration tests aren't a priority currently.

## Test Manually

This is an important part of the PR process. We manually test every PR  in a local environment, staging environment, and the production environment. If we find bugs during this manual testing, we'll have to create new bug issues, ask you for revisions, or reject the PR entirely.

Just because the automated tests are passing does not mean the PR is ready to be merged. 

Give your PR the highest likelihood of being accepted by thoroughly testing it and looking for bugs.

Because the app is so connected to one view, it's important to test all of its capabilities to ensure that your change didn't break anything else.
If you updated how an event is dragged, for example, make sure to test drag and dropping as well. If you changed how timed events are displayed, also test that all-day events and sidebar events still work.