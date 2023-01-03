import { APIGatewayProxyResult } from 'aws-lambda';

export function defaultErrorResponse(error: any): APIGatewayProxyResult {
  return {
    statusCode: error.statusCode || 500,
    body: JSON.stringify({
      message: error.message || 'Server Error',
    }),
  };
}

export function createNewError(statusCode: number, message: string) {
  return {
    statusCode,
    message,
  };
}