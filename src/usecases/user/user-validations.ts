import { validate } from "class-validator";
import { CreateUserDto } from "../../core/dtos";
import { parseClassValidatorResponse } from "../../lib";
import { ErrorFactoryService, UserFactoryService } from "../../models";

export const validationCreateUserDto = async (createUserDto: CreateUserDto) => {
  const userFactoryService = new UserFactoryService();
  const errorFactoryService = new ErrorFactoryService();
  const user = userFactoryService.createNewUser(createUserDto);
  const errors = await validate(user, { stopAtFirstError: true });
  const parsedErrors = parseClassValidatorResponse(errors);
  if (errors.length > 0) {
    throw errorFactoryService.createNewError(400, parsedErrors);
  }
};
