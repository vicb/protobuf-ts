import {Fixture} from "./index";


const f: Fixture[] = [];
export default f;

f.push({
    typeName: "spec.ScalarValuesMessage",
    fields: [
        {no: 1, name: "double_field", kind: "scalar", T: 1 /*double*/},
        {no: 2, name: "float_field", kind: "scalar", T: 2 /*float*/},
        {no: 3, name: "int64_field", kind: "scalar", T: 3 /*int64*/},
        {no: 4, name: "uint64_field", kind: "scalar", T: 4 /*uint64*/},
        {no: 5, name: "int32_field", kind: "scalar", T: 5 /*int32*/},
        {no: 6, name: "fixed64_field", kind: "scalar", T: 6 /*fixed64*/},
        {no: 7, name: "fixed32_field", kind: "scalar", T: 7 /*fixed32*/},
        {no: 8, name: "bool_field", kind: "scalar", T: 8 /*bool*/},
        {no: 9, name: "string_field", kind: "scalar", T: 9 /*string*/},
        {no: 11, name: "bytes_field", kind: "scalar", T: 12 /*bytes*/},
        {no: 12, name: "uint32_field", kind: "scalar", T: 13 /*uint32*/},
        {no: 14, name: "sfixed32_field", kind: "scalar", T: 15 /*sfixed32*/},
        {no: 15, name: "sfixed64_field", kind: "scalar", T: 16 /*sfixed64*/},
        {no: 16, name: "sint32_field", kind: "scalar", T: 17 /*sint32*/},
        {no: 17, name: "sint64_field", kind: "scalar", T: 18 /*sint64*/}
    ],
    messages: {
        "default": {
            doubleField: 0,
            floatField: 0,
            int64Field: "0",
            uint64Field: "0",
            int32Field: 0,
            fixed64Field: "0",
            fixed32Field: 0,
            boolField: false,
            stringField: "",
            bytesField: new Uint8Array(0),
            uint32Field: 0,
            sfixed32Field: 0,
            sfixed64Field: "0",
            sint32Field: 0,
            sint64Field: "0",
        },
        "example": {
            doubleField: 0.75,
            floatField: -0.75,
            int64Field: "-1",
            uint64Field: "1",
            int32Field: -123,
            fixed64Field: "1",
            fixed32Field: 123,
            boolField: true,
            stringField: "hello world",
            bytesField: new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]),
            uint32Field: 123,
            sfixed32Field: -123,
            sfixed64Field: "-1",
            sint32Field: -1,
            sint64Field: "-1",
        },
    },
    json: {
        "default": {},
        "example": {
            doubleField: 0.75,
            floatField: -0.75,
            int64Field: "-1",
            uint64Field: "1",
            int32Field: -123,
            fixed64Field: "1",
            fixed32Field: 123,
            boolField: true,
            stringField: "hello world",
            bytesField: "aGVsbG8gd29ybGQ=",
            uint32Field: 123,
            sfixed32Field: -123,
            sfixed64Field: "-1",
            sint32Field: -1,
            sint64Field: "-1"
        },
        "nulls equalling defaults": {
            doubleField: null,
            floatField: null,
            int64Field: null,
            uint64Field: null,
            int32Field: null,
            fixed64Field: null,
            fixed32Field: null,
            boolField: null,
            stringField: null,
            bytesField: null,
            uint32Field: null,
            sfixed32Field: null,
            sfixed64Field: null,
            sint32Field: null,
            sint64Field: null,
        },
    },
    jsonReads: {
        "double_field": {
            "key not present": {input: undefined, expect: 0},
            "null": {input: null, expect: 0},
            "NaN": {input: "NaN", expect: Number.NaN},
            "0 string": {input: "0", expect: 0},
            "Infinity": {input: "Infinity", expect: Number.POSITIVE_INFINITY},
            "-Infinity": {input: "-Infinity", expect: Number.NEGATIVE_INFINITY},
            "scientific not.": {input: "5.56789e+0", expect: 5.56789},
        },
        "int64_field": {
            "0 as string": {input: "0", expect: "0"},
            "0 as number": {input: 0, expect: "0"},
        },
        "uint64_field": {
            "0 as string": {input: "0", expect: "0"},
            "0 as number": {input: 0, expect: "0"},
        },
        "int32_field": {
            "0 as string": {input: "0", expect: 0},
            "0 as number": {input: 0, expect: 0},
        },
        "fixed64_field": {
            "0 as string": {input: "0", expect: "0"},
            "0 as number": {input: 0, expect: "0"},
        },
        "fixed32_field": {
            "0 as string": {input: "0", expect: 0},
            "0 as number": {input: 0, expect: 0},
        },
        "uint32_field": {
            "0 as string": {input: "0", expect: 0},
            "0 as number": {input: 0, expect: 0},
        },
        "sfixed32_field": {
            "0 as string": {input: "0", expect: 0},
            "0 as number": {input: 0, expect: 0},
        },
        "sfixed64_field": {
            "0 as string": {input: "0", expect: "0"},
            "0 as number": {input: 0, expect: "0"},
        },
        "sint32_field": {
            "0 as string": {input: "0", expect: 0},
            "0 as number": {input: 0, expect: 0},
        },
        "sint64_field": {
            "0 as string": {input: "0", expect: "0"},
            "0 as number": {input: 0, expect: "0"},
        },
        "bool_field": {
            "null": {input: null, expect: false},
            "true": {input: true, expect: true},
            "false": {input: false, expect: false},
        },
        "string_field": {
            "null": {input: null, expect: ""},
            "hello": {input: "hello", expect: "hello"},
            "empty string": {input: "", expect: ""},
        },
    },
    jsonWrites: {
        "double_field": {
            "NaN": {input: Number.NaN, expect: "NaN"},
            "Infinity": {input: Number.POSITIVE_INFINITY, expect: "Infinity"},
            "-Infinity": {input: Number.NEGATIVE_INFINITY, expect: "-Infinity"},
            "0": {input: 0, expect: undefined},
            "0 with emitDefaultValues:true": {input: 0, expect: 0, options: {emitDefaultValues: true}},
        },
    },
    jsonReadErrors: {
        "double_field": {
            "invalid string": {input: "invalid string", expect: /.*/},
            "empty string": {input: "", expect: /.*/},
            "bool value": {input: true, expect: /.*/},
            "[] value": {input: [], expect: /.*/},
            "{} value": {input: {}, expect: /.*/},
            "true": {input: true, expect: /.*/},
        },
        "int32_field": {
            "invalid string": {input: "invalid string", expect: /.*/},
            "empty string": {input: "", expect: /.*/},
            "bool value": {input: true, expect: /Cannot parse JSON true/},
            "[] value": {input: [], expect: /Cannot parse JSON array/},
            "{} value": {input: {}, expect: /Cannot parse JSON object/},
            "Infinity": {input: "Infinity", expect: /.*/},
            "-Infinity": {input: "-Infinity", expect: /.*/},
            "NaN": {input: "NaN", expect: /.*/},
            "true": {input: true, expect: /Cannot parse JSON true/},
            "fraction number": {input: 0.5, expect: /.*/},
            "fraction number as string": {input: "0.5", expect: /.*/},
        },
        "uint32_field": {
            "invalid string": {input: "invalid string", expect: /.*/},
            "empty string": {input: "", expect: /.*/},
            "bool value": {input: true, expect: /Cannot parse JSON true/},
            "[] value": {input: [], expect: /Cannot parse JSON array/},
            "{} value": {input: {}, expect: /Cannot parse JSON object/},
            "Infinity": {input: "Infinity", expect: /.*/},
            "-Infinity": {input: "-Infinity", expect: /.*/},
            "NaN": {input: "NaN", expect: /.*/},
            "true": {input: true, expect: /Cannot parse JSON true/},
            "signed number": {input: -1, expect: /.*/},
            "signed number as string": {input: "-1", expect: /.*/},
            "fraction number": {input: 0.5, expect: /.*/},
            "fraction number as string": {input: "0.5", expect: /.*/},
        },
        "int64_field": {
            "invalid string": {input: "invalid string", expect: /.*/},
            "empty string": {input: "", expect: /.*/},
            "bool value": {input: true, expect: /Cannot parse JSON true/},
            "[] value": {input: [], expect: /Cannot parse JSON array/},
            "{} value": {input: {}, expect: /Cannot parse JSON object/},
            "Infinity": {input: "Infinity", expect: /.*/},
            "-Infinity": {input: "-Infinity", expect: /.*/},
            "NaN": {input: "NaN", expect: /.*/},
            "true": {input: true, expect: /Cannot parse JSON true/},
            "fraction number": {input: 0.5, expect: /.*/},
            "fraction number as string": {input: "0.5", expect: /.*/},
        },
        "uint64_field": {
            "invalid string": {input: "invalid string", expect: /.*/},
            "empty string": {input: "", expect: /.*/},
            "bool value": {input: true, expect: /Cannot parse JSON true/},
            "[] value": {input: [], expect: /Cannot parse JSON array/},
            "{} value": {input: {}, expect: /Cannot parse JSON object/},
            "Infinity": {input: "Infinity", expect: /.*/},
            "-Infinity": {input: "-Infinity", expect: /.*/},
            "NaN": {input: "NaN", expect: /.*/},
            "true": {input: true, expect: /Cannot parse JSON true/},
            "signed number": {input: -1, expect: /.*/},
            "signed number as string": {input: "-1", expect: /.*/},
            "fraction number": {input: 0.5, expect: /.*/},
            "fraction number as string": {input: "0.5", expect: /.*/},
        },
        "sint64_field": {
            "invalid string": {input: "invalid string", expect: /.*/},
            "empty string": {input: "", expect: /.*/},
            "bool value": {input: true, expect: /Cannot parse JSON true/},
            "[] value": {input: [], expect: /Cannot parse JSON array/},
            "{} value": {input: {}, expect: /Cannot parse JSON object/},
            "Infinity": {input: "Infinity", expect: /.*/},
            "-Infinity": {input: "-Infinity", expect: /.*/},
            "NaN": {input: "NaN", expect: /.*/},
            "true": {input: true, expect: /Cannot parse JSON true/},
            "fraction number": {input: 0.5, expect: /.*/},
            "fraction number as string": {input: "0.5", expect: /.*/},
        },
        "bytes_field": {
            "invalid encoding": {input: "invalid encoding !!", expect: /invalid base64 string/},
            "[] value": {input: [], expect: /Cannot parse JSON array/},
            "number value": {input: 123, expect: /.*/},
        },
        "bool_field": {
            "empty string": {input: "", expect: /Cannot parse JSON string/},
            "string 'true'": {input: "", expect: /Cannot parse JSON string/},
        },
    },
    invalidMessages: {
        "all types wrong": {
            doubleField: false,
            floatField: false,
            int64Field: false,
            uint64Field: false,
            int32Field: false,
            fixed64Field: false,
            fixed32Field: false,
            boolField: "str",
            stringField: false,
            bytesField: false,
            uint32Field: false,
            sfixed32Field: false,
            sfixed64Field: false,
            sint32Field: false,
            sint64Field: false,
        },
    },
});

f.push({
    typeName: "spec.RepeatedScalarValuesMessage",
    fields: [
        {no: 1, name: "double_field", kind: "scalar", T: 1 /*double*/, repeat: 1},
        {no: 2, name: "float_field", kind: "scalar", T: 2 /*float*/, repeat: 1},
        {no: 3, name: "int64_field", kind: "scalar", T: 3 /*int64*/, repeat: 1},
        {no: 4, name: "uint64_field", kind: "scalar", T: 4 /*uint64*/, repeat: 1},
        {no: 5, name: "int32_field", kind: "scalar", T: 5 /*int32*/, repeat: 1},
        {no: 6, name: "fixed64_field", kind: "scalar", T: 6 /*fixed64*/, repeat: 1},
        {no: 7, name: "fixed32_field", kind: "scalar", T: 7 /*fixed32*/, repeat: 1},
        {no: 8, name: "bool_field", kind: "scalar", T: 8 /*bool*/, repeat: 1},
        {no: 9, name: "string_field", kind: "scalar", T: 9 /*string*/, repeat: 2},
        {no: 11, name: "bytes_field", kind: "scalar", T: 12 /*bytes*/, repeat: 2},
        {no: 12, name: "uint32_field", kind: "scalar", T: 13 /*uint32*/, repeat: 1},
        {no: 14, name: "sfixed32_field", kind: "scalar", T: 15 /*sfixed32*/, repeat: 1},
        {no: 15, name: "sfixed64_field", kind: "scalar", T: 16 /*sfixed64*/, repeat: 1},
        {no: 16, name: "sint32_field", kind: "scalar", T: 17 /*sint32*/, repeat: 1},
        {no: 17, name: "sint64_field", kind: "scalar", T: 18 /*sint64*/, repeat: 1}
    ],
    messages: {
        "default": {
            doubleField: [],
            floatField: [],
            int64Field: [],
            uint64Field: [],
            int32Field: [],
            fixed64Field: [],
            fixed32Field: [],
            boolField: [],
            stringField: [],
            bytesField: [],
            uint32Field: [],
            sfixed32Field: [],
            sfixed64Field: [],
            sint32Field: [],
            sint64Field: []
        },
        "example": {
            doubleField: [0.75, 0, 1],
            floatField: [0.75, -0.75],
            int64Field: [
                "-1",
                "-2"
            ],
            uint64Field: [
                "1",
                "2"
            ],
            int32Field: [-123, 500],
            fixed64Field: [
                "1",
                "99"
            ],
            fixed32Field: [123, 999],
            boolField: [true, false, true],
            stringField: ["hello", "world"],
            bytesField: [
                new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100])
            ],
            uint32Field: [123, 123],
            sfixed32Field: [-123, -123, -123],
            sfixed64Field: [
                "-1",
                "-2",
                "100",
            ],
            sint32Field: [-1, -2, 999],
            sint64Field: [
                "-1",
                "-99",
                "99",
            ]
        },
    },
    json: {
        "default": {},
        "example": {
            doubleField: [0.75, 0, 1],
            floatField: [0.75, -0.75],
            int64Field: ["-1", "-2"],
            uint64Field: ["1", "2"],
            int32Field: [-123, 500],
            fixed64Field: ["1", "99"],
            fixed32Field: [123, 999],
            boolField: [true, false, true],
            stringField: ["hello", "world"],
            bytesField: ["aGVsbG8gd29ybGQ="],
            uint32Field: [123, 123],
            sfixed32Field: [-123, -123, -123],
            sfixed64Field: ["-1", "-2", "100"],
            sint32Field: [-1, -2, 999],
            sint64Field: ["-1", "-99", "99"]
        },
        "nulls equalling defaults": {
            doubleField: null,
            floatField: null,
            int64Field: null,
            uint64Field: null,
            int32Field: null,
            fixed64Field: null,
            fixed32Field: null,
            boolField: null,
            stringField: null,
            bytesField: null,
            uint32Field: null,
            sfixed32Field: null,
            sfixed64Field: null,
            sint32Field: null,
            sint64Field: null,
        },
    },
    jsonReads: {},
    jsonReadErrors: {
        "string_field": {
            "wrong type item": {input: [123], expect: /.*/},
        },
        "double_field": {
            "null fails to parse": {
                input: [null],
                expect: /Cannot parse JSON null for /
            }
        },
    },
    jsonWrites: {
        "string_field": {
            "emitDefaultValues:true": { input: [], expect: [], options: {emitDefaultValues:true} }
        }
    },
    invalidMessages: {
        "all types wrong": {
            doubleField: false,
            floatField: false,
            int64Field: false,
            uint64Field: false,
            int32Field: false,
            fixed64Field: false,
            fixed32Field: false,
            boolField: "str",
            stringField: false,
            bytesField: false,
            uint32Field: false,
            sfixed32Field: false,
            sfixed64Field: false,
            sint32Field: false,
            sint64Field: false,
        },
    }

});
