import { JSONSchema7 } from "..";

const testType: JSONSchema7<{ a: string }, "uuid"> = {
    type: "object",
    properties: {
        a: { type: "string", format: "uuid" },
    },
};

interface TestDependencies {
    name: string;
    credit_card: number;
    billing_address: string;
}

const testDependencies: JSONSchema7<TestDependencies, "uuid"> = {
    type: "object",

    properties: {
        name: { type: "string" },
        credit_card: { type: "number" },
        billing_address: { type: "string" }
    },

    required: ["name"],

    dependencies: {
        credit_card: ["billing_address"],
        billing_address: ["credit_card"],
    }
};

const testAdditionalProperties: JSONSchema7<TestDependencies, "uuid"> = {
    type: "object",
    additionalProperties: { type: "string" },
}

const testPatternProperties: JSONSchema7<TestDependencies, "uuid"> = {
    type: "object",
    patternProperties: {
        "^S_": { type: "string" },
        "^I_": { type: "integer" }
    },
    additionalProperties: false,
};

interface EnumObject {
    street_type: "Street" | "Avenue" | "Boulevard";
}

const testEnum: JSONSchema7<EnumObject> = {
    type: "object",
    properties: {
        street_type: {
            type: "string",
            enum: ["Avenue"]
        },
    }
}
