# @aurora-interactive/chatbot-api-sdk

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=bc02fa" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-bc02fa.svg" style="height: 28px;" />
    </a>
</div>

### [API Schema Reference](https://bump.sh/aurora-interactive-services/doc/ai-chatbot-api)

<!-- Start Summary [summary] -->
## Summary

Aurora AI Chat REST API: REST API used in storing and executing AI chat completions in a personalized and conversational manner. It comes with support for streaming chat responses.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Server-sent event streaming](#server-sent-event-streaming)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example 1

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

### Example 2

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

### Example 3

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.users.setInfo("<value>", "<value>", false, "<value>");

    // Handle the result
    console.log(result);
}

run();

```

### Example 4

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

### Example 5

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

### Example 6

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

### Example 7

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

### Example 8

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

### Example 9

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

### Example 10

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

### Example 11

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [users](docs/sdks/users/README.md)

* [login](docs/sdks/users/README.md#login) - Login
* [getInfo](docs/sdks/users/README.md#getinfo) - Get User Info
* [setInfo](docs/sdks/users/README.md#setinfo) - Update account information
* [quota](docs/sdks/users/README.md#quota) - Quota and plan info
* [signup](docs/sdks/users/README.md#signup) - User signup

### [characters](docs/sdks/characters/README.md)

* [list](docs/sdks/characters/README.md#list) - Character metadata
* [get](docs/sdks/characters/README.md#get) - Get information about a character
* [create](docs/sdks/characters/README.md#create) - Create character

### [chats](docs/sdks/chats/README.md)

* [list](docs/sdks/chats/README.md#list) - Get all chats assigned to a user
* [preview](docs/sdks/chats/README.md#preview) - Get the latest message from the given chat
* [initialize](docs/sdks/chats/README.md#initialize) - Initialize chat with AI character
* [delete](docs/sdks/chats/README.md#delete) - Delete a chat

### [messages](docs/sdks/messages/README.md)

* [save](docs/sdks/messages/README.md#save) - Save chat message
* [getMany](docs/sdks/messages/README.md#getmany) - Get a certain number of messages from the message history, up to 100 per request.
* [send](docs/sdks/messages/README.md#send) - Send message
* [delete](docs/sdks/messages/README.md#delete) - Delete message

### [tts](docs/sdks/tts/README.md)

* [execute](docs/sdks/tts/README.md#execute) - Generate text-to-speech for a given message
* [retrieve](docs/sdks/tts/README.md#retrieve) - Retrieve text-to-speech generation
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";
import { SDKValidationError } from "@aurora-interactive/chatbot-api-sdk/models/errors";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    let result;
    try {
        result = await auroraChatbotSDK.users.login();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://chat-api.aurora-interactive.online:8443` | None |

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK({
    serverIdx: 0,
});

async function run() {
    const result = await auroraChatbotSDK.users.login();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK({
    serverURL: "https://chat-api.aurora-interactive.online:8443",
});

async function run() {
    const result = await auroraChatbotSDK.users.login();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";
import { HTTPClient } from "@aurora-interactive/chatbot-api-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new AuroraChatbotSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [charactersCreate](docs/sdks/characters/README.md#create)
- [charactersGet](docs/sdks/characters/README.md#get)
- [charactersList](docs/sdks/characters/README.md#list)
- [chatsDelete](docs/sdks/chats/README.md#delete)
- [chatsInitialize](docs/sdks/chats/README.md#initialize)
- [chatsList](docs/sdks/chats/README.md#list)
- [chatsPreview](docs/sdks/chats/README.md#preview)
- [messagesDelete](docs/sdks/messages/README.md#delete)
- [messagesGetMany](docs/sdks/messages/README.md#getmany)
- [messagesSave](docs/sdks/messages/README.md#save)
- [messagesSend](docs/sdks/messages/README.md#send)
- [ttsExecute](docs/sdks/tts/README.md#execute)
- [ttsRetrieve](docs/sdks/tts/README.md#retrieve)
- [usersGetInfo](docs/sdks/users/README.md#getinfo)
- [usersLogin](docs/sdks/users/README.md#login)
- [usersQuota](docs/sdks/users/README.md#quota)
- [usersSetInfo](docs/sdks/users/README.md#setinfo)
- [usersSignup](docs/sdks/users/README.md#signup)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

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

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    const result = await auroraChatbotSDK.users.login({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
});

async function run() {
    const result = await auroraChatbotSDK.users.login();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const sdk = new AuroraChatbotSDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Getting Character Images
Banner and icon (pfp-style) images for each character are stored on an S3 server instance that isn't tied to the API, thus querying for these images is not included in this SDK. To get the character images, make a GET request to our CDN using the following format:
`https://ai-chat-cdn.aurora-interactive.online/characters/<characterId>/<(banner | icon).avif>`

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)