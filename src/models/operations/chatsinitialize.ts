/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ChatsInitializeGlobals = {
    accessToken?: string | undefined;
};

/**
 * Chat initialized successfully with the given AI initialization data
 */
export type ChatsInitializeSuccessfulRequest = {
    success?: boolean | undefined;
    chatId: number;
};

export type ChatsInitializeResponse =
    | ChatsInitializeSuccessfulRequest
    | components.DefaultBadRequest
    | components.DefaultUnauthorizedResponse
    | components.RateLimitReachedError;

/** @internal */
export const ChatsInitializeGlobals$inboundSchema: z.ZodType<
    ChatsInitializeGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type ChatsInitializeGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const ChatsInitializeGlobals$outboundSchema: z.ZodType<
    ChatsInitializeGlobals$Outbound,
    z.ZodTypeDef,
    ChatsInitializeGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsInitializeGlobals$ {
    /** @deprecated use `ChatsInitializeGlobals$inboundSchema` instead. */
    export const inboundSchema = ChatsInitializeGlobals$inboundSchema;
    /** @deprecated use `ChatsInitializeGlobals$outboundSchema` instead. */
    export const outboundSchema = ChatsInitializeGlobals$outboundSchema;
    /** @deprecated use `ChatsInitializeGlobals$Outbound` instead. */
    export type Outbound = ChatsInitializeGlobals$Outbound;
}

/** @internal */
export const ChatsInitializeSuccessfulRequest$inboundSchema: z.ZodType<
    ChatsInitializeSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    chatId: z.number().int(),
});

/** @internal */
export type ChatsInitializeSuccessfulRequest$Outbound = {
    success: boolean;
    chatId: number;
};

/** @internal */
export const ChatsInitializeSuccessfulRequest$outboundSchema: z.ZodType<
    ChatsInitializeSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    ChatsInitializeSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsInitializeSuccessfulRequest$ {
    /** @deprecated use `ChatsInitializeSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = ChatsInitializeSuccessfulRequest$inboundSchema;
    /** @deprecated use `ChatsInitializeSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = ChatsInitializeSuccessfulRequest$outboundSchema;
    /** @deprecated use `ChatsInitializeSuccessfulRequest$Outbound` instead. */
    export type Outbound = ChatsInitializeSuccessfulRequest$Outbound;
}

/** @internal */
export const ChatsInitializeResponse$inboundSchema: z.ZodType<
    ChatsInitializeResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => ChatsInitializeSuccessfulRequest$inboundSchema),
    components.DefaultBadRequest$inboundSchema,
    components.DefaultUnauthorizedResponse$inboundSchema,
    components.RateLimitReachedError$inboundSchema,
]);

/** @internal */
export type ChatsInitializeResponse$Outbound =
    | ChatsInitializeSuccessfulRequest$Outbound
    | components.DefaultBadRequest$Outbound
    | components.DefaultUnauthorizedResponse$Outbound
    | components.RateLimitReachedError$Outbound;

/** @internal */
export const ChatsInitializeResponse$outboundSchema: z.ZodType<
    ChatsInitializeResponse$Outbound,
    z.ZodTypeDef,
    ChatsInitializeResponse
> = z.union([
    z.lazy(() => ChatsInitializeSuccessfulRequest$outboundSchema),
    components.DefaultBadRequest$outboundSchema,
    components.DefaultUnauthorizedResponse$outboundSchema,
    components.RateLimitReachedError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsInitializeResponse$ {
    /** @deprecated use `ChatsInitializeResponse$inboundSchema` instead. */
    export const inboundSchema = ChatsInitializeResponse$inboundSchema;
    /** @deprecated use `ChatsInitializeResponse$outboundSchema` instead. */
    export const outboundSchema = ChatsInitializeResponse$outboundSchema;
    /** @deprecated use `ChatsInitializeResponse$Outbound` instead. */
    export type Outbound = ChatsInitializeResponse$Outbound;
}
