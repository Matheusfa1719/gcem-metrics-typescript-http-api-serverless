"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const lib_1 = require("../lib");
const getRequestBody_1 = require("../lib/getRequestBody");
const models_1 = require("../models");
const usecases_1 = require("../usecases");
const userFactoryService = new models_1.UserFactoryService();
const errorFactoryService = new models_1.ErrorFactoryService();
const userUseCases = new usecases_1.UserUseCases(userFactoryService, errorFactoryService);
const handler = async (event) => {
    try {
        const body = (0, getRequestBody_1.getRequestBody)(event);
        await (0, usecases_1.validationCreateUserDto)(body);
        const createdUser = await userUseCases.createUser(body);
        console.log(createdUser);
        return {
            statusCode: 201,
            body: JSON.stringify({
                success: true,
                statusCode: 201,
                data: createdUser
            })
        };
    }
    catch (error) {
        return (0, lib_1.defaultErrorResponse)(error);
    }
};
exports.handler = handler;
//# sourceMappingURL=createUser.js.map