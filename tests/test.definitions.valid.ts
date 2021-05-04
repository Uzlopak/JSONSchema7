import { JSONSchema7 } from "..";


const testOnlyAllowedType: JSONSchema7<string[]> = {
    type: "array",
    items: { $ref: "#/definitions/positiveInteger" },
    definitions: {
        positiveInteger: {
            type: "integer",
            exclusiveMinimum: 0
        }
    }
}
