import { JSONSchema7 } from "..";

const testType: JSONSchema7<string | null> = {
    type: "string",
}

const testType2: JSONSchema7<string | null> = {
    type: "null",
}

const testType3: JSONSchema7<string | number> = {
    type: ["number", "number"]
}

const testIntegerExample: JSONSchema7<number | null> = {
    type: ["number", "null"],
    examples: [1, 2, 3, null]
}
