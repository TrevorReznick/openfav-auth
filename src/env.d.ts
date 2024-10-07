/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export interface Form {
    inputs?: Array<Input>
    textarea?: Textarea
    disclaimer?: Disclaimer
    button?: string
    description?: string
}
