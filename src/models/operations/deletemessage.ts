/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteMessageGlobals = {
    accessToken?: string | undefined;
};

export type DeleteMessageRequest = {
    messageId: number;
};

/** @internal */
export const DeleteMessageGlobals$inboundSchema: z.ZodType<
    DeleteMessageGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type DeleteMessageGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const DeleteMessageGlobals$outboundSchema: z.ZodType<
    DeleteMessageGlobals$Outbound,
    z.ZodTypeDef,
    DeleteMessageGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMessageGlobals$ {
    /** @deprecated use `DeleteMessageGlobals$inboundSchema` instead. */
    export const inboundSchema = DeleteMessageGlobals$inboundSchema;
    /** @deprecated use `DeleteMessageGlobals$outboundSchema` instead. */
    export const outboundSchema = DeleteMessageGlobals$outboundSchema;
    /** @deprecated use `DeleteMessageGlobals$Outbound` instead. */
    export type Outbound = DeleteMessageGlobals$Outbound;
}

/** @internal */
export const DeleteMessageRequest$inboundSchema: z.ZodType<
    DeleteMessageRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    messageId: z.number().int(),
});

/** @internal */
export type DeleteMessageRequest$Outbound = {
    messageId: number;
};

/** @internal */
export const DeleteMessageRequest$outboundSchema: z.ZodType<
    DeleteMessageRequest$Outbound,
    z.ZodTypeDef,
    DeleteMessageRequest
> = z.object({
    messageId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMessageRequest$ {
    /** @deprecated use `DeleteMessageRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteMessageRequest$inboundSchema;
    /** @deprecated use `DeleteMessageRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteMessageRequest$outboundSchema;
    /** @deprecated use `DeleteMessageRequest$Outbound` instead. */
    export type Outbound = DeleteMessageRequest$Outbound;
}
