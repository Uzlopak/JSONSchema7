import { JSONSchema7 } from "..";

const testOnlyAllowedType: JSONSchema7<string | null> = {
    type: ["number"],
}
