# UsersQuotaSuccessfulRequest

User info

## Example Usage

```typescript
import { UsersQuotaSuccessfulRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: UsersQuotaSuccessfulRequest = {
    quotaUsed: 359508,
    quotaMax: 613064,
    ttsUsed: 437032,
    ttsMax: 902349,
    planName: "<value>",
    isChristy: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_minus_sign: | N/A                |
| `quotaUsed`        | *number*           | :heavy_check_mark: | N/A                |
| `quotaMax`         | *number*           | :heavy_check_mark: | N/A                |
| `ttsUsed`          | *number*           | :heavy_check_mark: | N/A                |
| `ttsMax`           | *number*           | :heavy_check_mark: | N/A                |
| `planName`         | *string*           | :heavy_check_mark: | N/A                |
| `isChristy`        | *boolean*          | :heavy_check_mark: | N/A                |