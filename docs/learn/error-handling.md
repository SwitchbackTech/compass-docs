# Error Handling

## Error Handling Pattern

Compass uses a centralized error handling system to ensure consistent error responses and easier debugging.

## How to Use the Error Handler

Rather than throwing a new `BaseError` directly, you should:

1. **Define the error in `error.constants`** for your scenario (if it doesn't already exist)
2. **Throw it using the `error()` function** with the appropriate error constant and description

### Example

```typescript
import { error } from "./error.utils";
import { AuthError } from "./error.constants";

// Throw an error
throw error(AuthError.YourNewAuthError, "Access token not retrieved");
```

## Error Function Parameters

The `error()` function takes two parameters:

1. **Error constant**: The error type from `error.constants` (e.g., `AuthError.YourNewAuthError`)
2. **Description**: A message explaining what went wrong or what the result would be if the error didn't occur

The `description` property in the error provides more information about the error that can be used by the client to determine next steps.

## Best Practices

- **Keep descriptions user-friendly**: Don't include too many implementation details in the result string
- **Use debug logs for technical details**: Instead of "Probably needs a new refresh token to obtain a new access token" in the error message, include that information in a debug log
- **Be specific but concise**: The description should help the client understand what happened and what they might need to do
- **Follow existing patterns**: Look at existing error constants to understand the naming and organization

## Benefits

This approach makes it easier to:

- **Test**: Errors are typed and predictable
- **Typecheck**: TypeScript can catch error handling issues
- **Prevent bugs**: Centralized error handling reduces inconsistencies
- **Debug**: All errors follow the same structure

For more details on the implementation, see [this PR discussion](https://github.com/SwitchbackTech/compass/pull/212/files).
