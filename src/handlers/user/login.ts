import { APIGatewayProxyHandler } from "aws-lambda";
import { defaultErrorResponse } from "../../lib";
import { getRequestBody } from "../../lib/http/getRequestBody";
import * as userMiddleware from "./middlewares";
import { login } from "./services";

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    await userMiddleware.createLoginBodyValidation(event);
    const body = getRequestBody(event);
    const token = await login(body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        statusCode: 200,
        data: {
            access_token: token
        }
      }),
    };
  } catch (err) {
    return defaultErrorResponse(err);
  }
};
