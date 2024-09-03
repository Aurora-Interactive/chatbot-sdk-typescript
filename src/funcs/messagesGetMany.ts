/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AuroraChatbotSDKCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Get a certain number of messages from the message history, up to 100 per request.
 */
export async function messagesGetMany(
    client$: AuroraChatbotSDKCore,
    chatId: number,
    numMessages: number,
    from?: number | undefined,
    options?: RequestOptions
): Promise<
    Result<
        operations.MessagesGetManyResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.MessagesGetManyRequest = {
        chatId: chatId,
        numMessages: numMessages,
        from: from,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.MessagesGetManyRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/api/v8/messages")();

    const query$ = encodeFormQuery$({
        chatId: payload$.chatId,
        from: payload$.from,
        numMessages: payload$.numMessages,
    });

    const headers$ = new Headers({
        Accept: "application/json",
        "x-access-token": encodeSimple$("x-access-token", client$.options$.accessToken, {
            explode: false,
            charEncoding: "none",
        }),
    });

    const context = { operationID: "messages.getMany", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["5XX"],
        retryConfig: options?.retries ||
            client$.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1000,
                    maxInterval: 60000,
                    exponent: 1.2,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            },
        retryCodes: options?.retryCodes || ["5XX"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        operations.MessagesGetManyResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.MessagesGetManyResponse$inboundSchema),
        m$.json(400, operations.MessagesGetManyResponse$inboundSchema),
        m$.json(401, operations.MessagesGetManyResponse$inboundSchema),
        m$.json(402, operations.MessagesGetManyResponse$inboundSchema),
        m$.fail("5XX")
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
