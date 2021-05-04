import { JSONSchema7 } from "..";

const testOnlyAllowedType: JSONSchema7<number> = {
    type: "null"
}

const testIntegerConst: JSONSchema7<number> = {
    type: "integer",
    const: "s",
}

const testIntegerDefault: JSONSchema7<number> = {
    type: "integer",
    default: "a",
};

const testIntegerExample: JSONSchema7<number> = {
    type: "number",
    examples: [1, 2, 3, null]
}
