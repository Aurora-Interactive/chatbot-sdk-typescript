/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ChatsPreviewGlobals = {
    accessToken?: string | undefined;
};

export type ChatsPreviewRequest = {
    chatId: number;
};

/**
 * Latest message in the given chat, useful as a preview
 */
export type ChatsPreviewResponseBody = {
    content: string;
    timestamp: number;
};

export type ChatsPreviewResponse =
    | ChatsPreviewResponseBody
    | components.DefaultBadRequest
    | components.DefaultUnauthorizedResponse
    | components.DefaultBadStandingResponse;

/** @internal */
export const ChatsPreviewGlobals$inboundSchema: z.ZodType<
    ChatsPreviewGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type ChatsPreviewGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const ChatsPreviewGlobals$outboundSchema: z.ZodType<
    ChatsPreviewGlobals$Outbound,
    z.ZodTypeDef,
    ChatsPreviewGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsPreviewGlobals$ {
    /** @deprecated use `ChatsPreviewGlobals$inboundSchema` instead. */
    export const inboundSchema = ChatsPreviewGlobals$inboundSchema;
    /** @deprecated use `ChatsPreviewGlobals$outboundSchema` instead. */
    export const outboundSchema = ChatsPreviewGlobals$outboundSchema;
    /** @deprecated use `ChatsPreviewGlobals$Outbound` instead. */
    export type Outbound = ChatsPreviewGlobals$Outbound;
}

/** @internal */
export const ChatsPreviewRequest$inboundSchema: z.ZodType<
    ChatsPreviewRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    chatId: z.number().int(),
});

/** @internal */
export type ChatsPreviewRequest$Outbound = {
    chatId: number;
};

/** @internal */
export const ChatsPreviewRequest$outboundSchema: z.ZodType<
    ChatsPreviewRequest$Outbound,
    z.ZodTypeDef,
    ChatsPreviewRequest
> = z.object({
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsPreviewRequest$ {
    /** @deprecated use `ChatsPreviewRequest$inboundSchema` instead. */
    export const inboundSchema = ChatsPreviewRequest$inboundSchema;
    /** @deprecated use `ChatsPreviewRequest$outboundSchema` instead. */
    export const outboundSchema = ChatsPreviewRequest$outboundSchema;
    /** @deprecated use `ChatsPreviewRequest$Outbound` instead. */
    export type Outbound = ChatsPreviewRequest$Outbound;
}

/** @internal */
export const ChatsPreviewResponseBody$inboundSchema: z.ZodType<
    ChatsPreviewResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    content: z.string(),
    timestamp: z.number().int(),
});

/** @internal */
export type ChatsPreviewResponseBody$Outbound = {
    content: string;
    timestamp: number;
};

/** @internal */
export const ChatsPreviewResponseBody$outboundSchema: z.ZodType<
    ChatsPreviewResponseBody$Outbound,
    z.ZodTypeDef,
    ChatsPreviewResponseBody
> = z.object({
    content: z.string(),
    timestamp: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsPreviewResponseBody$ {
    /** @deprecated use `ChatsPreviewResponseBody$inboundSchema` instead. */
    export const inboundSchema = ChatsPreviewResponseBody$inboundSchema;
    /** @deprecated use `ChatsPreviewResponseBody$outboundSchema` instead. */
    export const outboundSchema = ChatsPreviewResponseBody$outboundSchema;
    /** @deprecated use `ChatsPreviewResponseBody$Outbound` instead. */
    export type Outbound = ChatsPreviewResponseBody$Outbound;
}

/** @internal */
export const ChatsPreviewResponse$inboundSchema: z.ZodType<
    ChatsPreviewResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => ChatsPreviewResponseBody$inboundSchema),
    components.DefaultBadRequest$inboundSchema,
    components.DefaultUnauthorizedResponse$inboundSchema,
    components.DefaultBadStandingResponse$inboundSchema,
]);

/** @internal */
export type ChatsPreviewResponse$Outbound =
    | ChatsPreviewResponseBody$Outbound
    | components.DefaultBadRequest$Outbound
    | components.DefaultUnauthorizedResponse$Outbound
    | components.DefaultBadStandingResponse$Outbound;

/** @internal */
export const ChatsPreviewResponse$outboundSchema: z.ZodType<
    ChatsPreviewResponse$Outbound,
    z.ZodTypeDef,
    ChatsPreviewResponse
> = z.union([
    z.lazy(() => ChatsPreviewResponseBody$outboundSchema),
    components.DefaultBadRequest$outboundSchema,
    components.DefaultUnauthorizedResponse$outboundSchema,
    components.DefaultBadStandingResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsPreviewResponse$ {
    /** @deprecated use `ChatsPreviewResponse$inboundSchema` instead. */
    export const inboundSchema = ChatsPreviewResponse$inboundSchema;
    /** @deprecated use `ChatsPreviewResponse$outboundSchema` instead. */
    export const outboundSchema = ChatsPreviewResponse$outboundSchema;
    /** @deprecated use `ChatsPreviewResponse$Outbound` instead. */
    export type Outbound = ChatsPreviewResponse$Outbound;
}
