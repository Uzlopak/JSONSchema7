import { JSONSchema7 } from "..";

const testType: JSONSchema7<string[]> = {
    type: "array",
}

const testArrayItemType: JSONSchema7<string[]> = {
    type: "array",
    items: {
        type: "string",
    }
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

const testMultipleArrayAdditionalItemsSchema: JSONSchema7<string[] | number[]> = {
    type: "array",
    items: {
        additionalItems: {
            type: ["string", "integer"]
        },
    }
}
