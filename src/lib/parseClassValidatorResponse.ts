import { ValidationError } from "class-validator";

export const parseClassValidatorResponse = (error: ValidationError[]) => {
    const errors = error.map(e => {
        return { propretyName: e.property, errors: Object.values(e.constraints as Object) };
    });
    return errors
} 