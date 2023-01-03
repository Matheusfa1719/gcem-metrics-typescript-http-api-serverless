import { APIGatewayProxyHandler } from "aws-lambda";
import * as userMiddleware from "./middlewares"; 
import { defaultErrorResponse } from "../../lib";
import { getRequestBody } from "../../lib/http/getRequestBody";
import { createUser } from "./services";

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        await userMiddleware.createUserBodyValidation(event);
        const body = getRequestBody(event);
        const createdUser = await createUser(body);
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