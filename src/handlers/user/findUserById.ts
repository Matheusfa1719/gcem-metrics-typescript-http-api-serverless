import { APIGatewayProxyHandler } from "aws-lambda";
import { defaultErrorResponse, getPathParameters } from "../../lib";
import { findUserById } from "./services";

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const params = getPathParameters(event);
        const userId = params.userId;
        const user = await findUserById(userId as string);
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                statusCode: 200,
                data: user
              }),
        }

    } catch (err) {
        return defaultErrorResponse(err);
    }
}