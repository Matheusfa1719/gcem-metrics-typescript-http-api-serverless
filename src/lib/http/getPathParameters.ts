import { APIGatewayProxyEvent } from "aws-lambda";
import { createNewError } from "./errorResponse";

export const getPathParameters = (event: APIGatewayProxyEvent) => {
    if (!event.pathParameters) {
        throw createNewError(400, 'Bad Request')
    }
    return event.pathParameters;
}