import { JSONSchema7 } from "..";

const testType: JSONSchema7<boolean> = {
    type: "boolean",
}

const testBooleanExample: JSONSchema7<boolean> = {
    type: "boolean",
    examples: [true, false]
}
