export class ErrorFactoryService {
  createNewError(statusCode, message) {
    return {
      statusCode,
      message,
    };
  }
}
