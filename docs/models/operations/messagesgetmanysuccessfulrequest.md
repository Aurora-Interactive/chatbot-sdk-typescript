# MessagesGetManySuccessfulRequest

An array of messages that are part of the message history and an indicator of whether there are more messages left.

## Example Usage

```typescript
import { MessagesGetManySuccessfulRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: MessagesGetManySuccessfulRequest = {
    messages: [
        {
            role: "assistant",
            content: "<value>",
            timestamp: 565189,
            id: 566602,
        },
    ],
    endOfList: false,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                      | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `messages`                                                                                                                     | [operations.MessagesGetManyTimestampedMessageResponse](../../models/operations/messagesgetmanytimestampedmessageresponse.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `endOfList`                                                                                                                    | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |