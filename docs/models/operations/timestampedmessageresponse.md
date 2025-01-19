# TimestampedMessageResponse

## Example Usage

```typescript
import { TimestampedMessageResponse } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: TimestampedMessageResponse = {
    role: "user",
    content: "<value>",
    timestamp: 918236,
    id: 64147,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `role`                                                                           | [operations.MessagesGetManyRole](../../models/operations/messagesgetmanyrole.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `content`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `timestamp`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `id`                                                                             | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |