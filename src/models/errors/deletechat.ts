/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    AuthenticationFailedError,
    AuthenticationFailedError$inboundSchema,
    AuthenticationFailedError$Outbound,
    AuthenticationFailedError$outboundSchema,
} from "./authenticationfailederror.js";
import {
    BadRequestError,
    BadRequestError$inboundSchema,
    BadRequestError$Outbound,
    BadRequestError$outboundSchema,
} from "./badrequesterror.js";
import {
    UnauthorizedIdError,
    UnauthorizedIdError$inboundSchema,
    UnauthorizedIdError$Outbound,
    UnauthorizedIdError$outboundSchema,
} from "./unauthorizediderror.js";
import * as z from "zod";

/**
 * Unauthorized
 */
export type DeleteChatChatsResponseBody = AuthenticationFailedError | UnauthorizedIdError;

export const DeleteChatResponseBodyError = {
    InvalidChatID: "Invalid chat ID",
} as const;
export type DeleteChatResponseBodyError = ClosedEnum<typeof DeleteChatResponseBodyError>;

export type DeleteChatResponseBodyInvalidChatIdErrorData = {
    success: boolean;
    error: DeleteChatResponseBodyError;
};

export class DeleteChatResponseBodyInvalidChatIdError extends Error {
    success: boolean;
    error: DeleteChatResponseBodyError;

    /** The original data that was passed to this error instance. */
    data$: DeleteChatResponseBodyInvalidChatIdErrorData;

    constructor(err: DeleteChatResponseBodyInvalidChatIdErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.success = err.success;
        this.error = err.error;

        this.name = "DeleteChatResponseBodyInvalidChatIdError";
    }
}

/**
 * Bad request
 */
export type DeleteChatResponseBody = BadRequestError | DeleteChatResponseBodyInvalidChatIdError;

/** @internal */
export const DeleteChatChatsResponseBody$inboundSchema: z.ZodType<
    DeleteChatChatsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([AuthenticationFailedError$inboundSchema, UnauthorizedIdError$inboundSchema]);

/** @internal */
export type DeleteChatChatsResponseBody$Outbound =
    | AuthenticationFailedError$Outbound
    | UnauthorizedIdError$Outbound;

/** @internal */
export const DeleteChatChatsResponseBody$outboundSchema: z.ZodType<
    DeleteChatChatsResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteChatChatsResponseBody
> = z.union([AuthenticationFailedError$outboundSchema, UnauthorizedIdError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteChatChatsResponseBody$ {
    /** @deprecated use `DeleteChatChatsResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeleteChatChatsResponseBody$inboundSchema;
    /** @deprecated use `DeleteChatChatsResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeleteChatChatsResponseBody$outboundSchema;
    /** @deprecated use `DeleteChatChatsResponseBody$Outbound` instead. */
    export type Outbound = DeleteChatChatsResponseBody$Outbound;
}

/** @internal */
export const DeleteChatResponseBodyError$inboundSchema: z.ZodNativeEnum<
    typeof DeleteChatResponseBodyError
> = z.nativeEnum(DeleteChatResponseBodyError);

/** @internal */
export const DeleteChatResponseBodyError$outboundSchema: z.ZodNativeEnum<
    typeof DeleteChatResponseBodyError
> = DeleteChatResponseBodyError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteChatResponseBodyError$ {
    /** @deprecated use `DeleteChatResponseBodyError$inboundSchema` instead. */
    export const inboundSchema = DeleteChatResponseBodyError$inboundSchema;
    /** @deprecated use `DeleteChatResponseBodyError$outboundSchema` instead. */
    export const outboundSchema = DeleteChatResponseBodyError$outboundSchema;
}

/** @internal */
export const DeleteChatResponseBodyInvalidChatIdError$inboundSchema: z.ZodType<
    DeleteChatResponseBodyInvalidChatIdError,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        success: z.boolean().default(false),
        error: DeleteChatResponseBodyError$inboundSchema,
    })
    .transform((v) => {
        return new DeleteChatResponseBodyInvalidChatIdError(v);
    });

/** @internal */
export type DeleteChatResponseBodyInvalidChatIdError$Outbound = {
    success: boolean;
    error: string;
};

/** @internal */
export const DeleteChatResponseBodyInvalidChatIdError$outboundSchema: z.ZodType<
    DeleteChatResponseBodyInvalidChatIdError$Outbound,
    z.ZodTypeDef,
    DeleteChatResponseBodyInvalidChatIdError
> = z
    .instanceof(DeleteChatResponseBodyInvalidChatIdError)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            success: z.boolean().default(false),
            error: DeleteChatResponseBodyError$outboundSchema,
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteChatResponseBodyInvalidChatIdError$ {
    /** @deprecated use `DeleteChatResponseBodyInvalidChatIdError$inboundSchema` instead. */
    export const inboundSchema = DeleteChatResponseBodyInvalidChatIdError$inboundSchema;
    /** @deprecated use `DeleteChatResponseBodyInvalidChatIdError$outboundSchema` instead. */
    export const outboundSchema = DeleteChatResponseBodyInvalidChatIdError$outboundSchema;
    /** @deprecated use `DeleteChatResponseBodyInvalidChatIdError$Outbound` instead. */
    export type Outbound = DeleteChatResponseBodyInvalidChatIdError$Outbound;
}

/** @internal */
export const DeleteChatResponseBody$inboundSchema: z.ZodType<
    DeleteChatResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    BadRequestError$inboundSchema,
    z.lazy(() => DeleteChatResponseBodyInvalidChatIdError$inboundSchema),
]);

/** @internal */
export type DeleteChatResponseBody$Outbound =
    | BadRequestError$Outbound
    | DeleteChatResponseBodyInvalidChatIdError$Outbound;

/** @internal */
export const DeleteChatResponseBody$outboundSchema: z.ZodType<
    DeleteChatResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteChatResponseBody
> = z.union([
    BadRequestError$outboundSchema,
    z.lazy(() => DeleteChatResponseBodyInvalidChatIdError$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteChatResponseBody$ {
    /** @deprecated use `DeleteChatResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeleteChatResponseBody$inboundSchema;
    /** @deprecated use `DeleteChatResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeleteChatResponseBody$outboundSchema;
    /** @deprecated use `DeleteChatResponseBody$Outbound` instead. */
    export type Outbound = DeleteChatResponseBody$Outbound;
}
