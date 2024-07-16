<!-- Start SDK Example Usage [usage] -->
```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.users.login({
        username: "Christelle68",
        password: "VVxb7UVU0peMp3a",
    });

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.characters.list(25, 150);

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.characters.create({
        iconImage: "<value>",
        bannerImage: "<value>",
        name: "<value>",
        description: "Multi-tiered human-resource model",
        aiPrompt: "<value>",
        initialResponse: "<value>",
        specialMessages: [
            {
                startsWith: "<value>",
                endsWith: ["<value>"],
                prompt: "<value>",
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.chats.listForUser();

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.chats.initialize(330905);

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.chats.delete(8);

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.messages.save("system", "<value>", 25408, 337);

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.messages.context(8);

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.messages.send(516969, 157994, "<value>", [
        {
            role: "user",
            content: "<value>",
        },
    ]);

    for await (const event of result) {
        // Handle the event
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->