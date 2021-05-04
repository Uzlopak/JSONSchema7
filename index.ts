/**
 * JSON Schema 7
 * Draft 07
 *
 * @license
 * Licensed under MIT
 *
 * Copyright Aras Abbasi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Copyright Notice from RFC as parts from the RFC are used for comments:
 *
 * -----
 * Copyright Notice
 *
 * Copyright (c) 2018 IETF Trust and the persons identified as the
 * document authors. All rights reserved.
 *
 * This document is subject to BCP 78 and the IETF Trust's Legal
 * Provisions Relating to IETF Documents
 * (https://trustee.ietf.org/license-info) in effect on the date of
 * publication of this document. Please review these documents
 * carefully, as they describe your rights and restrictions with respect
 * to this document. Code Components extracted from this document must
 * include Simplified BSD License text as described in Section 4.e of
 * the Trust Legal Provisions and are provided without warranty as
 * described in the Simplified BSD License.
 * -----
 *
 * Simplified BSD License Text:
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 */

/**
 * 5. Meta-Schema
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-5
 */
interface JSONSchema7MetaSchema {
    /**
     * The current URI for the JSON Schema Validation is
     * <http://json-schema.org/draft-07/schema#>.
     */
    schema?: "http://json-schema.org/draft-07/schema#";
}

/**
 * 6.1. Validation Keywords for Any Instance Type
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
 */
interface JSONSchema7AnyAttributes<T = any> {
    /**
     * 6.1.1. type
     * The value of this keyword MUST be either a string or an array. If it
     * is an array, elements of the array MUST be strings and MUST be
     * unique.
     *
     * String values MUST be one of the six primitive types ("null",
     * "boolean", "object", "array", "number", or "string"), or "integer"
     * which matches any number with a zero fractional part.

     * An instance validates if and only if the instance is in any of the
     * sets listed for this keyword.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1
     */
    type?:
    (
        T extends null ? "null" :
        T extends boolean ? "boolean" :
        T extends Array<any> ? "array" :
        T extends object ? "object" :
        T extends number ? "number" | "integer" :
        T extends string ? "string" :
        never
    )
    |
    (
        T extends null ? "null" :
        T extends boolean ? "boolean" :
        T extends Array<any> ? "array" :
        T extends object ? "object" :
        T extends number ? "number" | "integer" :
        T extends string ? "string" :
        never
    )[];
    /**
     * 6.1.2. enum
     *
     * The value of this keyword MUST be an array. This array SHOULD have
     * at least one element. Elements in the array SHOULD be unique.
     *
     * An instance validates successfully against this keyword if its value
     * is equal to one of the elements in this keyword's array value.
     *
     * Elements in the array might be of any value, including null.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.2
     */
    enum?: T[];
    /**
     * 6.1.3. const
     *
     * The value of this keyword MAY be of any type, including null.
     * An instance validates successfully against this keyword if its value
     * is equal to the value of the keyword.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.3
     */
    const?: T;
}

/**
 * 6.2. Validation Keywords for Numeric Instances (number and integer)
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2
 */
interface JSONSchema7NumericalKeywords<T> {
    /**
     * 6.2.1. multipleOf
     *
     * The value of "multipleOf" MUST be a number, strictly greater than 0.
     * A numeric instance is valid only if division by this keyword's value
     * results in an integer.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2.1
     */
    multipleOf?: T extends number ? number : never;
    /**
     * 6.2.2. maximum
     *
     * The value of "maximum" MUST be a number, representing an inclusive
     * upper limit for a numeric instance.
     *
     * If the instance is a number, then this keyword validates only if the
     * instance is less than or exactly equal to "maximum".
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2.2
     */
    maximum?: T extends number ? number : never;
    /**
     * 6.2.3. exclusiveMaximum
     *
     * The value of "exclusiveMaximum" MUST be number, representing an
     * exclusive upper limit for a numeric instance.
     *
     * If the instance is a number, then the instance is valid only if it
     * has a value strictly less than (not equal to) "exclusiveMaximum".
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2.3
     */
    exclusiveMaximum?: T extends number ? number : never;
    /**
     * 6.2.4. minimum
     *
     * The value of "minimum" MUST be a number, representing an inclusive
     * lower limit for a numeric instance.
     *
     * If the instance is a number, then this keyword validates only if the
     * instance is greater than or exactly equal to "minimum".
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2.4
     */
    minimum?: T extends number ? number : never;
    /**
     * 6.2.5. exclusiveMinimum
     *
     * The value of "exclusiveMinimum" MUST be number, representing an
     * exclusive lower limit for a numeric instance.
     *
     * If the instance is a number, then the instance is valid only if it
     * has a value strictly greater than (not equal to) "exclusiveMinimum".
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2.5
     */
    exclusiveMinimum?: T extends number ? number : never;
}


/**
 * 6.3. Validation Keywords for Strings
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3
 */
interface JSONSchema7StringKeywords<T> {
    /**
     * 6.3.1. maxLength
     *
     * The value of this keyword MUST be a non-negative integer.
     *
     * A string instance is valid against this keyword if its length is less
     * than, or equal to, the value of this keyword.
     *
     * The length of a string instance is defined as the number of its
     * characters as defined by RFC 7159 [RFC7159].
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3.1
     */
    maxLength?: T extends string ? number : never;
    /**
     * 6.3.2. minLength
     *
     * The value of this keyword MUST be a non-negative integer.
     *
     * A string instance is valid against this keyword if its length is
     * greater than, or equal to, the value of this keyword.
     *
     * The length of a string instance is defined as the number of its
     * characters as defined by RFC 7159 [RFC7159].
     *
     * Omitting this keyword has the same behavior as a value of 0.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3.2
     */
    minLength?: T extends string ? number : never;
    /**
     * 6.3.3. pattern
     *
     * The value of this keyword MUST be a string. This string SHOULD be a
     * valid regular expression, according to the ECMA 262 regular
     * expression dialect.
     *
     * A string instance is considered valid if the regular expression
     * matches the instance successfully. Recall: regular expressions are
     * not implicitly anchored.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3.3
     */
    pattern?: T extends string ? string : never;
}

/**
 * 6.4. Validation Keywords for Arrays
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4
 */
interface JSONSchema7ArrayKeywords<T, Format> {
    /**
     * 6.4.1. items
     *
     * The value of "items" MUST be either a valid JSON Schema or an array
     * of valid JSON Schemas.
     *
     * This keyword determines how child instances validate for arrays, and
     * does not directly validate the immediate instance itself.
     *
     * If "items" is a schema, validation succeeds if all elements in the
     * array successfully validate against that schema.
     *
     * If "items" is an array of schemas, validation succeeds if each
     * element of the instance validates against the schema at the same
     * position, if any.
     *
     * Omitting this keyword has the same behavior as an empty schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4.1
     */
    items?: T extends any[] ? Partial<JSONSchema7Base<T[number], Format>> | Partial<JSONSchema7Base<T[number], Format>>[] | Partial<JSONSchema7Base<T, Format>> | boolean : never;
    /**
     * 6.4.2. additionalItems
     *
     * The value of "additionalItems" MUST be a valid JSON Schema.
     *
     * This keyword determines how child instances validate for arrays, and
     * does not directly validate the immediate instance itself.
     *
     * If "items" is an array of schemas, validation succeeds if every
     * instance element at a position greater than the size of "items"
     * validates against "additionalItems".
     *
     * Otherwise, "additionalItems" MUST be ignored, as the "items" schema
     * (possibly the default value of an empty schema) is applied to all
     * elements.
     *
     * Omitting this keyword has the same behavior as an empty schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4.2
     */
    additionalItems?: T extends any[] ? JSONSchema7Base<T[0] | T[1] | T[2], Format> | boolean : never;
    /**
     * 6.4.3. maxItems
     *
     * The value of this keyword MUST be a non-negative integer.
     *
     * An array instance is valid against "maxItems" if its size is less
     * than, or equal to, the value of this keyword.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4.3
     */
    maxItems?: T extends any[] ? number : never;
    /**
     * 6.4.4. minItems
     *
     * The value of this keyword MUST be a non-negative integer.
     *
     * An array instance is valid against "minItems" if its size is greater
     * than, or equal to, the value of this keyword.
     *
     * Omitting this keyword has the same behavior as a value of 0.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4.4
     */
    minItems?: T extends any[] ? number : never;
    /**
     * 6.4.5. uniqueItems
     *
     * The value of this keyword MUST be a boolean.
     *
     * If this keyword has boolean value false, the instance validates
     * successfully. If it has boolean value true, the instance validates
     * successfully if all of its elements are unique.
     *
     * Omitting this keyword has the same behavior as a value of false.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4.5
     */
    uniqueItems?: T extends any[] ? boolean : never;
    /**
     * 6.4.6. contains
     *
     * The value of this keyword MUST be a valid JSON Schema.
     *
     * An array instance is valid against "contains" if at least one of its
     * elements is valid against the given schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4.6
     */
    contains?: T extends any[] ? JSONSchema7Base<any> : never;
}

/**
 * 6.5. Validation Keywords for Objects
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
 */
interface JSONSchema7ObjectKeywords<T, Format> {
    /**
     * 6.5.1. maxProperties
     *
     * The value of this keyword MUST be a non-negative integer.
     *
     * An object instance is valid against "maxProperties" if its number of
     * properties is less than, or equal to, the value of this keyword.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.1
     */
    maxProperties?: T extends { [key: string]: any } ? number : never;
    /**
     * 6.5.2. minProperties
     *
     * The value of this keyword MUST be a non-negative integer.
     *
     * An object instance is valid against "minProperties" if its number of
     * properties is greater than, or equal to, the value of this keyword.
     *
     * Omitting this keyword has the same behavior as a value of 0.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.2
     */
    minProperties?: T extends { [key: string]: any } ? number : never;
    /**
     * 6.5.3. required
     *
     * The value of this keyword MUST be an array. Elements of this array,
     * if any, MUST be strings, and MUST be unique.
     *
     * An object instance is valid against this keyword if every item in the
     * array is the name of a property in the instance.
     *
     * Omitting this keyword has the same behavior as an empty array.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.3
     */
    required?: T extends { [key: string]: any } ? Extract<keyof T, string>[] : never;
    /**
     * 6.5.4. properties
     *
     * The value of "properties" MUST be an object. Each value of this
     * object MUST be a valid JSON Schema.
     *
     * This keyword determines how child instances validate for objects, and
     * does not directly validate the immediate instance itself.
     *
     * Validation succeeds if, for each name that appears in both the
     * instance and as a name within this keyword's value, the child
     * instance for that name successfully validates against the
     * corresponding schema.
     *
     * Omitting this keyword has the same behavior as an empty object.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.4
     */
    properties?: T extends { [key: string]: any } ? Required<{ [P in keyof T]: Partial<JSONSchema7Base<T[P], Format>>; }> : never;
    /**
     * 6.5.5. patternProperties
     *
     * The value of "patternProperties" MUST be an object. Each property
     * name of this object SHOULD be a valid regular expression, according
     * to the ECMA 262 regular expression dialect. Each property value of
     * this object MUST be a valid JSON Schema.
     *
     * This keyword determines how child instances validate for objects, and
     * does not directly validate the immediate instance itself. Validation
     * of the primitive instance type against this keyword always succeeds.
     *
     * Validation succeeds if, for each instance name that matches any
     * regular expressions that appear as a property name in this keyword's
     * value, the child instance for that name successfully validates
     * against each schema that corresponds to a matching regular
     * expression.
     *
     * Omitting this keyword has the same behavior as an empty object.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.5
     */
    patternProperties?: T extends { [key: string]: any } ? Required<{ [key: string]: JSONSchema7Definition<Format>; }> : never;
    /**
     * 6.5.6. additionalProperties
     *
     * The value of "additionalProperties" MUST be a valid JSON Schema.
     *
     * This keyword determines how child instances validate for objects, and
     * does not directly validate the immediate instance itself.
     *
     * Validation with "additionalProperties" applies only to the child
     * values of instance names that do not match any names in "properties",
     * and do not match any regular expression in "patternProperties".
     *
     * For all such properties, validation succeeds if the child instance
     * validates against the "additionalProperties" schema.
     *
     * Omitting this keyword has the same behavior as an empty schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.6
     */
    additionalProperties?: T extends { [key: string]: any } ? JSONSchema7Definition<Format> | boolean : never;
    /**
     * 6.5.7. dependencies
     *
     * [[CREF1: This keyword may be split into two, with the variation that
     * uses an array of property names rather than a subschema getting a new
     * name. The dual behavior is confusing and relatively difficult to
     * implement. In the previous draft, we proposed dropping the keyword
     * altogether, or dropping one of its forms, but we received feedback in
     * support of keeping it. See issues #442 and #528 at
     * <https://github.com/json-schema-org/json-schema-spec/issues> for
     * further discussion. Further feedback is encouraged. ]]
     *
     * This keyword specifies rules that are evaluated if the instance is an
     * object and contains a certain property.
     *
     * This keyword's value MUST be an object. Each property specifies a
     * dependency. Each dependency value MUST be an array or a valid JSON
     * Schema.
     *
     * If the dependency value is a subschema, and the dependency key is a
     * property in the instance, the entire instance must validate against
     * the dependency value.
     *
     * If the dependency value is an array, each element in the array, if
     * any, MUST be a string, and MUST be unique. If the dependency key is
     * a property in the instance, each of the items in the dependency value
     * must be a property that exists in the instance.
     *
     * Omitting this keyword has the same behavior as an empty object.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.7
     */
    dependencies?: T extends { [key: string]: any } ? Partial<Record<keyof T, Extract<keyof T, string>[]>> : never
    /**
     * 6.5.8. propertyNames
     *
     * The value of "propertyNames" MUST be a valid JSON Schema.
     *
     * If the instance is an object, this keyword validates if every
     * property name in the instance validates against the provided schema.
     * Note the property name that the schema is testing will always be a
     * string.
     *
     * Omitting this keyword has the same behavior as an empty schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5.8
     */
    propertyNames?: T extends { [key: string]: any } ? JSONSchema7Base<string, Format> : never;
}

/**
 * 6.6. Keywords for Applying Subschemas Conditionally
 *
 * These keywords work together to implement conditional application of
 * a subschema based on the outcome of another subschema.

 * These keywords MUST NOT interact with each other across subschema
 * boundaries. In other words, an "if" in one branch of an "allOf" MUST
 * NOT have an impact on a "then" or "else" in another branch.

 * There is no default behavior for any of these keywords when they are
 * not present. In particular, they MUST NOT be treated as if present
 * with an empty schema, and when "if" is not present, both "then" and
 * "else" MUST be entirely ignored.
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6
 */
interface JSON7SchemaConditionalKeywords<T, Format> {
    /**
     * 6.6.1. if
     * This keyword's value MUST be a valid JSON Schema.
     *
     * This validation outcome of this keyword's subschema has no direct
     * effect on the overall validation result. Rather, it controls which
     * of the "then" or "else" keywords are evaluated.
     *
     * Instances that successfully validate against this keyword's subschema
     * MUST also be valid against the subschema value of the "then" keyword,
     * if present.
     *
     * Instances that fail to validate against this keyword's subschema MUST
     * also be valid against the subschema value of the "else" keyword, if
     * present.
     *
     * If annotations (Section 3.3) are being collected, they are collected
     * from this keyword's subschema in the usual way, including when the
     * keyword is present without either "then" or "else".
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6.1
     */
    if?: JSONSchema7Base<T, Format>;
    /**
     * 6.6.2. then
     *
     * This keyword's value MUST be a valid JSON Schema.
     *
     * When "if" is present, and the instance successfully validates against
     * its subschema, then validation succeeds against this keyword if the
     * instance also successfully validates against this keyword's
     * subschema.
     *
     * This keyword has no effect when "if" is absent, or when the instance
     * fails to validate against its subschema. Implementations MUST NOT
     * evaluate the instance against this keyword, for either validation or
     * annotation collection purposes, in such cases.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6.2
     */
    then?: JSONSchema7Base<T, Format>;
    /**
     * 6.6.3. else
     *
     * This keyword's value MUST be a valid JSON Schema.
     *
     * When "if" is present, and the instance fails to validate against its
     * subschema, then validation succeeds against this keyword if the
     * instance successfully validates against this keyword's subschema.
     *
     * This keyword has no effect when "if" is absent, or when the instance
     * successfully validates against its subschema. Implementations MUST
     * NOT evaluate the instance against this keyword, for either validation
     * or annotation collection purposes, in such cases.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6.3
     */
    else?: JSONSchema7Base<T, Format>;
}

/**
 * 6.7. Keywords for Applying Subschemas With Boolean Logic
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7
 */
interface JSONSchema7Logical<T, Format> {
    /**
     * 6.7.1. allOf
     *
     * This keyword's value MUST be a non-empty array. Each item of the
     * array MUST be a valid JSON Schema.
     *
     * An instance validates successfully against this keyword if it
     * validates successfully against all schemas defined by this keyword's
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7.1
     */
    allOf?: JSONSchema7Base<T, Format>[],
    /**
     * 6.7.2. anyOf
     *
     * This keyword's value MUST be a non-empty array. Each item of the
     * array MUST be a valid JSON Schema.
     * An instance validates successfully against this keyword if it
     * validates successfully against at least one schema defined by this
     * keyword's value.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7.2
     */
    anyOf?: JSONSchema7Base<T, Format>[],
    /**
     * 6.7.3. oneOf
     *
     * This keyword's value MUST be a non-empty array. Each item of the
     * array MUST be a valid JSON Schema.
     *
     * An instance validates successfully against this keyword if it
     * validates successfully against exactly one schema defined by this
     * keyword's value.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7.3
     */
    oneOf?: JSONSchema7Base<T, Format>[],
    /**
     * 6.7.4. not
     *
     * This keyword's value MUST be a valid JSON Schema.
     *
     * An instance is valid against this keyword if it fails to validate
     * successfully against the schema defined by this keyword.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7.4
     */
    not?: JSONSchema7Base<T, Format>,
}

/**
 * 7. Semantic Validation With "format"
 *
 * 7.1. Foreword
 *
 * Structural validation alone may be insufficient to validate that an
 * instance meets all the requirements of an application. The "format"
 * keyword is defined to allow interoperable semantic validation for a
 * fixed subset of values which are accurately described by
 * authoritative resources, be they RFCs or other external
 * specifications.

 * The value of this keyword is called a format attribute. It MUST be a
 * string. A format attribute can generally only validate a given set
 * of instance types. If the type of the instance to validate is not in
 * this set, validation for this format attribute and instance SHOULD
 * succeed.
 *
 * 7.2. Implementation Requirements
 *
 * The "format" keyword functions as both an annotation (Section 3.3)
 * and as an assertion (Section 3.2). While no special effort is
 * required to implement it as an annotation conveying semantic meaning,
 * implementing validation is non-trivial.
 *
 * Implementations MAY support the "format" keyword as a validation
 * assertion. Should they choose to do so:
 *
 *    they SHOULD implement validation for attributes defined below;
 *
 *    they SHOULD offer an option to disable validation for this
 *    keyword.
 *
 * Implementations MAY add custom format attributes. Save for agreement
 * between parties, schema authors SHALL NOT expect a peer
 * implementation to support this keyword and/or custom format
 * attributes.
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7
 */

/**
 * 7.3. Defined Formats
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3
 */
type JSONSchema7DefinedFormats =
    /**
     * 7.3.1. Dates and Times
     *
     * These attributes apply to string instances.
     *
     * Date and time format names are derived from RFC 3339, section 5.6
     * [RFC3339].
     *
     * Implementations supporting formats SHOULD implement support for the
     * following attributes:
     */
    /**
    * date-time:  A string instance is valid against this attribute if it
    *    is a valid representation according to the "date-time" production.
    */
    | "date-time"
    /**
     * date:  A string instance is valid against this attribute if it is a
     *    valid representation according to the "full-date" production.
     */
    | "date"
    /**
     * time:  A string instance is valid against this attribute if it is a
     *    valid representation according to the "full-time" production.
     */
    | "time"
    /**
     * Implementations MAY support additional attributes using the other
     * production names defined in that section. If "full-date" or "full-
     * time" are implemented, the corresponding short form ("date" or "time"
     * respectively) MUST be implemented, and MUST behave identically.
     * Implementations SHOULD NOT define extension attributes with any name
     * matching an RFC 3339 production unless it validates according to the
     * rules of that production. [[CREF2: There is not currently consensus
     * on the need for supporting all RFC 3339 formats, so this approach of
     * reserving the namespace will encourage experimentation without
     * committing to the entire set. Either the format implementation
     * requirements will become more flexible in general, or these will
     * likely either be promoted to fully specified attributes or dropped.
     * ]]
     */
    /**
     * 7.3.2. Email Addresses
     *
     * These attributes apply to string instances.
     *
     * A string instance is valid against these attributes if it is a valid
     * Internet email address as follows:
     *
     *    email:  As defined by RFC 5322, section 3.4.1 [RFC5322].
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.2
     */
    | "email"
    /**
     *    idn-email:  As defined by RFC 6531 [RFC6531]
     *
     * Note that all strings valid against the "email" attribute are also
     * valid against the "idn-email" attribute.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.2
     */
    | "idn-email"
    /**
     * 7.3.3. Hostnames
     *
     * These attributes apply to string instances.
     *
     * A string instance is valid against these attributes if it is a valid
     * representation for an Internet hostname as follows:
     *
     * hostname:  As defined by RFC 1034, section 3.1 [RFC1034], including
     *    host names produced using the Punycode algorithm specified in RFC
     *    5891, section 4.4 [RFC5891].
     */
    | "hostname"
    /**
    * idn-hostname:  As defined by either RFC 1034 as for hostname, or an
    *    internationalized hostname as defined by RFC 5890, section 2.3.2.3
    *    [RFC5890].
    *
    * Note that all strings valid against the "hostname" attribute are also
    * valid against the "idn-hostname" attribute.
    */
    | "idn-hostname"
    /**
     * 7.3.4. IP Addresses
     *
     * These attributes apply to string instances.
     *
     * A string instance is valid against these attributes if it is a valid
     * representation of an IP address as follows:
     */
    /**
     * ipv4:  An IPv4 address according to the "dotted-quad" ABNF syntax as
     *    defined in RFC 2673, section 3.2 [RFC2673].
     */
    | "ipv4"
    /**
     * ipv6:  An IPv6 address as defined in RFC 4291, section 2.2 [RFC4291].
     */
    | "ipv6"
    /**
     * 7.3.5. Resource Identifiers
     *
     * These attributes apply to string instances.
     */
    /**
     * uri:  A string instance is valid against this attribute if it is a
     * valid URI, according to [RFC3986].
     */
    | "uri"
    /**
     *
     * uri-reference:  A string instance is valid against this attribute if
     * it is a valid URI Reference (either a URI or a relative-
     * reference), according to [RFC3986].
     */
    | "uri-reference"
    /**
     * iri:  A string instance is valid against this attribute if it is a
     *    valid IRI, according to [RFC3987].
     *
     */
    | "iri"
    /**
     * iri-reference:  A string instance is valid against this attribute if
     *    it is a valid IRI Reference (either an IRI or a relative-
     *    reference), according to [RFC3987].
     */
    | "iri-reference"
    /**
     *
     * Note that all valid URIs are valid IRIs, and all valid URI References
     * are also valid IRI References.
     */

    /**
     * 7.3.6. uri-template
     *
     *  This attribute applies to string instances.
     *
     *  A string instance is valid against this attribute if it is a valid
     *  URI Template (of any level), according to [RFC6570].
     *
     *  Note that URI Templates may be used for IRIs; there is no separate
     *  IRI Template specification.
     */
    | "uri-template"
    /**
     * 7.3.7. JSON Pointers
     *
     * These attributes apply to string instances.
     *
     * json-pointer:  A string instance is valid against this attribute if
     *    it is a valid JSON string representation of a JSON Pointer,
     *    according to RFC 6901, section 5 [RFC6901].
     */
    | "json-pointer"
    /**
     * relative-json-pointer:  A string instance is valid against this
     *    attribute if it is a valid Relative JSON Pointer
     *    [relative-json-pointer].
     */
    | "relative-json-pointer"
    /**
     * To allow for both absolute and relative JSON Pointers, use "anyOf" or
     * "oneOf" to indicate support for either format.
     */

    /**
     * 7.3.8. regex
     *
     * This attribute applies to string instances.
     *
     * A regular expression, which SHOULD be valid according to the ECMA 262
     * [ecma262] regular expression dialect.
     *
     * Implementations that validate formats MUST accept at least the subset
     * of ECMA 262 defined in the Regular Expressions (Section 4.3) section
     * of this specification, and SHOULD accept all valid ECMA 262
     * expressions.
     */
    | "regex";

interface JSONSchema7Format<Format = JSONSchema7DefinedFormats> {
    format?: Format;
}

/**
 * 8. String-Encoding Non-JSON Data
 *
 * 8.1. Foreword
 *
 * Properties defined in this section indicate that an instance contains
 * non-JSON data encoded in a JSON string. They describe the type of
 * content and how it is encoded.
 *
 * These properties provide additional information required to interpret
 * JSON data as rich multimedia documents.
 *
 * 8.2. Implementation Requirements
 *
 * The content keywords function as both annotations (Section 3.3) and
 * as assertions (Section 3.2). While no special effort is required to
 * implement them as annotations conveying how applications can
 * interpret the data in the string, implementing validation of
 * conformance to the media type and encoding is non-trivial.
 *
 * Implementations MAY support the "contentMediaType" and
 * "contentEncoding" keywords as validation assertions. Should they
 * choose to do so, they SHOULD offer an option to disable validation
 * for these keywords.
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-8
 */
interface JSONSchema7NonJSONDataStringEncoding<T> {
    /**
     * 8.3. contentEncoding
     *
     * If the instance value is a string, this property defines that the
     * string SHOULD be interpreted as binary data and decoded using the
     * encoding named by this property. RFC 2045, Sec 6.1 [RFC2045] lists
     * the possible values for this property.
     *
     * The value of this property MUST be a string.
     *
     * The value of this property SHOULD be ignored if the instance
     * described is not a string.
     *
     * @example base64
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-8.3
     */
    contentMediaType?: T extends string ? string : never;
    /**
    * 8.4. contentMediaType
    *
    * The value of this property must be a media type, as defined by RFC
    * 2046 [RFC2046]. This property defines the media type of instances
    * which this schema defines.
    *
    * The value of this property MUST be a string.
    *
    * The value of this property SHOULD be ignored if the instance
    * described is not a string.
    *
    * If the "contentEncoding" property is not present, but the instance
    * value is a string, then the value of this property SHOULD specify a
    * text document type, and the character set SHOULD be the character set
    * into which the JSON string value was decoded (for which the default
    * is Unicode).
    *
    * @example image/png
    *
    * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-8.4
    */
    contentEncoding?: T extends string
    ?
    | "base64"
    | "7bit"
    | "8bit"
    | "quoted-printable"
    | "binary"
    : never;
}

/**
 * 9. Schema Re-Use With "definitions"
 *
 * The "definitions" keywords provides a standardized location for
 * schema authors to inline re-usable JSON Schemas into a more general
 * schema. The keyword does not directly affect the validation result.
 *
 * This keyword's value MUST be an object. Each member value of this
 * object MUST be a valid JSON Schema.
 *
 * As an example, here is a schema describing an array of positive
 * integers, where the positive integer constraint is a subschema in
 * "definitions":
 *
 * @example
 *    {
 *     "type": "array",
 *     "items": { "$ref": "#/definitions/positiveInteger" },
 *     "definitions": {
 *         "positiveInteger": {
 *             "type": "integer",
 *             "exclusiveMinimum": 0
 *         }
 *     }
 *    }
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-9
 */
interface JSONSchema7Definitions<Format> {
    definitions?: { [key: string]: JSONSchema7Definition<Format> };
}

/**
 * 10. Schema Annotations
 *
 * Schema validation is a useful mechanism for annotating instance data
 * with additional information. The rules for determining when and how
 * annotations are associated with an instance are outlined in section
 * 3.3.
 *
 * These general-purpose annotation keywords provide commonly used
 * information for documentation and user interface display purposes.
 * They are not intended to form a comprehensive set of features.
 * Rather, additional vocabularies can be defined for more complex
 * annotation-based applications.
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10
 */
interface JSONSchema7SchemaAnnotations<T> {
    /**
     * 10.1. "title" and "description"
     *
     * The value of both of these keywords MUST be a string.
     *
     * Both of these keywords can be used to decorate a user interface with
     * information about the data produced by this user interface. A title
     * will preferably be short, whereas a description will provide
     * explanation about the purpose of the instance described by this
     * schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10.1
     */
    title?: string;
    /**
     * 10.1. "title" and "description"
     *
     * The value of both of these keywords MUST be a string.
     *
     * Both of these keywords can be used to decorate a user interface with
     * information about the data produced by this user interface. A title
     * will preferably be short, whereas a description will provide
     * explanation about the purpose of the instance described by this
     * schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10.1
     */
    description?: string;
    /**
     * 10.2. "default"
     *
     * There are no restrictions placed on the value of this keyword. When
     * multiple occurrences of this keyword are applicable to a single sub-
     * instance, implementations SHOULD remove duplicates.
     *
     * This keyword can be used to supply a default JSON value associated
     * with a particular schema. It is RECOMMENDED that a default value be
     * valid against the associated schema.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10.2
     */
    default?: T;
    /**
     * 10.3. "readOnly" and "writeOnly"
     *
     * The value of these keywords MUST be a boolean. When multiple
     * occurrences of these keywords are applicable to a single sub-
     * instance, the resulting value MUST be true if any occurrence
     * specifies a true value, and MUST be false otherwise.
     *
     * If "readOnly" has a value of boolean true, it indicates that the
     * value of the instance is managed exclusively by the owning authority,
     * and attempts by an application to modify the value of this property
     * are expected to be ignored or rejected by that owning authority.
     *
     * An instance document that is marked as "readOnly for the entire
     * document MAY be ignored if sent to the owning authority, or MAY
     * result in an error, at the authority's discretion.
     *
     * If "writeOnly" has a value of boolean true, it indicates that the
     * value is never present when the instance is retrieved from the owning
     * authority. It can be present when sent to the owning authority to
     * update or create the document (or the resource it represents), but it
     * will not be included in any updated or newly created version of the
     * instance.
     *
     * An instance document that is marked as "writeOnly" for the entire
     * document MAY be returned as a blank document of some sort, or MAY
     * produce an error upon retrieval, or have the retrieval request
     * ignored, at the authority's discretion.
     *
     * For example, "readOnly" would be used to mark a database-generated
     * serial number as read-only, while "writeOnly" would be used to mark a
     * password input field.
     *
     * These keywords can be used to assist in user interface instance
     * generation. In particular, an application MAY choose to use a widget
     * that hides input values as they are typed for write-only fields.
     *
     * Omitting these keywords has the same behavior as values of false.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10.3
     */
    readOnly?: boolean;
    /**
     * 10.3. "readOnly" and "writeOnly"
     *
     * The value of these keywords MUST be a boolean. When multiple
     * occurrences of these keywords are applicable to a single sub-
     * instance, the resulting value MUST be true if any occurrence
     * specifies a true value, and MUST be false otherwise.
     *
     * If "readOnly" has a value of boolean true, it indicates that the
     * value of the instance is managed exclusively by the owning authority,
     * and attempts by an application to modify the value of this property
     * are expected to be ignored or rejected by that owning authority.
     *
     * An instance document that is marked as "readOnly for the entire
     * document MAY be ignored if sent to the owning authority, or MAY
     * result in an error, at the authority's discretion.
     *
     * If "writeOnly" has a value of boolean true, it indicates that the
     * value is never present when the instance is retrieved from the owning
     * authority. It can be present when sent to the owning authority to
     * update or create the document (or the resource it represents), but it
     * will not be included in any updated or newly created version of the
     * instance.
     *
     * An instance document that is marked as "writeOnly" for the entire
     * document MAY be returned as a blank document of some sort, or MAY
     * produce an error upon retrieval, or have the retrieval request
     * ignored, at the authority's discretion.
     *
     * For example, "readOnly" would be used to mark a database-generated
     * serial number as read-only, while "writeOnly" would be used to mark a
     * password input field.
     *
     * These keywords can be used to assist in user interface instance
     * generation. In particular, an application MAY choose to use a widget
     * that hides input values as they are typed for write-only fields.
     *
     * Omitting these keywords has the same behavior as values of false.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10.3
     */
    writeOnly?: boolean;
    /**
     * 10.4. "examples"
     *
     * The value of this keyword MUST be an array. There are no
     * restrictions placed on the values within the array. When multiple
     * occurrences of this keyword are applicable to a single sub-instance,
     * implementations MUST provide a flat array of all values rather than
     * an array of arrays.
     *
     * This keyword can be used to provide sample JSON values associated
     * with a particular schema, for the purpose of illustrating usage. It
     * is RECOMMENDED that these values be valid against the associated
     * schema.
     *
     * Implementations MAY use the value(s) of "default", if present, as an
     * additional example. If "examples" is absent, "default" MAY still be
     * used in this manner.
     *
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10.4
     */
    examples?: T[];
}

type JSONSchema7Definition<Format> = (
    | {
        type: "null";
    }
    | {
        type: "integer" | "number";
    } & Omit<JSONSchema7AnyAttributes<number>, "type"> & JSONSchema7NumericalKeywords<number> & JSONSchema7Logical<number, Format> & JSON7SchemaConditionalKeywords<number, Format>
    | {
        type: "object";
    } & Omit<JSONSchema7AnyAttributes<{ [key: string]: any; }>, "type"> & JSONSchema7ObjectKeywords<{ [key: string]: any; }, Format> & JSONSchema7Logical<{ [key: string]: any; }, Format> & JSON7SchemaConditionalKeywords<{ [key: string]: any; }, Format>
    | {
        type: "array";
    } & Omit<JSONSchema7AnyAttributes<any[]>, "type"> & JSONSchema7ArrayKeywords<any[], Format> & JSONSchema7Logical<any[], Format> & JSON7SchemaConditionalKeywords<any[], Format>
    | {
        type: "boolean";
    } & Omit<JSONSchema7AnyAttributes<boolean>, "type"> & JSONSchema7Logical<boolean, Format> & JSON7SchemaConditionalKeywords<boolean, Format>
    | {
        type: "string";
    } & Omit<JSONSchema7AnyAttributes<string>, "type"> & JSONSchema7NonJSONDataStringEncoding<string> & JSONSchema7StringKeywords<string> & JSONSchema7Logical<string, Format> & JSON7SchemaConditionalKeywords<string, Format>
) & JSONSchema7Format<Format> & JSONSchema7Meta;

interface JSONSchema7Meta {
    $id?: string;
    $ref?: string;
    $comment?: string;
}

/**
 * JSON Schema v7
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 */
export interface JSONSchema7Base<T extends { [key: string]: any } | any[] | boolean | string | number | null, Format = JSONSchema7DefinedFormats> extends
    JSONSchema7NumericalKeywords<T>,
    JSONSchema7StringKeywords<T>,
    JSONSchema7ArrayKeywords<T, Format>,
    JSONSchema7ObjectKeywords<T, Format>,
    JSON7SchemaConditionalKeywords<T, Format>,
    JSONSchema7Format<Format>,
    JSONSchema7AnyAttributes<T>,
    JSONSchema7Logical<T, Format>,
    JSONSchema7SchemaAnnotations<T>,
    JSONSchema7NonJSONDataStringEncoding<T> { }

export type JSONSchema7<T extends { [key: string]: any } | any[] | boolean | string | number | null = never, Format = JSONSchema7DefinedFormats> = [T] extends [never]
    ? JSONSchema7Definition<Format>
    : JSONSchema7Base<T, Format> & JSONSchema7MetaSchema & JSONSchema7Meta;