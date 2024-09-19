# MessagesGetManyResponse

## Example Usage

```typescript
import { MessagesGetManyResponse } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: MessagesGetManyResponse = {
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

## Supported Types

### `operations.MessagesGetManySuccessfulRequest`

```typescript
const value: operations.MessagesGetManySuccessfulRequest = /* values here */
```

### `components.DefaultBadRequest`

```typescript
const value: components.DefaultBadRequest = /* values here */
```

### `components.DefaultUnauthorizedResponse`

```typescript
const value: components.DefaultUnauthorizedResponse = /* values here */
```

### `components.RateLimitReachedError`

```typescript
const value: components.RateLimitReachedError = /* values here */
```

