/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ChatsDeleteGlobals = {
    accessToken?: string | undefined;
};

export type ChatsDeleteRequest = {
    chatId: number;
};

export type ChatsDeleteResponse =
    | components.SuccessfulRequest
    | components.DefaultBadRequest
    | components.DefaultUnauthorizedResponse
    | components.RateLimitReachedError;

/** @internal */
export const ChatsDeleteGlobals$inboundSchema: z.ZodType<
    ChatsDeleteGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type ChatsDeleteGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const ChatsDeleteGlobals$outboundSchema: z.ZodType<
    ChatsDeleteGlobals$Outbound,
    z.ZodTypeDef,
    ChatsDeleteGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsDeleteGlobals$ {
    /** @deprecated use `ChatsDeleteGlobals$inboundSchema` instead. */
    export const inboundSchema = ChatsDeleteGlobals$inboundSchema;
    /** @deprecated use `ChatsDeleteGlobals$outboundSchema` instead. */
    export const outboundSchema = ChatsDeleteGlobals$outboundSchema;
    /** @deprecated use `ChatsDeleteGlobals$Outbound` instead. */
    export type Outbound = ChatsDeleteGlobals$Outbound;
}

/** @internal */
export const ChatsDeleteRequest$inboundSchema: z.ZodType<
    ChatsDeleteRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    chatId: z.number().int(),
});

/** @internal */
export type ChatsDeleteRequest$Outbound = {
    chatId: number;
};

/** @internal */
export const ChatsDeleteRequest$outboundSchema: z.ZodType<
    ChatsDeleteRequest$Outbound,
    z.ZodTypeDef,
    ChatsDeleteRequest
> = z.object({
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsDeleteRequest$ {
    /** @deprecated use `ChatsDeleteRequest$inboundSchema` instead. */
    export const inboundSchema = ChatsDeleteRequest$inboundSchema;
    /** @deprecated use `ChatsDeleteRequest$outboundSchema` instead. */
    export const outboundSchema = ChatsDeleteRequest$outboundSchema;
    /** @deprecated use `ChatsDeleteRequest$Outbound` instead. */
    export type Outbound = ChatsDeleteRequest$Outbound;
}

/** @internal */
export const ChatsDeleteResponse$inboundSchema: z.ZodType<
    ChatsDeleteResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.SuccessfulRequest$inboundSchema,
    components.DefaultBadRequest$inboundSchema,
    components.DefaultUnauthorizedResponse$inboundSchema,
    components.RateLimitReachedError$inboundSchema,
]);

/** @internal */
export type ChatsDeleteResponse$Outbound =
    | components.SuccessfulRequest$Outbound
    | components.DefaultBadRequest$Outbound
    | components.DefaultUnauthorizedResponse$Outbound
    | components.RateLimitReachedError$Outbound;

/** @internal */
export const ChatsDeleteResponse$outboundSchema: z.ZodType<
    ChatsDeleteResponse$Outbound,
    z.ZodTypeDef,
    ChatsDeleteResponse
> = z.union([
    components.SuccessfulRequest$outboundSchema,
    components.DefaultBadRequest$outboundSchema,
    components.DefaultUnauthorizedResponse$outboundSchema,
    components.RateLimitReachedError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsDeleteResponse$ {
    /** @deprecated use `ChatsDeleteResponse$inboundSchema` instead. */
    export const inboundSchema = ChatsDeleteResponse$inboundSchema;
    /** @deprecated use `ChatsDeleteResponse$outboundSchema` instead. */
    export const outboundSchema = ChatsDeleteResponse$outboundSchema;
    /** @deprecated use `ChatsDeleteResponse$Outbound` instead. */
    export type Outbound = ChatsDeleteResponse$Outbound;
}
