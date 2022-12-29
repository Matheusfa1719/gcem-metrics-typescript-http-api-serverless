"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReqBody = void 0;
const class_validator_1 = require("class-validator");
async function validateReqBody(dto) {
    const errors = await (0, class_validator_1.validate)(dto);
    if (errors.length > 0) {
        throw { statusCode: 400, message: errors };
    }
}
exports.validateReqBody = validateReqBody;
//# sourceMappingURL=requestValidator.js.map