/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Data = {
    content: string;
};

export type ChatCompletionFragment = {
    data: Data;
};

/** @internal */
export namespace Data$ {
    export const inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z.object({
        content: z.string(),
    });

    export type Outbound = {
        content: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Data> = z.object({
        content: z.string(),
    });
}

/** @internal */
export namespace ChatCompletionFragment$ {
    export const inboundSchema: z.ZodType<ChatCompletionFragment, z.ZodTypeDef, unknown> = z.object(
        {
            data: z
                .string()
                .transform((v, ctx) => {
                    try {
                        return JSON.parse(v);
                    } catch (err) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message: `malformed json: ${err}`,
                        });
                        return z.NEVER;
                    }
                })
                .pipe(z.lazy(() => Data$.inboundSchema)),
        }
    );

    export type Outbound = {
        data: Data$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatCompletionFragment> =
        z.object({
            data: z.lazy(() => Data$.outboundSchema),
        });
}
