# DefaultBadStandingResponse

Given user is not allowed to use the API, usually because they don't have an active subscription to our services

## Example Usage

```typescript
import { DefaultBadStandingResponse } from "@aurora-interactive/chatbot-api-sdk/models/components";

let value: DefaultBadStandingResponse = {
    error: "Account associated with this access token is not subscribed to a paid plan",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `error`                                                                                                  | [components.DefaultBadStandingResponseError](../../models/components/defaultbadstandingresponseerror.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |