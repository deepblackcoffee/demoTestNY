# Demo Project

This is a demo of how we can use Playwright to write tests for a web app.

Test Web App: <https://todomvc.com/examples/react/dist/>

Test Cases in the `page-objects/todo-page.ts` file:

- Verify that the user can see the header
- Verify that the user can add a todo item
- Verify that the user can mark a todo item as completed
- Verify that the user can filter todo items by completed status

To run the tests, use the following commands:

```bash
yarn setup // Install the necessary libraries
yarn test // Run the tests
yarn test:headed // Run the tests in headed mode
```

Notes:

- Feel free to update any of the "expects" in the `page-objects/todo-page.ts` file to see how test fail and how the reports look.
- When adding test for a live application, we can either add the `tests` or `e2e` directory to the app repo (preferred) or keep them in a separate repo.
- We can upload the html test reports to an S3 bucket and have historical test results.
- Github Actions are configured to run tests on every pull request to the `main` branch.