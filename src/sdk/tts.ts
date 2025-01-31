/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ttsExecute } from "../funcs/ttsExecute.js";
import { RetrieveAcceptEnum, ttsRetrieve } from "../funcs/ttsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { RetrieveAcceptEnum } from "../funcs/ttsRetrieve.js";

export class Tts extends ClientSDK {
    /**
     * Generate text-to-speech for a given message
     *
     * @remarks
     * Given a message ID, generate a WAV file using our text-to-speech model according to the user's set preference for TTS character. This is most useful for AI character text responses.
     */
    async execute(
        messageId: number,
        options?: RequestOptions
    ): Promise<operations.TtsExecuteResponse> {
        return unwrapAsync(ttsExecute(this, messageId, options));
    }

    /**
     * Retrieve text-to-speech generation
     *
     * @remarks
     * Retrieve the WAV audio data generated after a successful call to `POST /tts`
     */
    async retrieve(
        ttsMessageFor: number,
        options?: RequestOptions & { acceptHeaderOverride?: RetrieveAcceptEnum }
    ): Promise<operations.TtsRetrieveResponse> {
        return unwrapAsync(ttsRetrieve(this, ttsMessageFor, options));
    }
}
