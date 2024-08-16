# MessagesHistorySuccessfulRequest

JSON array of chat messages

## Example Usage

```typescript
import { MessagesHistorySuccessfulRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: MessagesHistorySuccessfulRequest = {
    messages: [
        {
            role: "system",
            content: "<value>",
            timestamp: 688661,
            id: 317983,
        },
    ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `success`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.TimestampedMessageResponse](../../models/operations/timestampedmessageresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |