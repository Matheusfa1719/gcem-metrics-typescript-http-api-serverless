"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactoryService = void 0;
const entities_1 = require("../core/entities");
class UserFactoryService {
    createNewUser(createUserDto) {
        const user = new entities_1.User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.role = createUserDto.role;
        return user;
    }
}
exports.UserFactoryService = UserFactoryService;
//# sourceMappingURL=user-factory.js.map