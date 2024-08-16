# CharactersListRequest

## Example Usage

```typescript
import { CharactersListRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: CharactersListRequest = {
    numCharacters: 25,
    from: 150,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `numCharacters`                                           | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       | 25                                                        |
| `from`                                                    | *number*                                                  | :heavy_minus_sign:                                        | Character ID to start results from (useful in pagination) | 150                                                       |