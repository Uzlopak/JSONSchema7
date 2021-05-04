import { JSONSchema7 } from "..";

const testNumber: JSONSchema7<number> = {
    type: "number",
};

const testInteger: JSONSchema7<number> = {
    type: "integer",
};

const testIntegerConst: JSONSchema7<number> = {
    type: "integer",
    const: 2,
};

const testIntegerDefault: JSONSchema7<number> = {
    type: "integer",
    default: 2,
};

const testIntegerExample: JSONSchema7<number> = {
    type: "number",
    examples: [1, 2, 3]
}
