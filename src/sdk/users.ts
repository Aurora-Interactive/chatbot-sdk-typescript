/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";

export class Users extends ClientSDK {
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
     * Login
     *
     * @remarks
     * Login and retrieve a reusable access token for use with the rest of the API
     */
    async login(
        request?: operations.LoginRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.LoginResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LoginRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/v5/login")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const context = { operationID: "login", oAuth2Scopes: [], securitySource: null };

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

        const [result$] = await this.matcher<operations.LoginResponse>()
            .json(200, operations.LoginResponse$inboundSchema)
            .json(400, operations.LoginResponse$inboundSchema)
            .json(401, operations.LoginResponse$inboundSchema)
            .fail("5XX")
            .match(response);

        return result$;
    }

    /**
     * User signup
     *
     * @remarks
     * Create a user account
     */
    async createAccount(
        request?: operations.SignupRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.SignupResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.SignupRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/v5/signup")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const context = { operationID: "signup", oAuth2Scopes: [], securitySource: null };

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

        const [result$] = await this.matcher<operations.SignupResponse>()
            .json(200, operations.SignupResponse$inboundSchema)
            .json(400, operations.SignupResponse$inboundSchema)
            .json(401, operations.SignupResponse$inboundSchema)
            .fail("5XX")
            .match(response);

        return result$;
    }
}
