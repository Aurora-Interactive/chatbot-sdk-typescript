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
        super("");
        this.data$ = err;

        this.success = err.success;
        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "AuthenticationFailedError";
    }
}

/** @internal */
export namespace AuthenticationFailedErrorError$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AuthenticationFailedErrorError> =
        z.nativeEnum(AuthenticationFailedErrorError);
    export const outboundSchema: z.ZodNativeEnum<typeof AuthenticationFailedErrorError> =
        inboundSchema;
}

/** @internal */
export namespace AuthenticationFailedError$ {
    export const inboundSchema: z.ZodType<AuthenticationFailedError, z.ZodTypeDef, unknown> = z
        .object({
            success: z.boolean().default(false),
            error: AuthenticationFailedErrorError$.inboundSchema,
        })
        .transform((v) => {
            return new AuthenticationFailedError(v);
        });

    export type Outbound = {
        success: boolean;
        error: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthenticationFailedError> = z
        .instanceof(AuthenticationFailedError)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                success: z.boolean().default(false),
                error: AuthenticationFailedErrorError$.outboundSchema,
            })
        );
}