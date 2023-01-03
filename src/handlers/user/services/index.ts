import * as userData from '../data';
import * as userFactory from '../factory';
import * as jwt from 'jsonwebtoken';
import { CreateUserDto, LoginDto } from "../dtos"
import { comparePassword, createNewError, hashPassword } from "../../../lib";
import { getConfigs } from '../../../config';

export const findUserById = async (userId: string) => {
  try {
    const user = await userData.findUserById(userId);
    if (!user) throw createNewError(404, 'Usuário não localizado');
    return userFactory.userResponse(user);
  } catch (err) {
    throw (err);
  }
}

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

export const login = async (loginDto: LoginDto) => {
  try {
    const configs = await getConfigs();
    const user = await userData.findUserByEmail(loginDto.email);
    if (!user) throw createNewError(401, 'Credenciais invalidas');
    const isValidPassword = await comparePassword(user.password.S as string, loginDto.password);
    if (!isValidPassword) throw createNewError(401, 'Credenciais invalidas');
    const token = jwt.sign({userId: user.userId.S}, configs.secretJWT as string);
    return token;
  } catch (err) {
    throw err;
  }
}