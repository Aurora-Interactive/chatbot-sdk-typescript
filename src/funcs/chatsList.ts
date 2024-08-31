/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AuroraChatbotSDKCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
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
 * Get all chats assigned to a user
 *
 * @remarks
 * Get chat IDs assigned to a user ID
 */
export async function chatsList(
    client$: AuroraChatbotSDKCore,
    options?: RequestOptions
): Promise<
    Result<
        operations.ChatsListResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.ChatsListRequest = {};
    void input$; // request input is unused

    const path$ = pathToFunc("/api/v7/chats")();

    const headers$ = new Headers({
        Accept: "application/json",
        "x-access-token": encodeSimple$("x-access-token", client$.options$.accessToken, {
            explode: false,
            charEncoding: "none",
        }),
    });

    const context = { operationID: "chats.list", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "GET",
            path: path$,
            headers: headers$,
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
        operations.ChatsListResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ChatsListResponse$inboundSchema),
        m$.json(400, operations.ChatsListResponse$inboundSchema),
        m$.json(401, operations.ChatsListResponse$inboundSchema),
        m$.json(402, operations.ChatsListResponse$inboundSchema),
        m$.fail("5XX")
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
