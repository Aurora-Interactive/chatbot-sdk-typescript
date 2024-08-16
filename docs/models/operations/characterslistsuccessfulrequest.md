# CharactersListSuccessfulRequest

A JSON array of character metadata for each character

## Example Usage

```typescript
import { CharactersListSuccessfulRequest } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: CharactersListSuccessfulRequest = {
    characters: [
        {
            name: "<value>",
            description: "Progressive multi-state extranet",
            isOfficial: false,
            id: 138183,
        },
    ],
    isEndOfList: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `success`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `characters`                                                     | [operations.Characters](../../models/operations/characters.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `isEndOfList`                                                    | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |