"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCases = void 0;
const lib_1 = require("../../lib");
class UserUseCases {
    constructor(userFactoryService, errorFactoryService) {
        this.userFactoryService = userFactoryService;
        this.errorFactoryService = errorFactoryService;
    }
    async createUser(createUserDto) {
        try {
            const user = createUserDto;
            user.password = await (0, lib_1.hashPassword)(createUserDto.password);
            const item = this.userFactoryService.dynamoCreateNewUser(user);
            await (0, lib_1.putItem)(process.env.USERS_TABLE, item);
            return this.userFactoryService.createdUserResponse(item.userId.S, user, item.createdAt.S);
        }
        catch (err) {
            console.log(err);
            throw this.errorFactoryService.createNewError(500, 'Bad Request');
        }
    }
}
exports.UserUseCases = UserUseCases;
//# sourceMappingURL=user-usecases.js.map