"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorResponse = void 0;
function defaultErrorResponse(error) {
    return {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
            message: error.message || 'Server Error',
        }),
    };
}
exports.defaultErrorResponse = defaultErrorResponse;
//# sourceMappingURL=defautErrorResponse.js.map