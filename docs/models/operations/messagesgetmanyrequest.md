# MessagesGetManyRequest

## Example Usage

```typescript
import { MessagesGetManyRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: MessagesGetManyRequest = {
    chatId: 8,
    numMessages: 10,
    from: 150,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `chatId`                                                | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 8                                                       |
| `numMessages`                                           | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 10                                                      |
| `from`                                                  | *number*                                                | :heavy_minus_sign:                                      | Message ID to start results from (useful in pagination) | 150                                                     |