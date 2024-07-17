/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type CharactersGetGlobals = {
    accessToken?: string | undefined;
};

export type CharactersGetRequest = {
    characterId: number;
};

/**
 * Character data
 */
export type CharactersGetResponseBody = {
    /**
     * base64-encoded AVIF image data
     */
    iconImage: string;
    name: string;
    description: string;
    isOfficial: boolean;
};

export type CharactersGetResponse =
    | components.BadRequestError
    | components.AuthenticationFailedError
    | CharactersGetResponseBody;

/** @internal */
export const CharactersGetGlobals$inboundSchema: z.ZodType<
    CharactersGetGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type CharactersGetGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const CharactersGetGlobals$outboundSchema: z.ZodType<
    CharactersGetGlobals$Outbound,
    z.ZodTypeDef,
    CharactersGetGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CharactersGetGlobals$ {
    /** @deprecated use `CharactersGetGlobals$inboundSchema` instead. */
    export const inboundSchema = CharactersGetGlobals$inboundSchema;
    /** @deprecated use `CharactersGetGlobals$outboundSchema` instead. */
    export const outboundSchema = CharactersGetGlobals$outboundSchema;
    /** @deprecated use `CharactersGetGlobals$Outbound` instead. */
    export type Outbound = CharactersGetGlobals$Outbound;
}

/** @internal */
export const CharactersGetRequest$inboundSchema: z.ZodType<
    CharactersGetRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    characterId: z.number().int(),
});

/** @internal */
export type CharactersGetRequest$Outbound = {
    characterId: number;
};

/** @internal */
export const CharactersGetRequest$outboundSchema: z.ZodType<
    CharactersGetRequest$Outbound,
    z.ZodTypeDef,
    CharactersGetRequest
> = z.object({
    characterId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CharactersGetRequest$ {
    /** @deprecated use `CharactersGetRequest$inboundSchema` instead. */
    export const inboundSchema = CharactersGetRequest$inboundSchema;
    /** @deprecated use `CharactersGetRequest$outboundSchema` instead. */
    export const outboundSchema = CharactersGetRequest$outboundSchema;
    /** @deprecated use `CharactersGetRequest$Outbound` instead. */
    export type Outbound = CharactersGetRequest$Outbound;
}

/** @internal */
export const CharactersGetResponseBody$inboundSchema: z.ZodType<
    CharactersGetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    iconImage: z.string(),
    name: z.string(),
    description: z.string(),
    isOfficial: z.boolean(),
});

/** @internal */
export type CharactersGetResponseBody$Outbound = {
    iconImage: string;
    name: string;
    description: string;
    isOfficial: boolean;
};

/** @internal */
export const CharactersGetResponseBody$outboundSchema: z.ZodType<
    CharactersGetResponseBody$Outbound,
    z.ZodTypeDef,
    CharactersGetResponseBody
> = z.object({
    iconImage: z.string(),
    name: z.string(),
    description: z.string(),
    isOfficial: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CharactersGetResponseBody$ {
    /** @deprecated use `CharactersGetResponseBody$inboundSchema` instead. */
    export const inboundSchema = CharactersGetResponseBody$inboundSchema;
    /** @deprecated use `CharactersGetResponseBody$outboundSchema` instead. */
    export const outboundSchema = CharactersGetResponseBody$outboundSchema;
    /** @deprecated use `CharactersGetResponseBody$Outbound` instead. */
    export type Outbound = CharactersGetResponseBody$Outbound;
}

/** @internal */
export const CharactersGetResponse$inboundSchema: z.ZodType<
    CharactersGetResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.BadRequestError$inboundSchema,
    components.AuthenticationFailedError$inboundSchema,
    z.lazy(() => CharactersGetResponseBody$inboundSchema),
]);

/** @internal */
export type CharactersGetResponse$Outbound =
    | components.BadRequestError$Outbound
    | components.AuthenticationFailedError$Outbound
    | CharactersGetResponseBody$Outbound;

/** @internal */
export const CharactersGetResponse$outboundSchema: z.ZodType<
    CharactersGetResponse$Outbound,
    z.ZodTypeDef,
    CharactersGetResponse
> = z.union([
    components.BadRequestError$outboundSchema,
    components.AuthenticationFailedError$outboundSchema,
    z.lazy(() => CharactersGetResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CharactersGetResponse$ {
    /** @deprecated use `CharactersGetResponse$inboundSchema` instead. */
    export const inboundSchema = CharactersGetResponse$inboundSchema;
    /** @deprecated use `CharactersGetResponse$outboundSchema` instead. */
    export const outboundSchema = CharactersGetResponse$outboundSchema;
    /** @deprecated use `CharactersGetResponse$Outbound` instead. */
    export type Outbound = CharactersGetResponse$Outbound;
}
