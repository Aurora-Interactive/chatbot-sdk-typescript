# DefaultMessageQuotaExceeded

## Example Usage

```typescript
import { DefaultMessageQuotaExceeded } from "@aurora-interactive/chatbot-api-sdk/models/components";

let value: DefaultMessageQuotaExceeded = {
    error: "You have exceeded your message quota. To send more messages, please upgrade your plan or wait until your subscription renews.",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `error`                                                                                                    | [components.DefaultMessageQuotaExceededError](../../models/components/defaultmessagequotaexceedederror.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |