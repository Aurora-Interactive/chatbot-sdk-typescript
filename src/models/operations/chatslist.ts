/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ChatsListGlobals = {
    accessToken?: string | undefined;
};

export type ChatsListRequest = {};

export type Chats = {
    characterId: number;
    chatId: number;
};

/**
 * JSON array of chat info
 */
export type ChatsListSuccessfulRequest = {
    success?: boolean | undefined;
    chats: Array<Chats>;
};

export type ChatsListResponse =
    | ChatsListSuccessfulRequest
    | components.BadRequestError
    | components.AuthenticationFailedError;

/** @internal */
export const ChatsListGlobals$inboundSchema: z.ZodType<ChatsListGlobals, z.ZodTypeDef, unknown> =
    z.object({
        accessToken: z.string().optional(),
    });

/** @internal */
export type ChatsListGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const ChatsListGlobals$outboundSchema: z.ZodType<
    ChatsListGlobals$Outbound,
    z.ZodTypeDef,
    ChatsListGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsListGlobals$ {
    /** @deprecated use `ChatsListGlobals$inboundSchema` instead. */
    export const inboundSchema = ChatsListGlobals$inboundSchema;
    /** @deprecated use `ChatsListGlobals$outboundSchema` instead. */
    export const outboundSchema = ChatsListGlobals$outboundSchema;
    /** @deprecated use `ChatsListGlobals$Outbound` instead. */
    export type Outbound = ChatsListGlobals$Outbound;
}

/** @internal */
export const ChatsListRequest$inboundSchema: z.ZodType<ChatsListRequest, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type ChatsListRequest$Outbound = {};

/** @internal */
export const ChatsListRequest$outboundSchema: z.ZodType<
    ChatsListRequest$Outbound,
    z.ZodTypeDef,
    ChatsListRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsListRequest$ {
    /** @deprecated use `ChatsListRequest$inboundSchema` instead. */
    export const inboundSchema = ChatsListRequest$inboundSchema;
    /** @deprecated use `ChatsListRequest$outboundSchema` instead. */
    export const outboundSchema = ChatsListRequest$outboundSchema;
    /** @deprecated use `ChatsListRequest$Outbound` instead. */
    export type Outbound = ChatsListRequest$Outbound;
}

/** @internal */
export const Chats$inboundSchema: z.ZodType<Chats, z.ZodTypeDef, unknown> = z.object({
    characterId: z.number().int(),
    chatId: z.number().int(),
});

/** @internal */
export type Chats$Outbound = {
    characterId: number;
    chatId: number;
};

/** @internal */
export const Chats$outboundSchema: z.ZodType<Chats$Outbound, z.ZodTypeDef, Chats> = z.object({
    characterId: z.number().int(),
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Chats$ {
    /** @deprecated use `Chats$inboundSchema` instead. */
    export const inboundSchema = Chats$inboundSchema;
    /** @deprecated use `Chats$outboundSchema` instead. */
    export const outboundSchema = Chats$outboundSchema;
    /** @deprecated use `Chats$Outbound` instead. */
    export type Outbound = Chats$Outbound;
}

/** @internal */
export const ChatsListSuccessfulRequest$inboundSchema: z.ZodType<
    ChatsListSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    chats: z.array(z.lazy(() => Chats$inboundSchema)),
});

/** @internal */
export type ChatsListSuccessfulRequest$Outbound = {
    success: boolean;
    chats: Array<Chats$Outbound>;
};

/** @internal */
export const ChatsListSuccessfulRequest$outboundSchema: z.ZodType<
    ChatsListSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    ChatsListSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    chats: z.array(z.lazy(() => Chats$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsListSuccessfulRequest$ {
    /** @deprecated use `ChatsListSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = ChatsListSuccessfulRequest$inboundSchema;
    /** @deprecated use `ChatsListSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = ChatsListSuccessfulRequest$outboundSchema;
    /** @deprecated use `ChatsListSuccessfulRequest$Outbound` instead. */
    export type Outbound = ChatsListSuccessfulRequest$Outbound;
}

/** @internal */
export const ChatsListResponse$inboundSchema: z.ZodType<ChatsListResponse, z.ZodTypeDef, unknown> =
    z.union([
        z.lazy(() => ChatsListSuccessfulRequest$inboundSchema),
        components.BadRequestError$inboundSchema,
        components.AuthenticationFailedError$inboundSchema,
    ]);

/** @internal */
export type ChatsListResponse$Outbound =
    | ChatsListSuccessfulRequest$Outbound
    | components.BadRequestError$Outbound
    | components.AuthenticationFailedError$Outbound;

/** @internal */
export const ChatsListResponse$outboundSchema: z.ZodType<
    ChatsListResponse$Outbound,
    z.ZodTypeDef,
    ChatsListResponse
> = z.union([
    z.lazy(() => ChatsListSuccessfulRequest$outboundSchema),
    components.BadRequestError$outboundSchema,
    components.AuthenticationFailedError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatsListResponse$ {
    /** @deprecated use `ChatsListResponse$inboundSchema` instead. */
    export const inboundSchema = ChatsListResponse$inboundSchema;
    /** @deprecated use `ChatsListResponse$outboundSchema` instead. */
    export const outboundSchema = ChatsListResponse$outboundSchema;
    /** @deprecated use `ChatsListResponse$Outbound` instead. */
    export type Outbound = ChatsListResponse$Outbound;
}
