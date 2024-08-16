# DefaultBadRequest

One or more request parameters are malformed or invalid

## Example Usage

```typescript
import { DefaultBadRequest } from "@aurora-interactive/chatbot-api-sdk/models/components";

let value: DefaultBadRequest = {
    error: "One or more API parameters are malformed. Please check your request and try again",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `error`                                                | [components.ErrorT](../../models/components/errort.md) | :heavy_check_mark:                                     | N/A                                                    |