/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetCharactersGlobals = {
    accessToken?: string | undefined;
};

export type GetCharactersRequest = {};

export type CharacterOverviewResponse = {
    name: string;
    description: string;
    isOfficial: boolean;
    id: number;
};

/**
 * A JSON array of character metadata for each character
 */
export type GetCharactersSuccessfulRequest = {
    success?: boolean | undefined;
    characters: Array<CharacterOverviewResponse>;
};

export type GetCharactersResponse =
    | GetCharactersSuccessfulRequest
    | components.BadRequestError
    | components.AuthenticationFailedError;

/** @internal */
export const GetCharactersGlobals$inboundSchema: z.ZodType<
    GetCharactersGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type GetCharactersGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const GetCharactersGlobals$outboundSchema: z.ZodType<
    GetCharactersGlobals$Outbound,
    z.ZodTypeDef,
    GetCharactersGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCharactersGlobals$ {
    /** @deprecated use `GetCharactersGlobals$inboundSchema` instead. */
    export const inboundSchema = GetCharactersGlobals$inboundSchema;
    /** @deprecated use `GetCharactersGlobals$outboundSchema` instead. */
    export const outboundSchema = GetCharactersGlobals$outboundSchema;
    /** @deprecated use `GetCharactersGlobals$Outbound` instead. */
    export type Outbound = GetCharactersGlobals$Outbound;
}

/** @internal */
export const GetCharactersRequest$inboundSchema: z.ZodType<
    GetCharactersRequest,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetCharactersRequest$Outbound = {};

/** @internal */
export const GetCharactersRequest$outboundSchema: z.ZodType<
    GetCharactersRequest$Outbound,
    z.ZodTypeDef,
    GetCharactersRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCharactersRequest$ {
    /** @deprecated use `GetCharactersRequest$inboundSchema` instead. */
    export const inboundSchema = GetCharactersRequest$inboundSchema;
    /** @deprecated use `GetCharactersRequest$outboundSchema` instead. */
    export const outboundSchema = GetCharactersRequest$outboundSchema;
    /** @deprecated use `GetCharactersRequest$Outbound` instead. */
    export type Outbound = GetCharactersRequest$Outbound;
}

/** @internal */
export const CharacterOverviewResponse$inboundSchema: z.ZodType<
    CharacterOverviewResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    description: z.string(),
    isOfficial: z.boolean(),
    id: z.number().int(),
});

/** @internal */
export type CharacterOverviewResponse$Outbound = {
    name: string;
    description: string;
    isOfficial: boolean;
    id: number;
};

/** @internal */
export const CharacterOverviewResponse$outboundSchema: z.ZodType<
    CharacterOverviewResponse$Outbound,
    z.ZodTypeDef,
    CharacterOverviewResponse
> = z.object({
    name: z.string(),
    description: z.string(),
    isOfficial: z.boolean(),
    id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CharacterOverviewResponse$ {
    /** @deprecated use `CharacterOverviewResponse$inboundSchema` instead. */
    export const inboundSchema = CharacterOverviewResponse$inboundSchema;
    /** @deprecated use `CharacterOverviewResponse$outboundSchema` instead. */
    export const outboundSchema = CharacterOverviewResponse$outboundSchema;
    /** @deprecated use `CharacterOverviewResponse$Outbound` instead. */
    export type Outbound = CharacterOverviewResponse$Outbound;
}

/** @internal */
export const GetCharactersSuccessfulRequest$inboundSchema: z.ZodType<
    GetCharactersSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    characters: z.array(z.lazy(() => CharacterOverviewResponse$inboundSchema)),
});

/** @internal */
export type GetCharactersSuccessfulRequest$Outbound = {
    success: boolean;
    characters: Array<CharacterOverviewResponse$Outbound>;
};

/** @internal */
export const GetCharactersSuccessfulRequest$outboundSchema: z.ZodType<
    GetCharactersSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    GetCharactersSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    characters: z.array(z.lazy(() => CharacterOverviewResponse$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCharactersSuccessfulRequest$ {
    /** @deprecated use `GetCharactersSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = GetCharactersSuccessfulRequest$inboundSchema;
    /** @deprecated use `GetCharactersSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = GetCharactersSuccessfulRequest$outboundSchema;
    /** @deprecated use `GetCharactersSuccessfulRequest$Outbound` instead. */
    export type Outbound = GetCharactersSuccessfulRequest$Outbound;
}

/** @internal */
export const GetCharactersResponse$inboundSchema: z.ZodType<
    GetCharactersResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetCharactersSuccessfulRequest$inboundSchema),
    components.BadRequestError$inboundSchema,
    components.AuthenticationFailedError$inboundSchema,
]);

/** @internal */
export type GetCharactersResponse$Outbound =
    | GetCharactersSuccessfulRequest$Outbound
    | components.BadRequestError$Outbound
    | components.AuthenticationFailedError$Outbound;

/** @internal */
export const GetCharactersResponse$outboundSchema: z.ZodType<
    GetCharactersResponse$Outbound,
    z.ZodTypeDef,
    GetCharactersResponse
> = z.union([
    z.lazy(() => GetCharactersSuccessfulRequest$outboundSchema),
    components.BadRequestError$outboundSchema,
    components.AuthenticationFailedError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCharactersResponse$ {
    /** @deprecated use `GetCharactersResponse$inboundSchema` instead. */
    export const inboundSchema = GetCharactersResponse$inboundSchema;
    /** @deprecated use `GetCharactersResponse$outboundSchema` instead. */
    export const outboundSchema = GetCharactersResponse$outboundSchema;
    /** @deprecated use `GetCharactersResponse$Outbound` instead. */
    export type Outbound = GetCharactersResponse$Outbound;
}
