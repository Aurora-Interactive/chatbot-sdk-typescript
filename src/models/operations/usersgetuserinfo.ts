/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type UsersGetUserInfoGlobals = {
    accessToken?: string | undefined;
};

export type UsersGetUserInfoRequest = {};

/**
 * User info
 */
export type UsersGetUserInfoSuccessfulRequest = {
    success?: boolean | undefined;
    username: string;
    email: string;
};

export type UsersGetUserInfoResponse =
    | components.DefaultUnauthorizedResponse
    | UsersGetUserInfoSuccessfulRequest
    | components.RateLimitReachedError;

/** @internal */
export const UsersGetUserInfoGlobals$inboundSchema: z.ZodType<
    UsersGetUserInfoGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type UsersGetUserInfoGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const UsersGetUserInfoGlobals$outboundSchema: z.ZodType<
    UsersGetUserInfoGlobals$Outbound,
    z.ZodTypeDef,
    UsersGetUserInfoGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersGetUserInfoGlobals$ {
    /** @deprecated use `UsersGetUserInfoGlobals$inboundSchema` instead. */
    export const inboundSchema = UsersGetUserInfoGlobals$inboundSchema;
    /** @deprecated use `UsersGetUserInfoGlobals$outboundSchema` instead. */
    export const outboundSchema = UsersGetUserInfoGlobals$outboundSchema;
    /** @deprecated use `UsersGetUserInfoGlobals$Outbound` instead. */
    export type Outbound = UsersGetUserInfoGlobals$Outbound;
}

/** @internal */
export const UsersGetUserInfoRequest$inboundSchema: z.ZodType<
    UsersGetUserInfoRequest,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UsersGetUserInfoRequest$Outbound = {};

/** @internal */
export const UsersGetUserInfoRequest$outboundSchema: z.ZodType<
    UsersGetUserInfoRequest$Outbound,
    z.ZodTypeDef,
    UsersGetUserInfoRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersGetUserInfoRequest$ {
    /** @deprecated use `UsersGetUserInfoRequest$inboundSchema` instead. */
    export const inboundSchema = UsersGetUserInfoRequest$inboundSchema;
    /** @deprecated use `UsersGetUserInfoRequest$outboundSchema` instead. */
    export const outboundSchema = UsersGetUserInfoRequest$outboundSchema;
    /** @deprecated use `UsersGetUserInfoRequest$Outbound` instead. */
    export type Outbound = UsersGetUserInfoRequest$Outbound;
}

/** @internal */
export const UsersGetUserInfoSuccessfulRequest$inboundSchema: z.ZodType<
    UsersGetUserInfoSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    username: z.string(),
    email: z.string(),
});

/** @internal */
export type UsersGetUserInfoSuccessfulRequest$Outbound = {
    success: boolean;
    username: string;
    email: string;
};

/** @internal */
export const UsersGetUserInfoSuccessfulRequest$outboundSchema: z.ZodType<
    UsersGetUserInfoSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    UsersGetUserInfoSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    username: z.string(),
    email: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersGetUserInfoSuccessfulRequest$ {
    /** @deprecated use `UsersGetUserInfoSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = UsersGetUserInfoSuccessfulRequest$inboundSchema;
    /** @deprecated use `UsersGetUserInfoSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = UsersGetUserInfoSuccessfulRequest$outboundSchema;
    /** @deprecated use `UsersGetUserInfoSuccessfulRequest$Outbound` instead. */
    export type Outbound = UsersGetUserInfoSuccessfulRequest$Outbound;
}

/** @internal */
export const UsersGetUserInfoResponse$inboundSchema: z.ZodType<
    UsersGetUserInfoResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.DefaultUnauthorizedResponse$inboundSchema,
    z.lazy(() => UsersGetUserInfoSuccessfulRequest$inboundSchema),
    components.RateLimitReachedError$inboundSchema,
]);

/** @internal */
export type UsersGetUserInfoResponse$Outbound =
    | components.DefaultUnauthorizedResponse$Outbound
    | UsersGetUserInfoSuccessfulRequest$Outbound
    | components.RateLimitReachedError$Outbound;

/** @internal */
export const UsersGetUserInfoResponse$outboundSchema: z.ZodType<
    UsersGetUserInfoResponse$Outbound,
    z.ZodTypeDef,
    UsersGetUserInfoResponse
> = z.union([
    components.DefaultUnauthorizedResponse$outboundSchema,
    z.lazy(() => UsersGetUserInfoSuccessfulRequest$outboundSchema),
    components.RateLimitReachedError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersGetUserInfoResponse$ {
    /** @deprecated use `UsersGetUserInfoResponse$inboundSchema` instead. */
    export const inboundSchema = UsersGetUserInfoResponse$inboundSchema;
    /** @deprecated use `UsersGetUserInfoResponse$outboundSchema` instead. */
    export const outboundSchema = UsersGetUserInfoResponse$outboundSchema;
    /** @deprecated use `UsersGetUserInfoResponse$Outbound` instead. */
    export type Outbound = UsersGetUserInfoResponse$Outbound;
}
