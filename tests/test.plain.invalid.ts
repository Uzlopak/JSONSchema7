import { JSONSchema7 } from "..";

const testObjectType: JSONSchema7 = {
    type: "number",
    properties: {
        a: { type: "string", format: "date" },
    },
};
