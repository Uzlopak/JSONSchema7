import { JSONSchema7 } from "..";

const testType: JSONSchema7<boolean> = {
    type: "string",
}

const testBooleanExample: JSONSchema7<boolean> = {
    type: "boolean",
    examples: ["true"]
}
