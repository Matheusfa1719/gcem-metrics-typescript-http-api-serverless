"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const lib_1 = require("../../lib");
const models_1 = require("../../models");
const validationCreateUserDto = async (createUserDto) => {
    const userFactoryService = new models_1.UserFactoryService();
    const errorFactoryService = new models_1.ErrorFactoryService();
    const user = userFactoryService.createNewUser(createUserDto);
    const errors = await (0, class_validator_1.validate)(user, { stopAtFirstError: true });
    const parsedErrors = (0, lib_1.parseClassValidatorResponse)(errors);
    if (errors.length > 0) {
        throw errorFactoryService.createNewError(400, parsedErrors);
    }
};
exports.validationCreateUserDto = validationCreateUserDto;
//# sourceMappingURL=user-validations.js.map