import { APIGatewayProxyEvent } from 'aws-lambda';

export const getRequestBody = (event: APIGatewayProxyEvent) => {
  if (!event.body) {
    throw { statusCode: 400, message: 'Missing Request Body' };
  }
  return JSON.parse(event.body);
}
