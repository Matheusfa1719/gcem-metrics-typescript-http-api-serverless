"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestBody = void 0;
const getRequestBody = (event) => {
    if (!event.body) {
        throw { statusCode: 400, message: 'Missing Request Body' };
    }
    return JSON.parse(event.body);
};
exports.getRequestBody = getRequestBody;
//# sourceMappingURL=getRequestBody.js.map