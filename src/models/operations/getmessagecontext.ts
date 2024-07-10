/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetMessageContextGlobals = {
    accessToken?: string | undefined;
};

export type GetMessageContextRequest = {
    chatId: number;
};

/**
 * Unauthorized
 */
export type GetMessageContextMessagesResponseBody =
    | components.AuthenticationFailedError
    | components.UnauthorizedIdError;

export const GetMessageContextResponseBodyError = {
    InvalidChatID: "Invalid chat ID",
} as const;
export type GetMessageContextResponseBodyError = ClosedEnum<
    typeof GetMessageContextResponseBodyError
>;

export type ResponseBodyInvalidChatIdError = {
    success?: boolean | undefined;
    error: GetMessageContextResponseBodyError;
};

/**
 * Bad request
 */
export type GetMessageContextResponseBody =
    | components.BadRequestError
    | ResponseBodyInvalidChatIdError;

/**
 * JSON array of chat messages
 */
export type GetMessageContextSuccessfulRequest = {
    success?: boolean | undefined;
    chatContext: Array<components.Message>;
};

export type GetMessageContextResponse =
    | GetMessageContextSuccessfulRequest
    | components.AccountInBadStandingError
    | components.BadRequestError
    | ResponseBodyInvalidChatIdError
    | components.AuthenticationFailedError
    | components.UnauthorizedIdError;

/** @internal */
export const GetMessageContextGlobals$inboundSchema: z.ZodType<
    GetMessageContextGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type GetMessageContextGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const GetMessageContextGlobals$outboundSchema: z.ZodType<
    GetMessageContextGlobals$Outbound,
    z.ZodTypeDef,
    GetMessageContextGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextGlobals$ {
    /** @deprecated use `GetMessageContextGlobals$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextGlobals$inboundSchema;
    /** @deprecated use `GetMessageContextGlobals$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextGlobals$outboundSchema;
    /** @deprecated use `GetMessageContextGlobals$Outbound` instead. */
    export type Outbound = GetMessageContextGlobals$Outbound;
}

/** @internal */
export const GetMessageContextRequest$inboundSchema: z.ZodType<
    GetMessageContextRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    chatId: z.number().int(),
});

/** @internal */
export type GetMessageContextRequest$Outbound = {
    chatId: number;
};

/** @internal */
export const GetMessageContextRequest$outboundSchema: z.ZodType<
    GetMessageContextRequest$Outbound,
    z.ZodTypeDef,
    GetMessageContextRequest
> = z.object({
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextRequest$ {
    /** @deprecated use `GetMessageContextRequest$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextRequest$inboundSchema;
    /** @deprecated use `GetMessageContextRequest$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextRequest$outboundSchema;
    /** @deprecated use `GetMessageContextRequest$Outbound` instead. */
    export type Outbound = GetMessageContextRequest$Outbound;
}

/** @internal */
export const GetMessageContextMessagesResponseBody$inboundSchema: z.ZodType<
    GetMessageContextMessagesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.AuthenticationFailedError$inboundSchema,
    components.UnauthorizedIdError$inboundSchema,
]);

/** @internal */
export type GetMessageContextMessagesResponseBody$Outbound =
    | components.AuthenticationFailedError$Outbound
    | components.UnauthorizedIdError$Outbound;

/** @internal */
export const GetMessageContextMessagesResponseBody$outboundSchema: z.ZodType<
    GetMessageContextMessagesResponseBody$Outbound,
    z.ZodTypeDef,
    GetMessageContextMessagesResponseBody
> = z.union([
    components.AuthenticationFailedError$outboundSchema,
    components.UnauthorizedIdError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextMessagesResponseBody$ {
    /** @deprecated use `GetMessageContextMessagesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextMessagesResponseBody$inboundSchema;
    /** @deprecated use `GetMessageContextMessagesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextMessagesResponseBody$outboundSchema;
    /** @deprecated use `GetMessageContextMessagesResponseBody$Outbound` instead. */
    export type Outbound = GetMessageContextMessagesResponseBody$Outbound;
}

/** @internal */
export const GetMessageContextResponseBodyError$inboundSchema: z.ZodNativeEnum<
    typeof GetMessageContextResponseBodyError
> = z.nativeEnum(GetMessageContextResponseBodyError);

/** @internal */
export const GetMessageContextResponseBodyError$outboundSchema: z.ZodNativeEnum<
    typeof GetMessageContextResponseBodyError
> = GetMessageContextResponseBodyError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextResponseBodyError$ {
    /** @deprecated use `GetMessageContextResponseBodyError$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextResponseBodyError$inboundSchema;
    /** @deprecated use `GetMessageContextResponseBodyError$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextResponseBodyError$outboundSchema;
}

/** @internal */
export const ResponseBodyInvalidChatIdError$inboundSchema: z.ZodType<
    ResponseBodyInvalidChatIdError,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(false),
    error: GetMessageContextResponseBodyError$inboundSchema,
});

/** @internal */
export type ResponseBodyInvalidChatIdError$Outbound = {
    success: boolean;
    error: string;
};

/** @internal */
export const ResponseBodyInvalidChatIdError$outboundSchema: z.ZodType<
    ResponseBodyInvalidChatIdError$Outbound,
    z.ZodTypeDef,
    ResponseBodyInvalidChatIdError
> = z.object({
    success: z.boolean().default(false),
    error: GetMessageContextResponseBodyError$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyInvalidChatIdError$ {
    /** @deprecated use `ResponseBodyInvalidChatIdError$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyInvalidChatIdError$inboundSchema;
    /** @deprecated use `ResponseBodyInvalidChatIdError$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyInvalidChatIdError$outboundSchema;
    /** @deprecated use `ResponseBodyInvalidChatIdError$Outbound` instead. */
    export type Outbound = ResponseBodyInvalidChatIdError$Outbound;
}

/** @internal */
export const GetMessageContextResponseBody$inboundSchema: z.ZodType<
    GetMessageContextResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.BadRequestError$inboundSchema,
    z.lazy(() => ResponseBodyInvalidChatIdError$inboundSchema),
]);

/** @internal */
export type GetMessageContextResponseBody$Outbound =
    | components.BadRequestError$Outbound
    | ResponseBodyInvalidChatIdError$Outbound;

/** @internal */
export const GetMessageContextResponseBody$outboundSchema: z.ZodType<
    GetMessageContextResponseBody$Outbound,
    z.ZodTypeDef,
    GetMessageContextResponseBody
> = z.union([
    components.BadRequestError$outboundSchema,
    z.lazy(() => ResponseBodyInvalidChatIdError$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextResponseBody$ {
    /** @deprecated use `GetMessageContextResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextResponseBody$inboundSchema;
    /** @deprecated use `GetMessageContextResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextResponseBody$outboundSchema;
    /** @deprecated use `GetMessageContextResponseBody$Outbound` instead. */
    export type Outbound = GetMessageContextResponseBody$Outbound;
}

/** @internal */
export const GetMessageContextSuccessfulRequest$inboundSchema: z.ZodType<
    GetMessageContextSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    chatContext: z.array(components.Message$inboundSchema),
});

/** @internal */
export type GetMessageContextSuccessfulRequest$Outbound = {
    success: boolean;
    chatContext: Array<components.Message$Outbound>;
};

/** @internal */
export const GetMessageContextSuccessfulRequest$outboundSchema: z.ZodType<
    GetMessageContextSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    GetMessageContextSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    chatContext: z.array(components.Message$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextSuccessfulRequest$ {
    /** @deprecated use `GetMessageContextSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextSuccessfulRequest$inboundSchema;
    /** @deprecated use `GetMessageContextSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextSuccessfulRequest$outboundSchema;
    /** @deprecated use `GetMessageContextSuccessfulRequest$Outbound` instead. */
    export type Outbound = GetMessageContextSuccessfulRequest$Outbound;
}

/** @internal */
export const GetMessageContextResponse$inboundSchema: z.ZodType<
    GetMessageContextResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetMessageContextSuccessfulRequest$inboundSchema),
    components.AccountInBadStandingError$inboundSchema,
    z.union([
        components.BadRequestError$inboundSchema,
        z.lazy(() => ResponseBodyInvalidChatIdError$inboundSchema),
    ]),
    z.union([
        components.AuthenticationFailedError$inboundSchema,
        components.UnauthorizedIdError$inboundSchema,
    ]),
]);

/** @internal */
export type GetMessageContextResponse$Outbound =
    | GetMessageContextSuccessfulRequest$Outbound
    | components.AccountInBadStandingError$Outbound
    | components.BadRequestError$Outbound
    | ResponseBodyInvalidChatIdError$Outbound
    | components.AuthenticationFailedError$Outbound
    | components.UnauthorizedIdError$Outbound;

/** @internal */
export const GetMessageContextResponse$outboundSchema: z.ZodType<
    GetMessageContextResponse$Outbound,
    z.ZodTypeDef,
    GetMessageContextResponse
> = z.union([
    z.lazy(() => GetMessageContextSuccessfulRequest$outboundSchema),
    components.AccountInBadStandingError$outboundSchema,
    z.union([
        components.BadRequestError$outboundSchema,
        z.lazy(() => ResponseBodyInvalidChatIdError$outboundSchema),
    ]),
    z.union([
        components.AuthenticationFailedError$outboundSchema,
        components.UnauthorizedIdError$outboundSchema,
    ]),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessageContextResponse$ {
    /** @deprecated use `GetMessageContextResponse$inboundSchema` instead. */
    export const inboundSchema = GetMessageContextResponse$inboundSchema;
    /** @deprecated use `GetMessageContextResponse$outboundSchema` instead. */
    export const outboundSchema = GetMessageContextResponse$outboundSchema;
    /** @deprecated use `GetMessageContextResponse$Outbound` instead. */
    export type Outbound = GetMessageContextResponse$Outbound;
}
