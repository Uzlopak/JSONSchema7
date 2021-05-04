import { JSONSchema7 } from "..";

const testType: JSONSchema7<string, "uuid"> = {
    type: "string",
    format: "invalid",
}

const testArrayItemType: JSONSchema7<string[], "uuid"> = {
    type: "array",
    items: {
        type: "string",
        format: "invalid",
    }
}
