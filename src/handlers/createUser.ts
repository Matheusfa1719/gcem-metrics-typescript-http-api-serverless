import { APIGatewayProxyHandler } from "aws-lambda";
import { validate, ValidationError } from "class-validator";
import { User } from "../core/entities";
import { defaultErrorResponse, validateReqBody } from "../lib";
import { getRequestBody } from "../lib/getRequestBody";
import { ErrorFactoryService, UserFactoryService } from "../models";
import { validationCreateUserDto } from "../usecases";



export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const body = getRequestBody(event);
        await validationCreateUserDto(body);
        return {
            statusCode: 201,
            body: JSON.stringify(
                {
                    message: "Hello World"
                }
            )
        }
      } catch (error) {
        return defaultErrorResponse(error);
      }
}