"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFactoryService = void 0;
class ErrorFactoryService {
    createNewError(statusCode, message) {
        return {
            statusCode,
            message,
        };
    }
}
exports.ErrorFactoryService = ErrorFactoryService;
//# sourceMappingURL=error-factory.js.map