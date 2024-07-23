/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type MessagesHistoryGlobals = {
    accessToken?: string | undefined;
};

export type MessagesHistoryRequest = {
    chatId: number;
};

export const MessagesHistoryRole = {
    System: "system",
    User: "user",
    Assistant: "assistant",
} as const;
export type MessagesHistoryRole = ClosedEnum<typeof MessagesHistoryRole>;

export type TimestampedMessageResponse = {
    role: MessagesHistoryRole;
    content: string;
    timestamp: number;
    id: number;
};

/**
 * JSON array of chat messages
 */
export type MessagesHistorySuccessfulRequest = {
    success?: boolean | undefined;
    messages: Array<TimestampedMessageResponse>;
};

export type MessagesHistoryResponse =
    | MessagesHistorySuccessfulRequest
    | components.BadRequestError
    | components.AuthenticationFailedError
    | components.AccountInBadStandingError;

/** @internal */
export const MessagesHistoryGlobals$inboundSchema: z.ZodType<
    MessagesHistoryGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type MessagesHistoryGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const MessagesHistoryGlobals$outboundSchema: z.ZodType<
    MessagesHistoryGlobals$Outbound,
    z.ZodTypeDef,
    MessagesHistoryGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesHistoryGlobals$ {
    /** @deprecated use `MessagesHistoryGlobals$inboundSchema` instead. */
    export const inboundSchema = MessagesHistoryGlobals$inboundSchema;
    /** @deprecated use `MessagesHistoryGlobals$outboundSchema` instead. */
    export const outboundSchema = MessagesHistoryGlobals$outboundSchema;
    /** @deprecated use `MessagesHistoryGlobals$Outbound` instead. */
    export type Outbound = MessagesHistoryGlobals$Outbound;
}

/** @internal */
export const MessagesHistoryRequest$inboundSchema: z.ZodType<
    MessagesHistoryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    chatId: z.number().int(),
});

/** @internal */
export type MessagesHistoryRequest$Outbound = {
    chatId: number;
};

/** @internal */
export const MessagesHistoryRequest$outboundSchema: z.ZodType<
    MessagesHistoryRequest$Outbound,
    z.ZodTypeDef,
    MessagesHistoryRequest
> = z.object({
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesHistoryRequest$ {
    /** @deprecated use `MessagesHistoryRequest$inboundSchema` instead. */
    export const inboundSchema = MessagesHistoryRequest$inboundSchema;
    /** @deprecated use `MessagesHistoryRequest$outboundSchema` instead. */
    export const outboundSchema = MessagesHistoryRequest$outboundSchema;
    /** @deprecated use `MessagesHistoryRequest$Outbound` instead. */
    export type Outbound = MessagesHistoryRequest$Outbound;
}

/** @internal */
export const MessagesHistoryRole$inboundSchema: z.ZodNativeEnum<typeof MessagesHistoryRole> =
    z.nativeEnum(MessagesHistoryRole);

/** @internal */
export const MessagesHistoryRole$outboundSchema: z.ZodNativeEnum<typeof MessagesHistoryRole> =
    MessagesHistoryRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesHistoryRole$ {
    /** @deprecated use `MessagesHistoryRole$inboundSchema` instead. */
    export const inboundSchema = MessagesHistoryRole$inboundSchema;
    /** @deprecated use `MessagesHistoryRole$outboundSchema` instead. */
    export const outboundSchema = MessagesHistoryRole$outboundSchema;
}

/** @internal */
export const TimestampedMessageResponse$inboundSchema: z.ZodType<
    TimestampedMessageResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    role: MessagesHistoryRole$inboundSchema,
    content: z.string(),
    timestamp: z.number().int(),
    id: z.number().int(),
});

/** @internal */
export type TimestampedMessageResponse$Outbound = {
    role: string;
    content: string;
    timestamp: number;
    id: number;
};

/** @internal */
export const TimestampedMessageResponse$outboundSchema: z.ZodType<
    TimestampedMessageResponse$Outbound,
    z.ZodTypeDef,
    TimestampedMessageResponse
> = z.object({
    role: MessagesHistoryRole$outboundSchema,
    content: z.string(),
    timestamp: z.number().int(),
    id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimestampedMessageResponse$ {
    /** @deprecated use `TimestampedMessageResponse$inboundSchema` instead. */
    export const inboundSchema = TimestampedMessageResponse$inboundSchema;
    /** @deprecated use `TimestampedMessageResponse$outboundSchema` instead. */
    export const outboundSchema = TimestampedMessageResponse$outboundSchema;
    /** @deprecated use `TimestampedMessageResponse$Outbound` instead. */
    export type Outbound = TimestampedMessageResponse$Outbound;
}

/** @internal */
export const MessagesHistorySuccessfulRequest$inboundSchema: z.ZodType<
    MessagesHistorySuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    messages: z.array(z.lazy(() => TimestampedMessageResponse$inboundSchema)),
});

/** @internal */
export type MessagesHistorySuccessfulRequest$Outbound = {
    success: boolean;
    messages: Array<TimestampedMessageResponse$Outbound>;
};

/** @internal */
export const MessagesHistorySuccessfulRequest$outboundSchema: z.ZodType<
    MessagesHistorySuccessfulRequest$Outbound,
    z.ZodTypeDef,
    MessagesHistorySuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    messages: z.array(z.lazy(() => TimestampedMessageResponse$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesHistorySuccessfulRequest$ {
    /** @deprecated use `MessagesHistorySuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = MessagesHistorySuccessfulRequest$inboundSchema;
    /** @deprecated use `MessagesHistorySuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = MessagesHistorySuccessfulRequest$outboundSchema;
    /** @deprecated use `MessagesHistorySuccessfulRequest$Outbound` instead. */
    export type Outbound = MessagesHistorySuccessfulRequest$Outbound;
}

/** @internal */
export const MessagesHistoryResponse$inboundSchema: z.ZodType<
    MessagesHistoryResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => MessagesHistorySuccessfulRequest$inboundSchema),
    components.BadRequestError$inboundSchema,
    components.AuthenticationFailedError$inboundSchema,
    components.AccountInBadStandingError$inboundSchema,
]);

/** @internal */
export type MessagesHistoryResponse$Outbound =
    | MessagesHistorySuccessfulRequest$Outbound
    | components.BadRequestError$Outbound
    | components.AuthenticationFailedError$Outbound
    | components.AccountInBadStandingError$Outbound;

/** @internal */
export const MessagesHistoryResponse$outboundSchema: z.ZodType<
    MessagesHistoryResponse$Outbound,
    z.ZodTypeDef,
    MessagesHistoryResponse
> = z.union([
    z.lazy(() => MessagesHistorySuccessfulRequest$outboundSchema),
    components.BadRequestError$outboundSchema,
    components.AuthenticationFailedError$outboundSchema,
    components.AccountInBadStandingError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesHistoryResponse$ {
    /** @deprecated use `MessagesHistoryResponse$inboundSchema` instead. */
    export const inboundSchema = MessagesHistoryResponse$inboundSchema;
    /** @deprecated use `MessagesHistoryResponse$outboundSchema` instead. */
    export const outboundSchema = MessagesHistoryResponse$outboundSchema;
    /** @deprecated use `MessagesHistoryResponse$Outbound` instead. */
    export type Outbound = MessagesHistoryResponse$Outbound;
}
