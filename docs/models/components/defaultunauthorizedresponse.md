# DefaultUnauthorizedResponse

The given access token is invalid

## Example Usage

```typescript
import { DefaultUnauthorizedResponse } from "@aurora-interactive/chatbot-api-sdk/models/components";

let value: DefaultUnauthorizedResponse = {
    error: "Invalid username, password, or access token",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `error`                                                                                                    | [components.DefaultUnauthorizedResponseError](../../models/components/defaultunauthorizedresponseerror.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |