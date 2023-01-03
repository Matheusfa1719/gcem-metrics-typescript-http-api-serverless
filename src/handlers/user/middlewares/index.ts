import { APIGatewayProxyEvent } from "aws-lambda";
import { validate } from "class-validator";
import { getRequestBody } from "../../../lib/http/getRequestBody";
import { CreateUserDto } from "../dtos";

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