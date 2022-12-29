"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactoryService = void 0;
const uuid_1 = require("uuid");
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
    dynamoCreateNewUser(user) {
        return {
            userId: { S: (0, uuid_1.v4)() },
            firstName: { S: user.firstName },
            lastName: { S: user.lastName },
            email: { S: user.email },
            password: { S: user.password },
            role: { S: user.role },
            createdAt: { S: new Date().toISOString() },
        };
    }
    createdUserResponse(id, user, createdAt) {
        return {
            userId: id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            createdAt: createdAt
        };
    }
}
exports.UserFactoryService = UserFactoryService;
//# sourceMappingURL=user-factory.js.map