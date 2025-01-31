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
 * Quota and plan info
 *
 * @remarks
 * Get information related to the user's subscription quota and plan details.
 */
export async function usersQuota(
    client$: AuroraChatbotSDKCore,
    options?: RequestOptions
): Promise<
    Result<
        operations.UsersQuotaSuccessfulRequest,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.UsersQuotaRequest = {};
    void input$; // request input is unused

    const path$ = pathToFunc("/api/v11/user/quota")();

    const headers$ = new Headers({
        Accept: "application/json",
        "x-access-token": encodeSimple$("x-access-token", client$.options$.accessToken, {
            explode: false,
            charEncoding: "none",
        }),
    });

    const context = { operationID: "users.quota", oAuth2Scopes: [], securitySource: null };

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
                    exponent: 1.3,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            },
        retryCodes: options?.retryCodes || ["429", "5XX"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        operations.UsersQuotaSuccessfulRequest,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.UsersQuotaSuccessfulRequest$inboundSchema),
        m$.fail("5XX")
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
