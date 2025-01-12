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

export enum RetrieveAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

/**
 * Retrieve text-to-speech generation
 *
 * @remarks
 * Retrieve the WAV audio data generated after a successful call to `POST /tts`
 */
export async function ttsRetrieve(
    client$: AuroraChatbotSDKCore,
    ttsGenerationId: number,
    options?: RequestOptions & { acceptHeaderOverride?: RetrieveAcceptEnum }
): Promise<
    Result<
        operations.TtsRetrieveResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.TtsRetrieveRequest = {
        ttsGenerationId: ttsGenerationId,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.TtsRetrieveRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/api/v11/tts")();

    const query$ = encodeFormQuery$({
        ttsGenerationId: payload$.ttsGenerationId,
    });

    const headers$ = new Headers({
        Accept:
            options?.acceptHeaderOverride || "application/json;q=1, application/octet-stream;q=0",
        "x-access-token": encodeSimple$("x-access-token", client$.options$.accessToken, {
            explode: false,
            charEncoding: "none",
        }),
    });

    const context = { operationID: "tts.retrieve", oAuth2Scopes: [], securitySource: null };

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
        operations.TtsRetrieveResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.stream(200, operations.TtsRetrieveResponse$inboundSchema),
        m$.json(400, operations.TtsRetrieveResponse$inboundSchema),
        m$.json(401, operations.TtsRetrieveResponse$inboundSchema),
        m$.json(429, operations.TtsRetrieveResponse$inboundSchema),
        m$.fail("5XX")
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
