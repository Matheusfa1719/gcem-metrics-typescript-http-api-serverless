import { APIGatewayProxyEvent } from "aws-lambda";
import { validate } from "class-validator";
import { getRequestBody } from "../../../lib/http/getRequestBody";
import { CreateUserDto, LoginDto } from "../dtos";
import * as userData from "../data";
import { createNewError } from "../../../lib";

export const createUserBodyValidation = async (event: APIGatewayProxyEvent) => {
    const body = getRequestBody(event);
    const user = new CreateUserDto();
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;
    user.password = body.password;
    user.role = body.role;
    const errors = await validate(user);
    if (errors.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Invalid request, missing body parameters',
        }),
      };
    }
}

export const createLoginBodyValidation = async (event: APIGatewayProxyEvent) => {
  const body = getRequestBody(event);
  const login = new LoginDto();
  login.email = body.email;
  login.password = body.password;
  const errors = await validate(login);
  if (errors.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid request, missing body parameters',
      }),
    };
  }
}

export const getUserInfo = async (userId: string) => {
  const user = await userData.findUserById(userId);
  if (!user) throw createNewError(404, 'Usuário não encontrado')
  return user;
}