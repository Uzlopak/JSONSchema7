import { JSONSchema7 } from "..";

const testOnlyAllowedType: JSONSchema7<string[]> = {
    type: "null"
}

const testArrayItemType: JSONSchema7<string[]> = {
    type: "array",
    items: {
        type: "number",
    }
}

const testOnlyArrayItemType: JSONSchema7<string> = {
    type: "string",
    items: {
        type: "string",
    }
}

const testArrayAdditionalItemsSchema: JSONSchema7<string[]> = {
    type: "array",
    items: {
        additionalItems: {
            type: "number"
        },
    }
}
