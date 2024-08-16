# ChatsListSuccessfulRequest

JSON array of chat info

## Example Usage

```typescript
import { ChatsListSuccessfulRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: ChatsListSuccessfulRequest = {
    chats: [
        {
            characterId: 971945,
            chatId: 976460,
        },
    ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `chats`                                                | [operations.Chats](../../models/operations/chats.md)[] | :heavy_check_mark:                                     | N/A                                                    |