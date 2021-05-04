import { JSONSchema7 } from "..";

const testType: JSONSchema7<string[]> = {
    type: "array",
}

const testArrayItemType: JSONSchema7<string[]> = {
    type: "array",
    items: {
        type: "string",
    },
    minItems: 1,
}

const testArrayAdditionalItemsBoolean: JSONSchema7<string[]> = {
    type: "array",
    items: {
        additionalItems: false,
    }
}

const testArrayAdditionalItemsSchema: JSONSchema7<string[]> = {
    type: "array",
    items: {
        additionalItems: {
            type: "string"
        },
    }
}

const testMultipleArrayAdditionalItemsWithNullSchema: JSONSchema7<string[] | null> = {
    type: "array",
    items: {
        additionalItems: {
            type: ["string", "null"]
        },
    }
}


const testMultipleArrayAdditionalItemsSchema: JSONSchema7<number[] | string[]> = {
    type: "array",
    items: {
        additionalItems: {
            type: ["integer", "number", "string"]
        },
    }
}
