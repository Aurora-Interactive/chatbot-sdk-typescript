/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";

export class Characters extends ClientSDK {
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
     * Character metadata
     *
     * @remarks
     * Return metadata for available characters in the system. Paginated. Up to 100 characters per request
     */
    async list(
        numCharacters: number,
        from?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetCharactersResponse> {
        const input$: operations.GetCharactersRequest = {
            numCharacters: numCharacters,
            from: from,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCharactersRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/v4/characters")();

        const query$ = encodeFormQuery$({
            from: payload$.from,
            numCharacters: payload$.numCharacters,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "x-access-token": encodeSimple$("x-access-token", this.options$.accessToken, {
                explode: false,
                charEncoding: "none",
            }),
        });

        const context = { operationID: "getCharacters", oAuth2Scopes: [], securitySource: null };

        const request$ = this.createRequest$(
            context,
            {
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
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

        const [result$] = await this.matcher<operations.GetCharactersResponse>()
            .json(200, operations.GetCharactersResponse$inboundSchema)
            .json(400, operations.GetCharactersResponse$inboundSchema)
            .json(401, operations.GetCharactersResponse$inboundSchema)
            .fail("5XX")
            .match(response);

        return result$;
    }

    /**
     * Character image visuals
     *
     * @remarks
     * Get the banner and profile icon that is assigned to a given character
     */
    async getImageData(
        characterId: number,
        options?: RequestOptions
    ): Promise<operations.GetCharacterImageDataResponse> {
        const input$: operations.GetCharacterImageDataRequest = {
            characterId: characterId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCharacterImageDataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/v4/characters/imageData")();

        const query$ = encodeFormQuery$({
            characterId: payload$.characterId,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "x-access-token": encodeSimple$("x-access-token", this.options$.accessToken, {
                explode: false,
                charEncoding: "none",
            }),
        });

        const context = {
            operationID: "getCharacterImageData",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const request$ = this.createRequest$(
            context,
            {
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
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

        const [result$] = await this.matcher<operations.GetCharacterImageDataResponse>()
            .json(200, operations.GetCharacterImageDataResponse$inboundSchema)
            .json(400, operations.GetCharacterImageDataResponse$inboundSchema)
            .json(401, operations.GetCharacterImageDataResponse$inboundSchema)
            .fail("5XX")
            .match(response);

        return result$;
    }

    /**
     * Create character
     *
     * @remarks
     * Upload character data to our system
     */
    async create(
        request?: operations.CreateCharacterRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateCharacterResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.CreateCharacterRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/v4/character")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-access-token": encodeSimple$("x-access-token", this.options$.accessToken, {
                explode: false,
                charEncoding: "none",
            }),
        });

        const context = { operationID: "createCharacter", oAuth2Scopes: [], securitySource: null };

        const request$ = this.createRequest$(
            context,
            {
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
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

        const [result$] = await this.matcher<operations.CreateCharacterResponse>()
            .json(200, operations.CreateCharacterResponse$inboundSchema)
            .json(400, operations.CreateCharacterResponse$inboundSchema)
            .json(401, operations.CreateCharacterResponse$inboundSchema)
            .json(402, operations.CreateCharacterResponse$inboundSchema)
            .fail("5XX")
            .match(response);

        return result$;
    }
}
