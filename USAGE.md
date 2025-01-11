<!-- Start SDK Example Usage [usage] -->
```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.users.login();

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.users.getInfo();

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.users.setInfo("<value>", "<value>", 127219, "<value>");

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
        name: "<value>",
        description: "Multi-tiered human-resource model",
        aiPrompt: "<value>",
        initialResponse: "<value>",
        banner: "AAAAbx",
        icon: "AAAAbx",
        isPrivate: false,
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
    const result = await auroraChatbotSDK.chats.list();

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
    const result = await auroraChatbotSDK.messages.getMany(8, 10, 150);

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.messages.send(516969, 157994, "<value>");

    for await (const event of result) {
        // Handle the event
        console.log(event);
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->