import { v4 } from "uuid";
import { CreateUserDto } from "../core/dtos";
import { User } from "../core/entities";

export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto): User {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.role = createUserDto.role;
    return user;
  }

  dynamoCreateNewUser(user: User): AWS.DynamoDB.AttributeMap {
    return {
        id: { S: v4() },
        firstName: { S: user.firstName },
        lastName: { S: user.lastName },
        email: { S: user.email },
        password: { S: user.password },
        role: { S: user.role },
        createdAt: { S: new Date().toISOString() },
    };
  }
}
