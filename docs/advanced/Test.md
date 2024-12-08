# How to Test

## Automated Testing

Use these commands from the root directory to run the unit and integration tests locally:

```bash
yarn test           # runs all tests

yarn test:web       # runs web tests

yarn test:backend   # runs backend tests

yarn test:core      # runs core tests
```

The GitHub repo is also configured to run tests automatically after every push

## Manual Testing with Postman

I've created a Postman collection that I use to test the API.

However, I haven't cleaned it up for public use yet.

If this would be helpful, please let me know by creating a GitHub issue or upvoting the existing one.

![Postman preview](./assets/postman.png)

### Debug routes

These routes are exposed when in dev for debugging purposes. They are not available in production.

| Area                       | Request                                                    |
| -------------------------- | ---------------------------------------------------------- |
| Simulate Gcal notification | `curl -X POST http://localhost:3000/api/event-change-demo` |
