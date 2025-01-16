# Error Handling

## How to use the error handler

Follow these [PR comments](https://github.com/SwitchbackTech/compass/pull/212/files)

Rather than throwing a new `BaseError`, create an error in `error.constants` for this scenario.

Then throw it using the `error()` function like so:

```typescript
throw error(AuthError.YourNewAuthError, "Access token not retrieved");
```

The `description` property in the error provides more info about the error.

The second arg in the `error()` is meant to explain the result of the error not happening, which the client can use to determine next steps.

Try not to include too many implementation details in the result string, like "Probably needs a new refresh token to obtain a new access token." We don't want to send unnecessary info to the client. Instead, you can include that info in a debug log.

This'll make it easier to test, typecheck, and prevent bugs
