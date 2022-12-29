"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClassValidatorResponse = void 0;
const parseClassValidatorResponse = (error) => {
    const errors = error.map(e => {
        return { propretyName: e.property, errors: Object.values(e.constraints) };
    });
    return errors;
};
exports.parseClassValidatorResponse = parseClassValidatorResponse;
//# sourceMappingURL=parseClassValidatorResponse.js.map