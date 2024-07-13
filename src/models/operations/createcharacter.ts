/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateCharacterGlobals = {
    accessToken?: string | undefined;
};

export type SpecialMessages = {
    startsWith: string;
    endsWith: Array<string>;
    prompt: string;
};

export type CreateCharacterRequestBody = {
    name: string;
    description: string;
    /**
     * base64-encoded AVIF image data
     */
    iconImage: string;
    /**
     * base64-encoded AVIF image data
     */
    bannerImage: string;
    aiPrompt: string;
    initialResponse: string;
    specialMessages: Array<SpecialMessages>;
};

export const CreateCharacterResponseBodyError = {
    CharacterWithThisNameAlreadyExists: "Character with this name already exists",
} as const;
export type CreateCharacterResponseBodyError = ClosedEnum<typeof CreateCharacterResponseBodyError>;

export type DuplicateCharacterErrorResponse = {
    success?: boolean | undefined;
    error: CreateCharacterResponseBodyError;
};

/**
 * Bad request
 */
export type CreateCharacterResponseBody =
    | components.BadRequestError
    | DuplicateCharacterErrorResponse;

/**
 * Character was created successfully
 */
export type CreateCharacterSuccessfulRequest = {
    success?: boolean | undefined;
    characterId: number;
};

export type CreateCharacterResponse =
    | CreateCharacterSuccessfulRequest
    | components.AuthenticationFailedError
    | components.AccountInBadStandingError
    | components.BadRequestError
    | DuplicateCharacterErrorResponse;

/** @internal */
export const CreateCharacterGlobals$inboundSchema: z.ZodType<
    CreateCharacterGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type CreateCharacterGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const CreateCharacterGlobals$outboundSchema: z.ZodType<
    CreateCharacterGlobals$Outbound,
    z.ZodTypeDef,
    CreateCharacterGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCharacterGlobals$ {
    /** @deprecated use `CreateCharacterGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateCharacterGlobals$inboundSchema;
    /** @deprecated use `CreateCharacterGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateCharacterGlobals$outboundSchema;
    /** @deprecated use `CreateCharacterGlobals$Outbound` instead. */
    export type Outbound = CreateCharacterGlobals$Outbound;
}

/** @internal */
export const SpecialMessages$inboundSchema: z.ZodType<SpecialMessages, z.ZodTypeDef, unknown> =
    z.object({
        startsWith: z.string(),
        endsWith: z.array(z.string()),
        prompt: z.string(),
    });

/** @internal */
export type SpecialMessages$Outbound = {
    startsWith: string;
    endsWith: Array<string>;
    prompt: string;
};

/** @internal */
export const SpecialMessages$outboundSchema: z.ZodType<
    SpecialMessages$Outbound,
    z.ZodTypeDef,
    SpecialMessages
> = z.object({
    startsWith: z.string(),
    endsWith: z.array(z.string()),
    prompt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SpecialMessages$ {
    /** @deprecated use `SpecialMessages$inboundSchema` instead. */
    export const inboundSchema = SpecialMessages$inboundSchema;
    /** @deprecated use `SpecialMessages$outboundSchema` instead. */
    export const outboundSchema = SpecialMessages$outboundSchema;
    /** @deprecated use `SpecialMessages$Outbound` instead. */
    export type Outbound = SpecialMessages$Outbound;
}

/** @internal */
export const CreateCharacterRequestBody$inboundSchema: z.ZodType<
    CreateCharacterRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    description: z.string(),
    iconImage: z.string(),
    bannerImage: z.string(),
    aiPrompt: z.string(),
    initialResponse: z.string(),
    specialMessages: z.array(z.lazy(() => SpecialMessages$inboundSchema)),
});

/** @internal */
export type CreateCharacterRequestBody$Outbound = {
    name: string;
    description: string;
    iconImage: string;
    bannerImage: string;
    aiPrompt: string;
    initialResponse: string;
    specialMessages: Array<SpecialMessages$Outbound>;
};

/** @internal */
export const CreateCharacterRequestBody$outboundSchema: z.ZodType<
    CreateCharacterRequestBody$Outbound,
    z.ZodTypeDef,
    CreateCharacterRequestBody
> = z.object({
    name: z.string(),
    description: z.string(),
    iconImage: z.string(),
    bannerImage: z.string(),
    aiPrompt: z.string(),
    initialResponse: z.string(),
    specialMessages: z.array(z.lazy(() => SpecialMessages$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCharacterRequestBody$ {
    /** @deprecated use `CreateCharacterRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateCharacterRequestBody$inboundSchema;
    /** @deprecated use `CreateCharacterRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateCharacterRequestBody$outboundSchema;
    /** @deprecated use `CreateCharacterRequestBody$Outbound` instead. */
    export type Outbound = CreateCharacterRequestBody$Outbound;
}

/** @internal */
export const CreateCharacterResponseBodyError$inboundSchema: z.ZodNativeEnum<
    typeof CreateCharacterResponseBodyError
> = z.nativeEnum(CreateCharacterResponseBodyError);

/** @internal */
export const CreateCharacterResponseBodyError$outboundSchema: z.ZodNativeEnum<
    typeof CreateCharacterResponseBodyError
> = CreateCharacterResponseBodyError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCharacterResponseBodyError$ {
    /** @deprecated use `CreateCharacterResponseBodyError$inboundSchema` instead. */
    export const inboundSchema = CreateCharacterResponseBodyError$inboundSchema;
    /** @deprecated use `CreateCharacterResponseBodyError$outboundSchema` instead. */
    export const outboundSchema = CreateCharacterResponseBodyError$outboundSchema;
}

/** @internal */
export const DuplicateCharacterErrorResponse$inboundSchema: z.ZodType<
    DuplicateCharacterErrorResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    error: CreateCharacterResponseBodyError$inboundSchema,
});

/** @internal */
export type DuplicateCharacterErrorResponse$Outbound = {
    success: boolean;
    error: string;
};

/** @internal */
export const DuplicateCharacterErrorResponse$outboundSchema: z.ZodType<
    DuplicateCharacterErrorResponse$Outbound,
    z.ZodTypeDef,
    DuplicateCharacterErrorResponse
> = z.object({
    success: z.boolean().default(true),
    error: CreateCharacterResponseBodyError$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DuplicateCharacterErrorResponse$ {
    /** @deprecated use `DuplicateCharacterErrorResponse$inboundSchema` instead. */
    export const inboundSchema = DuplicateCharacterErrorResponse$inboundSchema;
    /** @deprecated use `DuplicateCharacterErrorResponse$outboundSchema` instead. */
    export const outboundSchema = DuplicateCharacterErrorResponse$outboundSchema;
    /** @deprecated use `DuplicateCharacterErrorResponse$Outbound` instead. */
    export type Outbound = DuplicateCharacterErrorResponse$Outbound;
}

/** @internal */
export const CreateCharacterResponseBody$inboundSchema: z.ZodType<
    CreateCharacterResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.BadRequestError$inboundSchema,
    z.lazy(() => DuplicateCharacterErrorResponse$inboundSchema),
]);

/** @internal */
export type CreateCharacterResponseBody$Outbound =
    | components.BadRequestError$Outbound
    | DuplicateCharacterErrorResponse$Outbound;

/** @internal */
export const CreateCharacterResponseBody$outboundSchema: z.ZodType<
    CreateCharacterResponseBody$Outbound,
    z.ZodTypeDef,
    CreateCharacterResponseBody
> = z.union([
    components.BadRequestError$outboundSchema,
    z.lazy(() => DuplicateCharacterErrorResponse$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCharacterResponseBody$ {
    /** @deprecated use `CreateCharacterResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateCharacterResponseBody$inboundSchema;
    /** @deprecated use `CreateCharacterResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateCharacterResponseBody$outboundSchema;
    /** @deprecated use `CreateCharacterResponseBody$Outbound` instead. */
    export type Outbound = CreateCharacterResponseBody$Outbound;
}

/** @internal */
export const CreateCharacterSuccessfulRequest$inboundSchema: z.ZodType<
    CreateCharacterSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    characterId: z.number().int(),
});

/** @internal */
export type CreateCharacterSuccessfulRequest$Outbound = {
    success: boolean;
    characterId: number;
};

/** @internal */
export const CreateCharacterSuccessfulRequest$outboundSchema: z.ZodType<
    CreateCharacterSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    CreateCharacterSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    characterId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCharacterSuccessfulRequest$ {
    /** @deprecated use `CreateCharacterSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = CreateCharacterSuccessfulRequest$inboundSchema;
    /** @deprecated use `CreateCharacterSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = CreateCharacterSuccessfulRequest$outboundSchema;
    /** @deprecated use `CreateCharacterSuccessfulRequest$Outbound` instead. */
    export type Outbound = CreateCharacterSuccessfulRequest$Outbound;
}

/** @internal */
export const CreateCharacterResponse$inboundSchema: z.ZodType<
    CreateCharacterResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => CreateCharacterSuccessfulRequest$inboundSchema),
    components.AuthenticationFailedError$inboundSchema,
    components.AccountInBadStandingError$inboundSchema,
    z.union([
        components.BadRequestError$inboundSchema,
        z.lazy(() => DuplicateCharacterErrorResponse$inboundSchema),
    ]),
]);

/** @internal */
export type CreateCharacterResponse$Outbound =
    | CreateCharacterSuccessfulRequest$Outbound
    | components.AuthenticationFailedError$Outbound
    | components.AccountInBadStandingError$Outbound
    | components.BadRequestError$Outbound
    | DuplicateCharacterErrorResponse$Outbound;

/** @internal */
export const CreateCharacterResponse$outboundSchema: z.ZodType<
    CreateCharacterResponse$Outbound,
    z.ZodTypeDef,
    CreateCharacterResponse
> = z.union([
    z.lazy(() => CreateCharacterSuccessfulRequest$outboundSchema),
    components.AuthenticationFailedError$outboundSchema,
    components.AccountInBadStandingError$outboundSchema,
    z.union([
        components.BadRequestError$outboundSchema,
        z.lazy(() => DuplicateCharacterErrorResponse$outboundSchema),
    ]),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCharacterResponse$ {
    /** @deprecated use `CreateCharacterResponse$inboundSchema` instead. */
    export const inboundSchema = CreateCharacterResponse$inboundSchema;
    /** @deprecated use `CreateCharacterResponse$outboundSchema` instead. */
    export const outboundSchema = CreateCharacterResponse$outboundSchema;
    /** @deprecated use `CreateCharacterResponse$Outbound` instead. */
    export type Outbound = CreateCharacterResponse$Outbound;
}
