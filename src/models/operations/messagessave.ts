/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type MessagesSaveGlobals = {
    accessToken?: string | undefined;
};

export const Role = {
    System: "system",
    User: "user",
    Assistant: "assistant",
} as const;
export type Role = ClosedEnum<typeof Role>;

export type MessagesSaveTimestampedMessageResponse = {
    role: Role;
    content: string;
    timestamp: number;
    chatId: number;
};

/**
 * Message saved successfully
 */
export type MessagesSaveSuccessfulRequest = {
    success?: boolean | undefined;
    id: number;
};

export type MessagesSaveResponse =
    | MessagesSaveSuccessfulRequest
    | components.DefaultBadRequest
    | components.DefaultUnauthorizedResponse
    | components.DefaultBadStandingResponse;

/** @internal */
export const MessagesSaveGlobals$inboundSchema: z.ZodType<
    MessagesSaveGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    accessToken: z.string().optional(),
});

/** @internal */
export type MessagesSaveGlobals$Outbound = {
    accessToken?: string | undefined;
};

/** @internal */
export const MessagesSaveGlobals$outboundSchema: z.ZodType<
    MessagesSaveGlobals$Outbound,
    z.ZodTypeDef,
    MessagesSaveGlobals
> = z.object({
    accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesSaveGlobals$ {
    /** @deprecated use `MessagesSaveGlobals$inboundSchema` instead. */
    export const inboundSchema = MessagesSaveGlobals$inboundSchema;
    /** @deprecated use `MessagesSaveGlobals$outboundSchema` instead. */
    export const outboundSchema = MessagesSaveGlobals$outboundSchema;
    /** @deprecated use `MessagesSaveGlobals$Outbound` instead. */
    export type Outbound = MessagesSaveGlobals$Outbound;
}

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(Role);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> = Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
    /** @deprecated use `Role$inboundSchema` instead. */
    export const inboundSchema = Role$inboundSchema;
    /** @deprecated use `Role$outboundSchema` instead. */
    export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const MessagesSaveTimestampedMessageResponse$inboundSchema: z.ZodType<
    MessagesSaveTimestampedMessageResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    role: Role$inboundSchema,
    content: z.string(),
    timestamp: z.number().int(),
    chatId: z.number().int(),
});

/** @internal */
export type MessagesSaveTimestampedMessageResponse$Outbound = {
    role: string;
    content: string;
    timestamp: number;
    chatId: number;
};

/** @internal */
export const MessagesSaveTimestampedMessageResponse$outboundSchema: z.ZodType<
    MessagesSaveTimestampedMessageResponse$Outbound,
    z.ZodTypeDef,
    MessagesSaveTimestampedMessageResponse
> = z.object({
    role: Role$outboundSchema,
    content: z.string(),
    timestamp: z.number().int(),
    chatId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesSaveTimestampedMessageResponse$ {
    /** @deprecated use `MessagesSaveTimestampedMessageResponse$inboundSchema` instead. */
    export const inboundSchema = MessagesSaveTimestampedMessageResponse$inboundSchema;
    /** @deprecated use `MessagesSaveTimestampedMessageResponse$outboundSchema` instead. */
    export const outboundSchema = MessagesSaveTimestampedMessageResponse$outboundSchema;
    /** @deprecated use `MessagesSaveTimestampedMessageResponse$Outbound` instead. */
    export type Outbound = MessagesSaveTimestampedMessageResponse$Outbound;
}

/** @internal */
export const MessagesSaveSuccessfulRequest$inboundSchema: z.ZodType<
    MessagesSaveSuccessfulRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    success: z.boolean().default(true),
    id: z.number().int(),
});

/** @internal */
export type MessagesSaveSuccessfulRequest$Outbound = {
    success: boolean;
    id: number;
};

/** @internal */
export const MessagesSaveSuccessfulRequest$outboundSchema: z.ZodType<
    MessagesSaveSuccessfulRequest$Outbound,
    z.ZodTypeDef,
    MessagesSaveSuccessfulRequest
> = z.object({
    success: z.boolean().default(true),
    id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesSaveSuccessfulRequest$ {
    /** @deprecated use `MessagesSaveSuccessfulRequest$inboundSchema` instead. */
    export const inboundSchema = MessagesSaveSuccessfulRequest$inboundSchema;
    /** @deprecated use `MessagesSaveSuccessfulRequest$outboundSchema` instead. */
    export const outboundSchema = MessagesSaveSuccessfulRequest$outboundSchema;
    /** @deprecated use `MessagesSaveSuccessfulRequest$Outbound` instead. */
    export type Outbound = MessagesSaveSuccessfulRequest$Outbound;
}

/** @internal */
export const MessagesSaveResponse$inboundSchema: z.ZodType<
    MessagesSaveResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => MessagesSaveSuccessfulRequest$inboundSchema),
    components.DefaultBadRequest$inboundSchema,
    components.DefaultUnauthorizedResponse$inboundSchema,
    components.DefaultBadStandingResponse$inboundSchema,
]);

/** @internal */
export type MessagesSaveResponse$Outbound =
    | MessagesSaveSuccessfulRequest$Outbound
    | components.DefaultBadRequest$Outbound
    | components.DefaultUnauthorizedResponse$Outbound
    | components.DefaultBadStandingResponse$Outbound;

/** @internal */
export const MessagesSaveResponse$outboundSchema: z.ZodType<
    MessagesSaveResponse$Outbound,
    z.ZodTypeDef,
    MessagesSaveResponse
> = z.union([
    z.lazy(() => MessagesSaveSuccessfulRequest$outboundSchema),
    components.DefaultBadRequest$outboundSchema,
    components.DefaultUnauthorizedResponse$outboundSchema,
    components.DefaultBadStandingResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesSaveResponse$ {
    /** @deprecated use `MessagesSaveResponse$inboundSchema` instead. */
    export const inboundSchema = MessagesSaveResponse$inboundSchema;
    /** @deprecated use `MessagesSaveResponse$outboundSchema` instead. */
    export const outboundSchema = MessagesSaveResponse$outboundSchema;
    /** @deprecated use `MessagesSaveResponse$Outbound` instead. */
    export type Outbound = MessagesSaveResponse$Outbound;
}
