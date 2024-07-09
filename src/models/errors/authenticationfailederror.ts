/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AuthenticationFailedErrorError = {
    InvalidUsernamePasswordOrAccessToken: "Invalid username, password, or access token",
} as const;
export type AuthenticationFailedErrorError = ClosedEnum<typeof AuthenticationFailedErrorError>;

/**
 * The given access token is invalid
 */
export type AuthenticationFailedErrorData = {
    success: boolean;
    error: AuthenticationFailedErrorError;
};

/**
 * The given access token is invalid
 */
export class AuthenticationFailedError extends Error {
    success: boolean;
    error: AuthenticationFailedErrorError;

    /** The original data that was passed to this error instance. */
    data$: AuthenticationFailedErrorData;

    constructor(err: AuthenticationFailedErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.success = err.success;
        this.error = err.error;

        this.name = "AuthenticationFailedError";
    }
}

/** @internal */
export const AuthenticationFailedErrorError$inboundSchema: z.ZodNativeEnum<
    typeof AuthenticationFailedErrorError
> = z.nativeEnum(AuthenticationFailedErrorError);

/** @internal */
export const AuthenticationFailedErrorError$outboundSchema: z.ZodNativeEnum<
    typeof AuthenticationFailedErrorError
> = AuthenticationFailedErrorError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationFailedErrorError$ {
    /** @deprecated use `AuthenticationFailedErrorError$inboundSchema` instead. */
    export const inboundSchema = AuthenticationFailedErrorError$inboundSchema;
    /** @deprecated use `AuthenticationFailedErrorError$outboundSchema` instead. */
    export const outboundSchema = AuthenticationFailedErrorError$outboundSchema;
}

/** @internal */
export const AuthenticationFailedError$inboundSchema: z.ZodType<
    AuthenticationFailedError,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        success: z.boolean().default(false),
        error: AuthenticationFailedErrorError$inboundSchema,
    })
    .transform((v) => {
        return new AuthenticationFailedError(v);
    });

/** @internal */
export type AuthenticationFailedError$Outbound = {
    success: boolean;
    error: string;
};

/** @internal */
export const AuthenticationFailedError$outboundSchema: z.ZodType<
    AuthenticationFailedError$Outbound,
    z.ZodTypeDef,
    AuthenticationFailedError
> = z
    .instanceof(AuthenticationFailedError)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            success: z.boolean().default(false),
            error: AuthenticationFailedErrorError$outboundSchema,
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticationFailedError$ {
    /** @deprecated use `AuthenticationFailedError$inboundSchema` instead. */
    export const inboundSchema = AuthenticationFailedError$inboundSchema;
    /** @deprecated use `AuthenticationFailedError$outboundSchema` instead. */
    export const outboundSchema = AuthenticationFailedError$outboundSchema;
    /** @deprecated use `AuthenticationFailedError$Outbound` instead. */
    export type Outbound = AuthenticationFailedError$Outbound;
}
