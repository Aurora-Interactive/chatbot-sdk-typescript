/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class Chats extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get all chats assigned to user
     *
     * @remarks
     * Get the chat IDs assigned to a given user ID. useful for getting chat context and message history
     */
    async listForUser(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetChatsForUserSuccessfulRequest> {
        const input$: operations.GetChatsForUserRequest = {};
        void input$; // request input is unused
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/api/v3/allChatsForUser")();

        const query$ = "";

        headers$.set(
            "x-access-token",
            encodeSimple$("x-access-token", this.options$.accessToken, {
                explode: false,
                charEncoding: "none",
            })
        );
        const context = { operationID: "getChatsForUser", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "GET", path: path$, headers: headers$, query: query$ },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1000,
                    maxInterval: 60000,
                    exponent: 1.2,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetChatsForUserSuccessfulRequest>()
            .json(200, operations.GetChatsForUserSuccessfulRequest$)
            .json(400, errors.BadRequestError$, { err: true })
            .json(401, errors.AuthenticationFailedError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Initialize chat with AI character
     *
     * @remarks
     * Initialize a chat with a given AI character, including storing the character's initial response as a message in our system.
     */
    async initialize(
        characterId: number,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.SuccessfulRequest> {
        const input$: components.CharacterId | undefined = {
            characterId: characterId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CharacterId$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/v3/initializeChat")();

        const query$ = "";

        headers$.set(
            "x-access-token",
            encodeSimple$("x-access-token", this.options$.accessToken, {
                explode: false,
                charEncoding: "none",
            })
        );
        const context = { operationID: "initializeChat", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["400", "401", "402", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "POST", path: path$, headers: headers$, query: query$, body: body$ },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1000,
                    maxInterval: 60000,
                    exponent: 1.2,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.SuccessfulRequest>()
            .json(200, components.SuccessfulRequest$)
            .json(400, errors.BadRequestError$, { err: true })
            .json(401, errors.AuthenticationFailedError$, { err: true })
            .json(402, errors.AccountInBadStandingError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete a chat
     *
     * @remarks
     * Delete a chat, given a chat ID. All message history that is still stored is also deleted
     */
    async delete(
        chatId: number,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.SuccessfulRequest> {
        const input$: operations.DeleteChatRequest = {
            chatId: chatId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteChatRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/v3/deleteChat")();

        const query$ = encodeFormQuery$({
            chatId: payload$.chatId,
        });

        headers$.set(
            "x-access-token",
            encodeSimple$("x-access-token", this.options$.accessToken, {
                explode: false,
                charEncoding: "none",
            })
        );
        const context = { operationID: "deleteChat", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "DELETE", path: path$, headers: headers$, query: query$, body: body$ },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1000,
                    maxInterval: 60000,
                    exponent: 1.2,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.SuccessfulRequest>()
            .json(200, components.SuccessfulRequest$)
            .json(400, errors.DeleteChatResponseBody$, { err: true })
            .json(401, errors.DeleteChatChatsResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
