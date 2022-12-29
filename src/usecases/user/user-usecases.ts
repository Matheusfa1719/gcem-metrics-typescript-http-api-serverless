import { v4 } from "uuid";
import { UserFactoryService } from "../../models";
import { CreateUserDto } from "../../core/dtos";
import { hashPassword, putItem } from "../../lib";

class UserUseCases {
  private userFactoryService: UserFactoryService;

  constructor(userFactoryService: UserFactoryService) {
    this.userFactoryService = userFactoryService;
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = createUserDto;
    user.password = await hashPassword(createUserDto.password);
    const item = this.userFactoryService.dynamoCreateNewUser(user);
    await putItem(process.env.USERS_TABLE as string, item);
  }
}
