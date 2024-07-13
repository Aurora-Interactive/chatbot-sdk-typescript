/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type InitializeChatGlobals = {
    accessToken?: string | undefined;
};

/**
 * Chat initialized successfully with the given AI initialization data
 */
export type InitializeChatSuccessfulRequest = {
    success?: boolean | undefined;
    chatId: number;
};

export type InitializeChatResponse =
    | InitializeChatSuccessfulRequest
    | components.BadRequestError
    | components.AuthenticationFailedError
    | components.AccountInBadStandingError;

/** @internal */
export const InitializeChatGlobals$inboundSchema: z.ZodType<
    InitializeChatGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type InitializeChatGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const InitializeChatGlobals$outboundSchema: z.ZodType<
    InitializeChatGlobals$Outbound,
    z.ZodTypeDef,
    InitializeChatGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitializeChatGlobals$ {
    /** @deprecated use `InitializeChatGlobals$inboundSchema` instead. */
    export const inboundSchema = InitializeChatGlobals$inboundSchema;
    /** @deprecated use `InitializeChatGlobals$outboundSchema` instead. */
    export const outboundSchema = InitializeChatGlobals$outboundSchema;
    /** @deprecated use `InitializeChatGlobals$Outbound` instead. */
    export type Outbound = InitializeChatGlobals$Outbound;
}

/** @internal */
export const InitializeChatSuccessfulRequest$inboundSchema: z.ZodType<
    InitializeChatSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    chatId: z.number().int(),
});

/** @internal */
export type InitializeChatSuccessfulRequest$Outbound = {
    success: boolean;
    chatId: number;
};

/** @internal */
export const InitializeChatSuccessfulRequest$outboundSchema: z.ZodType<
    InitializeChatSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    InitializeChatSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitializeChatSuccessfulRequest$ {
    /** @deprecated use `InitializeChatSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = InitializeChatSuccessfulRequest$inboundSchema;
    /** @deprecated use `InitializeChatSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = InitializeChatSuccessfulRequest$outboundSchema;
    /** @deprecated use `InitializeChatSuccessfulRequest$Outbound` instead. */
    export type Outbound = InitializeChatSuccessfulRequest$Outbound;
}

/** @internal */
export const InitializeChatResponse$inboundSchema: z.ZodType<
    InitializeChatResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => InitializeChatSuccessfulRequest$inboundSchema),
    components.BadRequestError$inboundSchema,
    components.AuthenticationFailedError$inboundSchema,
    components.AccountInBadStandingError$inboundSchema,
]);

/** @internal */
export type InitializeChatResponse$Outbound =
    | InitializeChatSuccessfulRequest$Outbound
    | components.BadRequestError$Outbound
    | components.AuthenticationFailedError$Outbound
    | components.AccountInBadStandingError$Outbound;

/** @internal */
export const InitializeChatResponse$outboundSchema: z.ZodType<
    InitializeChatResponse$Outbound,
    z.ZodTypeDef,
    InitializeChatResponse
> = z.union([
    z.lazy(() => InitializeChatSuccessfulRequest$outboundSchema),
    components.BadRequestError$outboundSchema,
    components.AuthenticationFailedError$outboundSchema,
    components.AccountInBadStandingError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitializeChatResponse$ {
    /** @deprecated use `InitializeChatResponse$inboundSchema` instead. */
    export const inboundSchema = InitializeChatResponse$inboundSchema;
    /** @deprecated use `InitializeChatResponse$outboundSchema` instead. */
    export const outboundSchema = InitializeChatResponse$outboundSchema;
    /** @deprecated use `InitializeChatResponse$Outbound` instead. */
    export type Outbound = InitializeChatResponse$Outbound;
}
