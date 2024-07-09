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
<!-- End SDK Example Usage [usage] -->