# MessagesGetManySuccessfulRequest

An array of messages that are part of the message history and an indicator of whether there are more messages left.

## Example Usage

```typescript
import { MessagesGetManySuccessfulRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: MessagesGetManySuccessfulRequest = {
    messages: [
        {
            role: "user",
            content: "<value>",
            timestamp: 918236,
            id: 64147,
        },
    ],
    endOfList: false,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `success`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.TimestampedMessageResponse](../../models/operations/timestampedmessageresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `endOfList`                                                                                      | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |