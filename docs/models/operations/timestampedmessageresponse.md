# TimestampedMessageResponse

## Example Usage

```typescript
import { TimestampedMessageResponse } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: TimestampedMessageResponse = {
    role: "assistant",
    content: "<value>",
    timestamp: 317983,
    id: 880476,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `role`                                                                           | [operations.MessagesGetManyRole](../../models/operations/messagesgetmanyrole.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `content`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `timestamp`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `id`                                                                             | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |