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
 * Delete a chat
 *
 * @remarks
 * Delete a chat by ID. All messages in the chat are also deleted.
 */
export async function chatsDelete(
    client$: AuroraChatbotSDKCore,
    chatId: number,
    options?: RequestOptions
): Promise<
    Result<
        operations.ChatsDeleteResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.ChatsDeleteRequest = {
        chatId: chatId,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.ChatsDeleteRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/api/v9/chat")();

    const query$ = encodeFormQuery$({
        chatId: payload$.chatId,
    });

    const headers$ = new Headers({
        Accept: "application/json",
        "x-access-token": encodeSimple$("x-access-token", client$.options$.accessToken, {
            explode: false,
            charEncoding: "none",
        }),
    });

    const context = { operationID: "chats.delete", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "DELETE",
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
        operations.ChatsDeleteResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ChatsDeleteResponse$inboundSchema),
        m$.json(400, operations.ChatsDeleteResponse$inboundSchema),
        m$.json(401, operations.ChatsDeleteResponse$inboundSchema),
        m$.json(429, operations.ChatsDeleteResponse$inboundSchema),
        m$.fail("5XX")
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
