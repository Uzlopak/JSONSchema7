import { JSONSchema7 } from "..";

const testWrongPropertyType: JSONSchema7<{ a: "b" }, "uuid"> = {
    type: "object",
    properties: {
        a: { type: "number" }
    }
}

const testNoPropertyOnNonObject: JSONSchema7<string, "uuid"> = {
    type: "string",
    properties: {
        a: { type: "number" }
    }
}

const testArray: JSONSchema7<{ 0: "b" }> = {
    type: "array",
}

interface EnumObject {
    street_type: "Street" | "Avenue" | "Boulevard";
}

const testEnum: JSONSchema7<EnumObject> = {
    type: "object",
    properties: {
        street_type: {
            type: "string",
            enum: ["invalid"]
        },
    }
}
