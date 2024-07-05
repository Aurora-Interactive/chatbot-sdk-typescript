/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    AuthenticationFailedError,
    AuthenticationFailedError$,
} from "./authenticationfailederror.js";
import { BadRequestError, BadRequestError$ } from "./badrequesterror.js";
import { UnauthorizedIdError, UnauthorizedIdError$ } from "./unauthorizediderror.js";
import * as z from "zod";

/**
 * Unauthorized
 */
export type GetMessageContextMessagesResponseBody = AuthenticationFailedError | UnauthorizedIdError;

export const GetMessageContextResponseBodyError = {
    InvalidChatID: "Invalid chat ID",
} as const;
export type GetMessageContextResponseBodyError = ClosedEnum<
    typeof GetMessageContextResponseBodyError
>;

export type ResponseBodyInvalidChatIdErrorData = {
    success: boolean;
    error: GetMessageContextResponseBodyError;
};

export class ResponseBodyInvalidChatIdError extends Error {
    success: boolean;
    error: GetMessageContextResponseBodyError;

    /** The original data that was passed to this error instance. */
    data$: ResponseBodyInvalidChatIdErrorData;

    constructor(err: ResponseBodyInvalidChatIdErrorData) {
        super("");
        this.data$ = err;

        this.success = err.success;
        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ResponseBodyInvalidChatIdError";
    }
}

/**
 * Bad request
 */
export type GetMessageContextResponseBody = BadRequestError | ResponseBodyInvalidChatIdError;

/** @internal */
export namespace GetMessageContextMessagesResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetMessageContextMessagesResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.union([AuthenticationFailedError$.inboundSchema, UnauthorizedIdError$.inboundSchema]);

    export type Outbound = AuthenticationFailedError$.Outbound | UnauthorizedIdError$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetMessageContextMessagesResponseBody
    > = z.union([AuthenticationFailedError$.outboundSchema, UnauthorizedIdError$.outboundSchema]);
}

/** @internal */
export namespace GetMessageContextResponseBodyError$ {
    export const inboundSchema: z.ZodNativeEnum<typeof GetMessageContextResponseBodyError> =
        z.nativeEnum(GetMessageContextResponseBodyError);
    export const outboundSchema: z.ZodNativeEnum<typeof GetMessageContextResponseBodyError> =
        inboundSchema;
}

/** @internal */
export namespace ResponseBodyInvalidChatIdError$ {
    export const inboundSchema: z.ZodType<ResponseBodyInvalidChatIdError, z.ZodTypeDef, unknown> = z
        .object({
            success: z.boolean().default(false),
            error: GetMessageContextResponseBodyError$.inboundSchema,
        })
        .transform((v) => {
            return new ResponseBodyInvalidChatIdError(v);
        });

    export type Outbound = {
        success: boolean;
        error: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseBodyInvalidChatIdError> =
        z
            .instanceof(ResponseBodyInvalidChatIdError)
            .transform((v) => v.data$)
            .pipe(
                z.object({
                    success: z.boolean().default(false),
                    error: GetMessageContextResponseBodyError$.outboundSchema,
                })
            );
}

/** @internal */
export namespace GetMessageContextResponseBody$ {
    export const inboundSchema: z.ZodType<GetMessageContextResponseBody, z.ZodTypeDef, unknown> =
        z.union([
            BadRequestError$.inboundSchema,
            z.lazy(() => ResponseBodyInvalidChatIdError$.inboundSchema),
        ]);

    export type Outbound = BadRequestError$.Outbound | ResponseBodyInvalidChatIdError$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMessageContextResponseBody> =
        z.union([
            BadRequestError$.outboundSchema,
            z.lazy(() => ResponseBodyInvalidChatIdError$.outboundSchema),
        ]);
}