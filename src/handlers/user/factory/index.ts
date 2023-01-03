import { v4 } from 'uuid';
import { CreateUserDto } from "../dtos"

export const dynamoCreateNewUser = (user: CreateUserDto): AWS.DynamoDB.AttributeMap =>  {
    return {
        userId: { S: v4() as string },
        firstName: { S: user.firstName },
        lastName: { S: user.lastName },
        email: { S: user.email },
        password: { S: user.password },
        role: { S: user.role },
        createdAt: { S: new Date().toISOString() },
    };
  }

export const createdUserResponse = (id: string | undefined, createUserDto: CreateUserDto, createdAt: string | undefined) => {
    return {
        userId: id,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        role: createUserDto.role,
        createdAt: createdAt
      }
}