/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type UsersSetUserInfoGlobals = {
    accessToken?: string | undefined;
};

export type UsersSetUserInfoRequestBody = {
    username: string;
    email: string;
    preferredTtsCharacter: number;
    password: string;
};

export type UsersSetUserInfoResponse =
    | components.SuccessfulRequest
    | components.DefaultBadRequest
    | components.DefaultUnauthorizedResponse
    | components.RateLimitReachedError;

/** @internal */
export const UsersSetUserInfoGlobals$inboundSchema: z.ZodType<
    UsersSetUserInfoGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type UsersSetUserInfoGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const UsersSetUserInfoGlobals$outboundSchema: z.ZodType<
    UsersSetUserInfoGlobals$Outbound,
    z.ZodTypeDef,
    UsersSetUserInfoGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersSetUserInfoGlobals$ {
    /** @deprecated use `UsersSetUserInfoGlobals$inboundSchema` instead. */
    export const inboundSchema = UsersSetUserInfoGlobals$inboundSchema;
    /** @deprecated use `UsersSetUserInfoGlobals$outboundSchema` instead. */
    export const outboundSchema = UsersSetUserInfoGlobals$outboundSchema;
    /** @deprecated use `UsersSetUserInfoGlobals$Outbound` instead. */
    export type Outbound = UsersSetUserInfoGlobals$Outbound;
}

/** @internal */
export const UsersSetUserInfoRequestBody$inboundSchema: z.ZodType<
    UsersSetUserInfoRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    username: z.string(),
    email: z.string(),
    preferredTtsCharacter: z.number().int(),
    password: z.string(),
});

/** @internal */
export type UsersSetUserInfoRequestBody$Outbound = {
    username: string;
    email: string;
    preferredTtsCharacter: number;
    password: string;
};

/** @internal */
export const UsersSetUserInfoRequestBody$outboundSchema: z.ZodType<
    UsersSetUserInfoRequestBody$Outbound,
    z.ZodTypeDef,
    UsersSetUserInfoRequestBody
> = z.object({
    username: z.string(),
    email: z.string(),
    preferredTtsCharacter: z.number().int(),
    password: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersSetUserInfoRequestBody$ {
    /** @deprecated use `UsersSetUserInfoRequestBody$inboundSchema` instead. */
    export const inboundSchema = UsersSetUserInfoRequestBody$inboundSchema;
    /** @deprecated use `UsersSetUserInfoRequestBody$outboundSchema` instead. */
    export const outboundSchema = UsersSetUserInfoRequestBody$outboundSchema;
    /** @deprecated use `UsersSetUserInfoRequestBody$Outbound` instead. */
    export type Outbound = UsersSetUserInfoRequestBody$Outbound;
}

/** @internal */
export const UsersSetUserInfoResponse$inboundSchema: z.ZodType<
    UsersSetUserInfoResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.SuccessfulRequest$inboundSchema,
    components.DefaultBadRequest$inboundSchema,
    components.DefaultUnauthorizedResponse$inboundSchema,
    components.RateLimitReachedError$inboundSchema,
]);

/** @internal */
export type UsersSetUserInfoResponse$Outbound =
    | components.SuccessfulRequest$Outbound
    | components.DefaultBadRequest$Outbound
    | components.DefaultUnauthorizedResponse$Outbound
    | components.RateLimitReachedError$Outbound;

/** @internal */
export const UsersSetUserInfoResponse$outboundSchema: z.ZodType<
    UsersSetUserInfoResponse$Outbound,
    z.ZodTypeDef,
    UsersSetUserInfoResponse
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
export namespace UsersSetUserInfoResponse$ {
    /** @deprecated use `UsersSetUserInfoResponse$inboundSchema` instead. */
    export const inboundSchema = UsersSetUserInfoResponse$inboundSchema;
    /** @deprecated use `UsersSetUserInfoResponse$outboundSchema` instead. */
    export const outboundSchema = UsersSetUserInfoResponse$outboundSchema;
    /** @deprecated use `UsersSetUserInfoResponse$Outbound` instead. */
    export type Outbound = UsersSetUserInfoResponse$Outbound;
}
