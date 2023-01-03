import { CreateUserDto } from "../dtos"
import * as userData from '../data';
import * as userFactory from '../factory';
import { createNewError, hashPassword } from "../../../lib";

export const createUser = async (createUserDto: CreateUserDto) => {
  try {
    const userAlreadyExist = await userData.checkUserExist(createUserDto.email);
    if (userAlreadyExist) throw createNewError(400, 'Usuário já cadastrado');
    createUserDto.password = await hashPassword(createUserDto.password);
    const newUser = userFactory.dynamoCreateNewUser(createUserDto);
    await userData.putItem(newUser);
    return userFactory.createdUserResponse(newUser.userId.S, createUserDto, newUser.createdAt.S);
  } catch (err) {
    throw err;
  }
}