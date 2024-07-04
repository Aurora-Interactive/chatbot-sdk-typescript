/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AccountInBadStandingErrorError = {
    AccountAssociatedWithThisAccessTokenIsNotSubscribedToAPaidPlan:
        "Account associated with this access token is not subscribed to a paid plan",
} as const;
export type AccountInBadStandingErrorError = ClosedEnum<typeof AccountInBadStandingErrorError>;

/**
 * Given user is not allowed to use the API, usually because they don't have an active subscription to our services
 */
export type AccountInBadStandingErrorData = {
    success: boolean;
    error: AccountInBadStandingErrorError;
};

/**
 * Given user is not allowed to use the API, usually because they don't have an active subscription to our services
 */
export class AccountInBadStandingError extends Error {
    success: boolean;
    error: AccountInBadStandingErrorError;

    /** The original data that was passed to this error instance. */
    data$: AccountInBadStandingErrorData;

    constructor(err: AccountInBadStandingErrorData) {
        super("");
        this.data$ = err;

        this.success = err.success;
        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "AccountInBadStandingError";
    }
}

/** @internal */
export namespace AccountInBadStandingErrorError$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AccountInBadStandingErrorError> =
        z.nativeEnum(AccountInBadStandingErrorError);
    export const outboundSchema: z.ZodNativeEnum<typeof AccountInBadStandingErrorError> =
        inboundSchema;
}

/** @internal */
export namespace AccountInBadStandingError$ {
    export const inboundSchema: z.ZodType<AccountInBadStandingError, z.ZodTypeDef, unknown> = z
        .object({
            success: z.boolean().default(false),
            error: AccountInBadStandingErrorError$.inboundSchema,
        })
        .transform((v) => {
            return new AccountInBadStandingError(v);
        });

    export type Outbound = {
        success: boolean;
        error: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountInBadStandingError> = z
        .instanceof(AccountInBadStandingError)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                success: z.boolean().default(false),
                error: AccountInBadStandingErrorError$.outboundSchema,
            })
        );
}
