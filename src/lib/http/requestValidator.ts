import { validate, ValidationError } from "class-validator";

export async function validateReqBody<T> (dto: any) {
    const errors: ValidationError[] = await validate(dto);
    if(errors.length > 0) {
        throw { statusCode: 400, message: errors }
    }
}