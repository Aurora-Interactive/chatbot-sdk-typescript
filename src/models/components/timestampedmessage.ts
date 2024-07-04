/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Role = {
    System: "system",
    User: "user",
    Assistant: "assistant",
} as const;
export type Role = ClosedEnum<typeof Role>;

export type TimestampedMessage = {
    role: Role;
    content: string;
    timestamp: number;
};

/** @internal */
export namespace Role$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(Role);
    export const outboundSchema: z.ZodNativeEnum<typeof Role> = inboundSchema;
}

/** @internal */
export namespace TimestampedMessage$ {
    export const inboundSchema: z.ZodType<TimestampedMessage, z.ZodTypeDef, unknown> = z.object({
        role: Role$.inboundSchema,
        content: z.string(),
        timestamp: z.number().int(),
    });

    export type Outbound = {
        role: string;
        content: string;
        timestamp: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimestampedMessage> = z.object({
        role: Role$.outboundSchema,
        content: z.string(),
        timestamp: z.number().int(),
    });
}
