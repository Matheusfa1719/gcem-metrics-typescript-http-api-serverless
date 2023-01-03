import { APIGatewayProxyHandler } from "aws-lambda";
import { validate, ValidationError } from "class-validator";
import { User } from "../core/entities";
import { defaultErrorResponse, validateReqBody } from "../lib";
import { getRequestBody } from "../lib/http/getRequestBody";
import { ErrorFactoryService, UserFactoryService } from "../models";
import { UserUseCases, validationCreateUserDto } from "../usecases";

const userFactoryService = new UserFactoryService();
const errorFactoryService =  new ErrorFactoryService();
const userUseCases = new UserUseCases(userFactoryService, errorFactoryService);


export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const body = getRequestBody(event);
        await validationCreateUserDto(body);
        const createdUser = await userUseCases.createUser(body);
        return {
            statusCode: 201,
            body: JSON.stringify(
                {
                    success: true,
                    statusCode: 201,
                    data: createdUser
                }
            )
        }
      } catch (error) {
        return defaultErrorResponse(error);
      }
}