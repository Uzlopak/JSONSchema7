import { JSONSchema7 } from "..";

const testType: JSONSchema7<null> = {
    type: "null",
}

const testNullExample: JSONSchema7<null> = {
    type: "null",
    examples: [null]
}
