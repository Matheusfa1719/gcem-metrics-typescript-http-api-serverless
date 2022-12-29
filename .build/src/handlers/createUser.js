"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const lib_1 = require("../lib");
const getRequestBody_1 = require("../lib/getRequestBody");
const usecases_1 = require("../usecases");
const handler = async (event) => {
    try {
        const body = (0, getRequestBody_1.getRequestBody)(event);
        await (0, usecases_1.validationCreateUserDto)(body);
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Hello World"
            })
        };
    }
    catch (error) {
        return (0, lib_1.defaultErrorResponse)(error);
    }
};
exports.handler = handler;
//# sourceMappingURL=createUser.js.map