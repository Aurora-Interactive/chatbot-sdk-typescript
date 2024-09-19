# CharactersCreateRequestBody

## Example Usage

```typescript
import { CharactersCreateRequestBody } from "@aurora-interactive/chatbot-api-sdk/models/operations";

let value: CharactersCreateRequestBody = {
    name: "<value>",
    description: "Compatible mobile software",
    aiPrompt: "<value>",
    initialResponse: "<value>",
    banner: "AAAAbx",
    icon: "AAAAbx",
    specialMessages: [
        {
            startsWith: "<value>",
            endsWith: ["<value>"],
            prompt: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `description`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `aiPrompt`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `initialResponse`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `banner`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | base64-encoded AVIF image                                                  | AAAAbx                                                                     |
| `icon`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | base64-encoded AVIF image                                                  | AAAAbx                                                                     |
| `specialMessages`                                                          | [operations.SpecialMessages](../../models/operations/specialmessages.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |