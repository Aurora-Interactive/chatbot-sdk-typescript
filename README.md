# @aurora-interactive/chatbot-api-sdk

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=bc02fa" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-bc02fa.svg" style="height: 28px;" />
    </a>
</div>

### [API Schema Reference](https://bump.sh/aurora-interactive-services/doc/ai-chatbot-api)

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM/PNMP/Bun/Yarn

```bash
[npm/pnpm/bun] add @aurora-interactive/chatbot-api-sdk
```

### Yarn

```bash
yarn add @aurora-interactive/chatbot-api-sdk zod

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

### Example

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

//! You will need to have a valid access token to use the SDK with the access token parameter
// you can use the SDK without the accessToken parameter and then make a new instance
// after you have gotten an accessToken with sdk.users.login(...) or sdk.users.signup(...)
const auroraChatbotSDK = new AuroraChatbotSDK({
    accessToken: "abc123"
});

async function run() {
    const result = await auroraChatbotSDK.characters.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [characters](docs/sdks/characters/README.md)

* [list](docs/sdks/characters/README.md#list) - Character metadata
* [getImageData](docs/sdks/characters/README.md#getimagedata) - Character image visuals
* [create](docs/sdks/characters/README.md#create) - Create character

### [chats](docs/sdks/chats/README.md)

* [listForUser](docs/sdks/chats/README.md#listforuser) - Get all chats assigned to user
* [initialize](docs/sdks/chats/README.md#initialize) - Initialize chat with AI character
* [delete](docs/sdks/chats/README.md#delete) - Delete a chat

### [messages](docs/sdks/messages/README.md)

* [save](docs/sdks/messages/README.md#save) - Save chat message
* [history](docs/sdks/messages/README.md#history) - Get full message history
* [context](docs/sdks/messages/README.md#context) - Get chat context
* [send](docs/sdks/messages/README.md#send) - Send message
* [delete](docs/sdks/messages/README.md#delete) - Delete message
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestError           | 400                              | application/json                 |
| errors.AuthenticationFailedError | 401                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";
import { SDKValidationError } from "@aurora-interactive/chatbot-api-sdk/models/errors";

const auroraChatbotSDK = new AuroraChatbotSDK();

async function run() {
    let result;
    try {
        result = await auroraChatbotSDK.characters.list();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.BadRequestError: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.AuthenticationFailedError: {
                console.error(err); // handle exception
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
| 0 | `https://api.chatbot.aurora-interactive.online:8443` | None |

```typescript
import { AuroraChatbotSDK } from "@aurora-interactive/chatbot-api-sdk";

const auroraChatbotSDK = new AuroraChatbotSDK({
    serverIdx: 0,
});

async function run() {
    const result = await auroraChatbotSDK.characters.list();

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
    serverURL: "https://api.chatbot.aurora-interactive.online:8443",
});

async function run() {
    const result = await auroraChatbotSDK.characters.list();

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
    const result = await auroraChatbotSDK.messages.send(516969, "<value>", [
        {
            role: "assistant",
            content: "Hello there! How may I be of assistance?",
        },
    ]);

    if (res.chatCompletionFragment == null) {
        throw new Error("failed to create stream: received null value");
    }

    for await (const event of res.chatCompletionFragment) {
        // Handle the event
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
    const result = await auroraChatbotSDK.characters.list({
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
    const result = await auroraChatbotSDK.characters.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Getting Character Images
Banner and icon (pfp-style) images for each character are stored on an S3 server instance that isn't tied to the API, thus querying for these images is not included in this SDK. To get the character images, make a GET request to our CDN using the following format:
`https://ai-chat-cdn.aurora-interactive.online/characters/<characterId>/<(banner | icon).avif>`

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)