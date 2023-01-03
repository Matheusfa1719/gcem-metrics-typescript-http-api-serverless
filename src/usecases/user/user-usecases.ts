import { ErrorFactoryService, UserFactoryService } from "../../models";
import { CreateUserDto } from "../../core/dtos";
import { findUserByEmail, hashPassword, putItem } from "../../lib";

export class UserUseCases {
  private userFactoryService: UserFactoryService;
  private errorFactoryService: ErrorFactoryService;

  constructor(userFactoryService: UserFactoryService, errorFactoryService: ErrorFactoryService) {
    this.userFactoryService = userFactoryService;
    this.errorFactoryService = errorFactoryService;
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const user = createUserDto;
      const userAlreadyExist = await findUserByEmail(process.env.USERS_TABLE as string, user.email);
      if (userAlreadyExist) {
        throw this.errorFactoryService.createNewError(400, 'User already exists');
      }
      user.password = await hashPassword(createUserDto.password);
      const item = this.userFactoryService.dynamoCreateNewUser(user);
      await putItem(process.env.USERS_TABLE as string, item);
      return this.userFactoryService.createdUserResponse(item.userId.S, user, item.createdAt.S);
    } catch (err) {
      throw err;
    }
  }
}
