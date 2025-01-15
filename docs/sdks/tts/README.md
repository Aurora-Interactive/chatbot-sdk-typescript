# Tts
(*tts*)

## Overview

### Available Operations

* [execute](#execute) - Generate text-to-speech for a given message
* [retrieve](#retrieve) - Retrieve text-to-speech generation

## execute

Given a message ID, generate a WAV file using our text-to-speech model according to the user's set preference for TTS character. This is most useful for AI character text responses.

### Example Usage

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
  const result = await auroraChatbotSDK.tts.execute(246815);

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuroraChatbotSDKCore } from "@aurora-interactive/chatbot-api-sdk/core.js";
import { ttsExecute } from "@aurora-interactive/chatbot-api-sdk/funcs/ttsExecute.js";

// Use `AuroraChatbotSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const auroraChatbotSDK = new AuroraChatbotSDKCore();

async function run() {
  const res = await ttsExecute(auroraChatbotSDK, 259799);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TtsExecuteResponse](../../models/operations/ttsexecuteresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## retrieve

Retrieve the WAV audio data generated after a successful call to `POST /tts`

### Example Usage

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
  const result = await auroraChatbotSDK.tts.retrieve(370456);

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuroraChatbotSDKCore } from "@aurora-interactive/chatbot-api-sdk/core.js";
import { ttsRetrieve } from "@aurora-interactive/chatbot-api-sdk/funcs/ttsRetrieve.js";

// Use `AuroraChatbotSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const auroraChatbotSDK = new AuroraChatbotSDKCore();

async function run() {
  const res = await ttsRetrieve(auroraChatbotSDK, 919831);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ttsMessageFor`                                                                                                                                                                | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TtsRetrieveResponse](../../models/operations/ttsretrieveresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
