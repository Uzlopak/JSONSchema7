import { JSONSchema7 } from "..";

const testType: JSONSchema7<string, "uuid"> = {
    type: "string",
    format: "uuid"
}

const testDefinedType: JSONSchema7<string> = {
    type: "string",
    format: "date",
}


const testArrayItemDefinedType: JSONSchema7<string[]> = {
    type: "array",
    items: {
        type: "string",
        format: "date",
    }
}

const testArrayItemType: JSONSchema7<string[], "uuid"> = {
    type: "array",
    items: {
        type: "string",
        format: "uuid",
    }
}
