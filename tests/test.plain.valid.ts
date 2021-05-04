import { JSONSchema7 } from "..";

const testObjectType: JSONSchema7 = {
    type: "object",
    properties: {
        a: { type: "string", format: "date" },
    },
};

const testMetaType: JSONSchema7 = {
    $id: "bla",
    type: "object",
    properties: {
        a: {
            $id: "test",
            type: "string",
            format: "date"
        },
    },
};
