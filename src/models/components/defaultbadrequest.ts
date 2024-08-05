/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ErrorT = {
    OneOrMoreAPIParametersAreMalformedPleaseCheckYourRequestAndTryAgain:
        "One or more API parameters are malformed. Please check your request and try again",
} as const;
export type ErrorT = ClosedEnum<typeof ErrorT>;

/**
 * One or more request parameters are malformed or invalid
 */
export type DefaultBadRequest = {
    success?: boolean | undefined;
    error: ErrorT;
};

/** @internal */
export const ErrorT$inboundSchema: z.ZodNativeEnum<typeof ErrorT> = z.nativeEnum(ErrorT);

/** @internal */
export const ErrorT$outboundSchema: z.ZodNativeEnum<typeof ErrorT> = ErrorT$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    export const inboundSchema = ErrorT$inboundSchema;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    export const outboundSchema = ErrorT$outboundSchema;
}

/** @internal */
export const DefaultBadRequest$inboundSchema: z.ZodType<DefaultBadRequest, z.ZodTypeDef, unknown> =
    z.object({
        success: z.boolean().default(false),
        error: ErrorT$inboundSchema,
    });

/** @internal */
export type DefaultBadRequest$Outbound = {
    success: boolean;
    error: string;
};

/** @internal */
export const DefaultBadRequest$outboundSchema: z.ZodType<
    DefaultBadRequest$Outbound,
    z.ZodTypeDef,
    DefaultBadRequest
> = z.object({
    success: z.boolean().default(false),
    error: ErrorT$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultBadRequest$ {
    /** @deprecated use `DefaultBadRequest$inboundSchema` instead. */
    export const inboundSchema = DefaultBadRequest$inboundSchema;
    /** @deprecated use `DefaultBadRequest$outboundSchema` instead. */
    export const outboundSchema = DefaultBadRequest$outboundSchema;
    /** @deprecated use `DefaultBadRequest$Outbound` instead. */
    export type Outbound = DefaultBadRequest$Outbound;
}